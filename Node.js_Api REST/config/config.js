require('dotenv').config();

const config = {
  env : process.env.NODE_ENV || 'dev',
  port : process.env.PORT || '3000',
  dbHost : process.env.DB_HOST,
  dbUser : process.env.DB_USER,
  dbPassword : process.env.DB_PASSWORD,
  dbName : process.env.DB_NAME,
  dbPort : process.env.DB_PORT,
  apiKey : process.env.API_KEY,
  jwtScretKey : process.env.JWTSCRET_KEY
};

module.exports = {config};