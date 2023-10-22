const { QueryFile } = require("pg-promise");

function sql(file) {
	const fullPath = "/app/packages/sql/queries/" + file;

	const options = {
		minify: true,
		compress: true,
	};

	const qf = new QueryFile(fullPath, options);

	if (qf.error) console.error(qf.error);

	return qf;
}

const createSingleton = (name, create) => {
	const s = Symbol.for(name);
	let scope = global[s];
	if (!scope) {
		scope = Object.assign({}, create());
		global[s] = scope;
	}
	return scope;
};

function getSql() {
	return createSingleton("sql-paths", () => {
		return {
			pgHackharvard: {
				get: sql("pgHackharvard/get.sql"),
			},
			project: {
				create: sql("project/create_project.sql"),
				getAll: sql("project/get_all_projects.sql"),
				getOne: sql("project/get_one_project.sql"),
				update: sql("project/update_project.sql"),
				delete: sql("project/delete_project.sql"),
			},
			keyword: {
				create: sql("keyword/create_keyword.sql"),
				get: sql("keyword/get_keyword.sql"),
				update: sql("keyword/update_keyword.sql"),
				delete: sql("keyword/delete_keyword.sql"),
			},
			similarity_result: {
				create: sql("similarity_result/create_similarity_result.sql"),
				getAllByProject: sql("similarity_result/get_all_similarity_results_by_project.sql"),
				getOneByProject: sql("similarity_result/get_one_similarity_result_by_project.sql"),
				update: sql("similarity_result/update_similarity_result.sql"),
				delete: sql("similarity_result/delete_similarity_result.sql"),
			},
		};
	});
}

export default getSql;
