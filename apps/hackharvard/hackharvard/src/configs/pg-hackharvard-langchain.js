const pgHackharvardLangchainConfig = {
  postgresConnectionOptions: {
    type: 'postgresql',
    host: process.env.PG_HACKHARVARD_HOST,
    port: process.env.PG_HACKHARVARD_PORT,
    user: process.env.PG_HACKHARVARD_USERNAME,
    password: process.env.PG_HACKHARVARD_PASSWORD,
    database: process.env.PG_HACKHARVARD_DATABASE_NAME
  },
  tableName: '"Information"',
  columns: {
    idColumnName: 'informationID',
    vectorColumnName: 'vector',
    contentColumnName: 'content',
    metadataColumnName: 'metadata'
  }
};

export default pgHackharvardLangchainConfig;