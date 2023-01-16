const {Sequelize} = require('sequelize');
const {config:{dbUser,dbPassword,dbHost,dbName,dbPort}} = require('./../config/config');
const setupModels = require('./Models');

const USER = encodeURIComponent(dbUser);
const PASSWORD = encodeURIComponent(dbPassword);
const URI = `mysql://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`
const sequelize = new Sequelize(URI,{
    dialect:'mysql'
});

sequelize.authenticate()
    .then(console.log('Connect db :)'))
    .catch((err)=>{
        console.error(err);
    })

setupModels(sequelize);

sequelize.sync();

module.exports = sequelize;