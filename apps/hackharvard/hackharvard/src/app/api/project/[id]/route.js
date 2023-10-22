import {
  getDevPostProject,
  extractKeywords,
  searchProjects,
  analyzeSimilarity,
  allSettled,
  getGithubInsights,
  generateDescription
} from '@/utils';

function iteratorToStream(iterator) {
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.next();
      if (done) {
        controller.close();
      } else {
        controller.enqueue(value);
      }
    },
  });
}

export async function GET(request) {
  const id = request.url.split('/api/project/')[1];
  
  async function* handler(id) {

    // get project details
    console.log('Getting project info...', id);
    const projectInfo = await getDevPostProject(id);
    yield JSON.stringify({ project: { ...projectInfo }});
    const structuredDescription = await generateDescription(projectInfo.description);
    yield JSON.stringify({ project: { ...projectInfo, structuredDescription }});

    // get github insigths
    const [owner, repo] = projectInfo.githubLink.split('https://github.com/')[1].split('/');
    for await (const githubInsights of iteratorToStream(getGithubInsights(owner, repo.replace('.git', '')))) {
      yield JSON.stringify({ githubInsights: JSON.parse(githubInsights) });
    }

    // extract keywords
    console.log('Extracting keywords...');
    const keywords = await extractKeywords(projectInfo.description);
    console.log({ keywords });

    // search for similar projects
    console.log('Searching for similar projects...');
    const similarProjects = await searchProjects(keywords.join(' '))
      .then(r => r.filter(p => p.id !== projectInfo.id).map(project => ({ project })));
    yield JSON.stringify({ similarProjects });

    // enrich each project information
    const promises = [];
    for (let similarProject of similarProjects) {
      promises.push(new Promise(async (resolve, reject) => {
        console.log('Getting more details on the project', similarProject.project.id);
        const detailedProject = await getDevPostProject(similarProject.project.id);
        console.log({ detailedProject });
        if (detailedProject) {
          const { id, title, tagline, images } = detailedProject;
          const similarityAnalysis = await analyzeSimilarity(projectInfo.description, detailedProject.description);
          const payload = { project: { id, title, tagline, images }, similarityAnalysis };
          return resolve(payload);
        }
        resolve();
      }));
    }

    const results = await allSettled(promises)
      .then(results => results.filter(result => result.status === 'fulfilled' && result.value))
      .then(fulfilledResults => fulfilledResults.map(result => result.value));
    
    yield JSON.stringify({ similarProjects: results });
    
    console.log('Script execution completed', results.length);

  };

  const iterator = handler(id);
  const stream = iteratorToStream(iterator);
  return new Response(stream, {
    headers: { 'Content-Type': 'application/json' }
  });

};