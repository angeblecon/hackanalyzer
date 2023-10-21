export default {
  host: process.env.PG_HACKHARVARD_HOST,
  port: parseInt(process.env.PG_HACKHARVARD_PORT, 10),
  database: process.env.PG_HACKHARVARD_DATABASE_NAME,
  user: process.env.PG_HACKHARVARD_USERNAME,
  password: process.env.PG_HACKHARVARD_PASSWORD
};