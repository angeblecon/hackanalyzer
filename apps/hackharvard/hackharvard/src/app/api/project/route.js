import { NextResponse } from "next/server";
import { getDevPostProject, extractKeywords, searchProjects, analyzeSimilarity, allSettled } from "@/utils";
import { getPgHackharvard } from "@/services";
import getSql from "sql";

const { db } = getPgHackharvard();
const sql = getSql();

async function saveProjectToDB(data) {
	try {
		const result = await db.one(sql.project.create, data);
		return result;
	} catch (error) {
		console.error("Error while inserting project:", error);
		return null;
	}
}

async function saveKeywordsToDB(data) {
	try {
		const result = await db.one(sql.keyword.create, data);
		return result;
	} catch (error) {
		console.error("Error while inserting keyword:", error);
		return null;
	}
}

async function saveSimilarityResultToDB(data) {
	try {
		const result = await db.one(sql.similarity_result.create, {
      
    });
		return result;
	} catch (error) {
		console.error("Error while inserting similarity result:", error);
		return null;
	}
}

async function checkProjectInDB(id) {
	try {
		const result = await db.oneOrNone(sql.project.getOne, { project_id: id });
		if (result) {
			return result;
		} else {
			return null;
		}
	} catch (error) {
		console.error("Error while finding project:", error);
		return null;
	}
}

async function checkKeywordsInDB(id) {
	try {
		const result = await db.oneOrNone(sql.keyword.get, { project_id: id });
		if (result) {
			return result;
		} else {
			return null;
		}
	} catch (error) {
		console.error("Error while finding keyword:", error);
		return null;
	}
}
 

//todo: parallelize the saves
async function saveAllToDB(projectInfo, keywords, similarProjects) {
  // Save project info
  await saveProjectToDB(projectInfo);

  // Save keywords
  if (keywords) {
    await saveKeywordsToDB({ id: projectInfo.id, keywords: keywords });
  }

  // Save similar projects or similarity results, if applicable
  if (similarProjects && similarProjects.length) {
    for (let result of similarProjects) {
      await saveSimilarityResultToDB(result);
    }
  }
}

export async function GET(request) {
	const { searchParams } = new URL(request.url);
	const id = searchParams.get("id");

	console.log("Getting project info...", id);

	// Check database first
	const existingProject = await checkProjectInDB(id);
	if (existingProject) {
    console.log("Project already exists in database");
		return NextResponse.json({
			status: 200,
			content: existingProject,
			// keywords,
			// similarProjects
		});
	}

	// get project details
	const projectInfo = await getDevPostProject(id);
	if (!projectInfo) {
		// handle error
		return NextResponse.json({
			status: 404,
			content: { error: "Project not found" },
		});
	}

	console.log("Extracting keywords...");


	const keywords = await extractKeywords(projectInfo.description);
	console.log({ keywords });
	console.log("Searching for similar projects...");

	// search for similar projects
	const similarProjects = await searchProjects(keywords.join(" "));

	console.log(similarProjects);

	const promises = [];

	// enrich each project information
	if (!similarProjects) {
		return NextResponse.json({
			status: 200,
			content: {
				project: projectInfo,
			},
		});
	}

	for (let similarProject of similarProjects) {
		promises.push(
			new Promise(async (resolve) => {
				console.log("Getting more details on the project", similarProject.id);
				const detailedProject = await getDevPostProject(similarProject.id);
				const similarityAnalysis = await analyzeSimilarity(
					projectInfo.description,
					detailedProject.description
				);
				resolve({ detailedProject, similarityAnalysis });
			})
		);
	}

	const results = await allSettled(promises)
		.then((results) => results.filter((result) => result.status === "fulfilled"))
		.then((fulfilledResults) => fulfilledResults.map((result) => result.value));

	console.log("Script execution completed");



  await saveAllToDB({id, ...projectInfo}, keywords, similarProjects);
	return NextResponse.json({
		status: 200,
		content: {
			project: projectInfo,
			keywords,
			similarProjects: results,
		},
	});
}
