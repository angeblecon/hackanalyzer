const { Octokit } = require("@octokit/core");

const octokit = new Octokit({
	auth: process.env.OCTOKIT_KEY,
});

async function* getGithubInsights(owner, repo) {
	const response = {};

	console.log("Getting github insigths...", { owner, repo });
	const { data: languages } = await octokit.request(`GET /repos/${owner}/${repo}/languages`, {
		owner,
		repo,
		headers: {
			"X-GitHub-Api-Version": "2022-11-28",
		},
	});

	response.languages = languages;

	yield JSON.stringify(response);

	const commits = [];

	for (let i = 0; i < 10; i++) {
		const { data } = await octokit.request("GET /repos/{owner}/{repo}/commits", {
			owner,
			repo,
			page: i + 1,
			per_page: 100,
			headers: {
				"X-GitHub-Api-Version": "2022-11-28",
			},
		});

		commits.push(...data);

		if (!data?.length) break;
	}

	const collaboration = {};

	for (let commit of commits) {
		try {
			const {
				data: {
					author: { login },
					stats: { total },
				},
			} = await octokit.request("GET /repos/{owner}/{repo}/commits/{ref}", {
				owner,
				repo,
				ref: commit.sha,
				headers: {
					"X-GitHub-Api-Version": "2022-11-28",
				},
			});

			if (!collaboration[login]) {
				collaboration[login] = total;
			} else {
				collaboration[login] += total;
			}
		} catch (e) {
			console.log(e);
		}
	}

	response.collaboration = collaboration;

	yield JSON.stringify(response);

	return { languages, collaboration };
}

export default getGithubInsights;
