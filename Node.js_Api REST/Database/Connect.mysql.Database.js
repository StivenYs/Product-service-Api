const mysql = require('mysql');
const {config} = require('./../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mysql//${USER}:${PASSWORD}:${config.dbHost}:${config.dbName}`
    
console.log(URI);
const pool = new mysql.createPool({ConnectionString: URI});

/*
const pool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : '123456789',
    database : 'product_base'
});
*/

module.exports = pool;