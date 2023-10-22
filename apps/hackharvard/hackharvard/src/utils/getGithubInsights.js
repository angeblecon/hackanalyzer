const { Octokit } = require('@octokit/core');

const octokit = new Octokit({
  auth: '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'
});

const getGithubInsights = async (owner, repo) => {

  console.log('Getting github insigths...', { owner, repo });
  const { data: languages } = await octokit.request(`GET /repos/${owner}/${repo}/languages`, {
    owner,
    repo,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });

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

  const collaboration = {};

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

    if (!collaboration[login]) {
      collaboration[login] = total;
    } else {
      collaboration[login] += total;
    }
  }

  return { languages, collaboration };

};

export default getGithubInsights;