const {config:{dbUser,dbPassword,dbHost,dbName,dbPort}} = require('./../config/config');

const USER = encodeURIComponent(dbUser);
const PASSWORD = encodeURIComponent(dbPassword);
const URI = `mysql://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`

module.exports = {
    development:{
        url: URI,
        dialect: 'mysql'
    },
    production:{
        url: URI,
        dialect: 'mysql'
    }
}