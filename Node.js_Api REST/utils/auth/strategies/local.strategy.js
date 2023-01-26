const {Strategy} = require('passport-local');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const UserServices = require('./../../../services/user.services');
const service = new  UserServices();

const LocalStrategy = new Strategy(async (username,password,done)=>{
    try {
        const user = await service.findEmail(username);
        if (!user){
            done(boom.unauthorized(),false);
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if (!isMatch){
            done(boom.unauthorized(),false);
        }
        delete user.dataValues.password;
        done(null,user);
    }catch (err){
        done(err,false);
    }
  
});

module.exports = LocalStrategy;