const { QueryFile } = require('pg-promise');

function sql(file) {

  const fullPath = '/app/packages/sql/queries/' + file;

  const options = {
    minify: true,
    compress: true
  };

  const qf = new QueryFile(fullPath, options);

  if (qf.error) console.error(qf.error);

  return qf;
};

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
  return createSingleton('sql-paths', () => {
    return {
      pgHackharvard: {
        get: sql('pgHackharvard/get.sql')
      }
    }
  });
};

export default getSql;