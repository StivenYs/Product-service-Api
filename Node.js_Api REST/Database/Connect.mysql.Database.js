const mysql = require('mysql');

const pool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : '123456789',
    database : 'product_base'
});

module.exports = pool;