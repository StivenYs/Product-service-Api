const mysql = require('mysql');
const {promisify} = require('util');
const {config:{dbUser,dbPassword,dbHost,dbName,dbPort}} = require('./../config/config');

const USER = encodeURIComponent(dbUser);
const PASSWORD = encodeURIComponent(dbPassword);
const URI = `mysql://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`

const pool =  mysql.createPool(URI);

console.log(URI);

pool.getConnection((err,connection) =>{
    if (err) {
        console.log('i have error' + err)
    }
    if (connection) connection.release();
    console.log('connected :)')
    return;
});

//pool.query = promisify(pool.query);
module.exports = pool;


