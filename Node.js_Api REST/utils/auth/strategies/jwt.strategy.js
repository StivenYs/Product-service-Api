const  {Strategy,ExtractJwt} = require('passport-jwt');
const {config:{jwtScretKey}} = require('./../../../config/config');

const options ={
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : jwtScretKey
}

const jwtStrategy = new Strategy(options,(payload,done)=>{
    done(null,payload);
});

module.exports = jwtStrategy;