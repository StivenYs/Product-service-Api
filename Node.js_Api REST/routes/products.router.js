const express = require('express');
const {json} = require("express");
const router = express.Router();

const services = require('./../Services/products_service');
const ValidatorHandler = require('./../dto/ValidatorHadlerDTO');
const {GetProductDTO,CreteProductDTO,UpdateProductDTO} = require('./../dto/Products_DTO');

const service = new services();

router.get('/', async(req,res)=>{
    const data = await service.Read();
    res.json(data);
    
});

router.get('/categories', (req,res)=>{
    res.send('i dont have categories available');
});

router.get("/:id",
    ValidatorHandler(GetProductDTO,'params'),
    async(req,res,next)=>{
    try {
        const {id} = req.params;
        const rest =await service.readOne(id);
        res.json(rest);
        
    }catch (err){
        next(err);
    }
});

router.post('/',
    ValidatorHandler(CreteProductDTO,'body'),
    async(req,res,next)=>{
    try {
        const body = req.body;
        const rest = await service.Create(body);
        res.status(201).json({
            message: 'Created :)',
            rest
        })
        
    }catch (err) {
        next(err);
    }
});



router.delete("/:id",
    ValidatorHandler(GetProductDTO,'params'),
    async(req, res,next)=>{
    try {
        const {id} = req.params;
        const rest = await service.Delete(id);
        res.json({
            message: 'Delete successful',
            id: rest
        });
       
    }catch (err){
        next(err);
    }
   
    
});

router.patch("/:id",
    ValidatorHandler(GetProductDTO,'params'), 
    ValidatorHandler(UpdateProductDTO,'body'),
    async(req, res,next)=>{
    try {
        const body = req.body;
        const {id} = req.params;
        const rest = await service.Update(id,body);
        res.json(rest);
        
    }catch (err) {
        next(err);
    }

});

module.exports = router;


