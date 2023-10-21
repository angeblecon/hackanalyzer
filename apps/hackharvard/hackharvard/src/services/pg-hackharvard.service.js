const promise = require('bluebird');
const pgPromise = require('pg-promise');
import { pgHackharvardConfig } from '@/configs';

const initOptions = {
  promiseLib: promise,
  ...(process.env.NODE_ENV === 'dev' && {
    query(e) {
      console.log(e.query);
    },
    error(error, e) {
      if (e.cn) {
        console.error('CN:', e.cn);
        console.error('EVENT:', error.message || error);
      }
    }
  })
};

const pgp = pgPromise(initOptions);
pgp.pg.defaults.max = 50;

const createSingleton = (name, create) => {
  const s = Symbol.for(name);
  let scope = global[s];
  if (!scope) {
    scope = Object.assign({}, create());
    global[s] = scope;
  }
  return scope;
};

export default function getPgHackharvard() {
  return createSingleton('hackharvard-api', () => {
    return {
      db: pgp(pgHackharvardConfig),
      pgp
    };
  });
};