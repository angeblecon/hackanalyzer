import { NextResponse } from 'next/server';
import {
  getDevPostProject,
  extractKeywords,
  searchProjects,
  analyzeSimilarity,
  allSettled
} from '@/utils';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  
  console.log('Getting project info...', id);

  // get project details
  const projectInfo = await getDevPostProject(id);

  if (!projectInfo) {
    // handle error
  }

  console.log({ projectInfo });

  console.log('Extracting keywords...');

  // extract keywords
  const keywords = await extractKeywords(projectInfo.description);

  console.log({ keywords });

  console.log('Searching for similar projects...');

  // search for similar projects
  const similarProjects = await searchProjects(keywords.join(' '));

  console.log(similarProjects);

  const promises = [];

  // enrich each project information
  for (let similarProject of similarProjects) {
    promises.push(new Promise(async resolve => {
      console.log('Getting more details on the project', similarProject.id);
      const detailedProject = await getDevPostProject(similarProject.id);
      if (!detailedProject) {
        // handle error
      }
      const similarityAnalysis = await analyzeSimilarity(projectInfo.description, detailedProject.description);
      resolve({ detailedProject, similarityAnalysis });
    }));
  }

  const results = await allSettled(promises)
    .then(results => results.filter(result => result.status === 'fulfilled'))
    .then(fulfilledResults => fulfilledResults.map(result => result.value));
  
  console.log('Script execution completed');

  return NextResponse.json({
    status: 200,
    content: {
      project: projectInfo,
      keywords,
      similarProjects: results
    }
  });
};