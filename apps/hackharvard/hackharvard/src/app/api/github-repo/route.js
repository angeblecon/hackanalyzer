import { NextResponse } from 'next/server';
const util = require('util');
const exec = util.promisify(require('child_process').exec);

// export async function GET(request) {
//   const { searchParams } = new URL(request.url);
  // const user = searchParams.get('user');
  // const repo = searchParams.get('repo');

//   // Step 1: Clone a public repository (for example purposes, cloning a random repository)
//   // console.log('Cloning repository...');
//   // const githubCloning = await exec(`git clone https://github.com/${user}/${repo}.git`);
//   // console.log('Repository cloned.');

//   const databaseName = `${repo}-db`;

//   console.log('Creating CodeQL database...');
//   const codeQlDatabase = await exec(`codeql database create ${databaseName} --language=javascript --source-root=${repo}`);
//   console.log('CodeQL database created.');

//   console.log('Running CodeQL query...');
//   const codeQlQuery = await exec(`codeql database analyze ${databaseName} microsoft/coding-standards@1.0.0 github/security-queries --format=csv --output=query-results.csv --download`);
//   console.log('CodeQL query completed.');
    
//   // // Step 2: Create CodeQL database
//   // exec('codeql database create my-database --language=javascript --source-root=somerepo', (error, stdout, stderr) => {
//   //   if (error) {
//   //     console.error(`Error creating database: ${error}`);
//   //     return;
//   //   }
//   //   console.log(`Database created: ${stdout}`);
//   // });

//   // // Step 3: Run CodeQL query
//   // exec('codeql database analyze my-database my-query.ql --format=sarif-latest', (error, stdout, stderr) => {
//   //   if (error) {
//   //     console.error(`Error running query: ${error}`);
//   //     return;
//   //   }
//   //   console.log(`Query results: ${stdout}`);
//   // });

//   return NextResponse.json({
//     status: 200,
//     // githubCloning,
//     codeQlDatabase,
//     codeQlQuery
//   });
// }
const { Octokit } = require('@octokit/core');

const octokit = new Octokit({
  auth: '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'
})

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const owner = searchParams.get('owner');
  const repo = searchParams.get('repo');

  const commits = [];

  for (let i = 0; i < 10; i++) {
    const { data } = await octokit.request('GET /repos/{owner}/{repo}/commits', {
      owner,
      repo,
      page: i + 1,
      per_page: 100,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });

    commits.push(...data);

    if (!data?.length) break;
  }

  const results = {};

  for (let commit of commits) {
    const {
      data: {
        author: {
          login
        },
        stats: {
          total
        }
      }
    } = await octokit.request('GET /repos/{owner}/{repo}/commits/{ref}', {
      owner,
      repo,
      ref: commit.sha,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });

    if (!results[login]) {
      results[login] = total;
    } else {
      results[login] += total;
    }
  }
  
  return NextResponse.json({
    status: 200,
    reponse: results
  });
}