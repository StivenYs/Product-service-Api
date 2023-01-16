const express = require('express');
const {json} = require("express");
const router = express.Router();

const users_services = require('./../Services/user.services');
const ValidatorHandler = require('./../DTO/ValidatorHadlerDTO');
const {CreateUserDTO,UpdateUserDTO,GetUserDTO} = require('./../DTO/Users_DTO');

const user_service = new users_services();

router.get('/', async(req,res)=>{
    const data = await user_service.Read();
    res.json(data);

});

router.get("/:id",
     ValidatorHandler(GetUserDTO,'params'),
    async(req,res,next)=>{
        try {
            const {id} = req.params;
            const rta = await user_service.readOne(id);
            res.json({
                message: 'User with id',
                rta
            });
           
        }catch (err){
            next(err);
        }
    });

router.post('/',
    ValidatorHandler(CreateUserDTO,'body'),
    async(req,res,next)=>{
        try {
            const body = req.body;
            const rta = await user_service.Create(body);
            res.status(201).json({
                message: 'Create :)',
                rta
            });

        }catch (err) {
            next(err);
        }
    });


router.delete("/:id",
    ValidatorHandler(GetUserDTO,'params'),
    async(req, res,next)=>{
        try {
            const {id} = req.params;
            const rest = await user_service.Delete(id);
            res.json({
                message: 'Delete successful',
                id: rest
            });
        }catch (err){
            next(err);
        }
        
    });

router.patch("/:id",
    ValidatorHandler(GetUserDTO,'params'),
    ValidatorHandler(UpdateUserDTO,'body'),
    async(req, res,next)=>{
        try {
            const body = req.body;
            const {id} = req.params;
            const rest = await user_service.Update(id,body);
            res.json(rest);
            
        }catch (err) {
            next(err);
        }

    });

module.exports = router;

