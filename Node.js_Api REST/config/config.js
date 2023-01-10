const config = {
  env : process.env.NODE_ENV || 'dev',
  port : process.env.PORT || '3000',
  dbHost : process.env.DB_HOST,
  dbUser : process.env.DB_USER,
  dbPassword : process.env.DB_PASSWORD,
  dbName : process.env.DB_NAME
};

module.exports = {config};