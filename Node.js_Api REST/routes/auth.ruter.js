const express = require('express');
const passport = require('passport');
const {config} = require('./../config/config');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post("/login",
    passport.authenticate('local',{session: false}),
    async(req,res,next)=>{
        try {
            const user = req.user;
            payload ={
                sub: user.id,
                role: user.role
            }
            const token = jwt.sign(payload,config.jwtScretKey);
            
            res.json({
                user,
                token
            });
            
        }catch (err){
            next(err);
        }
    });

module.exports = router;

