import {
  getDevPostProject,
  extractKeywords,
  searchProjects,
  analyzeSimilarity,
  allSettled,
  getGithubInsights
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
  const response = {};
  const id = request.url.split('/api/project/')[1];
  
  async function* handler(id) {

    // get project details
    console.log('Getting project info...', id);
    const projectInfo = await getDevPostProject(id);
    response.project = projectInfo;
    yield JSON.stringify(response);

    // get github insigths
    const [owner, repo] = projectInfo.githubLink.split('https://github.com/')[1].split('/');
    response.githubInsights = await getGithubInsights(owner, repo.replace('.git', ''));
    yield JSON.stringify(response);

    // extract keywords
    console.log('Extracting keywords...');
    const keywords = await extractKeywords(projectInfo.description);
    console.log({ keywords });

    // search for similar projects
    console.log('Searching for similar projects...');
    const similarProjects = await searchProjects(keywords.join(' '));
    response.similarProjects = similarProjects.map(project => ({ project }));
    console.log(similarProjects);
    yield JSON.stringify(response);

    // enrich each project information
    const promises = [];
    for (let similarProject of similarProjects) {
      promises.push(new Promise(async resolve => {
        console.log('Getting more details on the project', similarProject.id);
        const detailedProject = await getDevPostProject(similarProject.id);
        if (detailedProject) {
          const similarityAnalysis = await analyzeSimilarity(projectInfo.description, detailedProject.description);
          const payload = { project: detailedProject, similarityAnalysis };
          return resolve(payload);
        }
        reject();
      }));
    }

    const results = await allSettled(promises)
      .then(results => results.filter(result => result.status === 'fulfilled'))
      .then(fulfilledResults => fulfilledResults.map(result => result.value));
    
    response.similarProjects = results;

    yield JSON.stringify(response);
    
    console.log('Script execution completed', results.length);

  };

  const iterator = handler(id);
  const stream = iteratorToStream(iterator);
  return new Response(stream, {
    headers: { 'Content-Type': 'application/json' }
  });

};