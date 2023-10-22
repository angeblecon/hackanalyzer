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

  const { data: languages } = await octokit.request(`GET /repos/${owner}/${repo}/languages`, {
    owner,
    repo,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });

  return NextResponse.json({
    status: 200,
    languages
  });
}