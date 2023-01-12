const express = require('express');
const {json} = require("express");
const router = express.Router();

const services = require('./../Services/products_service');
const ValidatorHandler = require('./../DTO/ValidatorHadlerDTO');
const {GetProductDTO,CreteProductDTO,UpdateProductDTO} = require('./../DTO/Products_DTO');

const service = new services();

router.get('/', async(req,res)=>{
    const data = await service.Read();
    res.json(data);
    
});

router.get('/categories', (req,res)=>{
    res.send('i dont have categories available');
});

router.get("/:id",
   /* ValidatorHandler(GetProductDTO,'params'),*/ async(req,res,next)=>{
    try {
        const {id} = req.params;
        await service.readOne(id,(data)=>{
            if (data === null){ res.json(data);}
            else { res.status(404).send('404');}
        });
    }catch (err){
        next(err);
    }
});

router.post('/',
    /*ValidatorHandler(CreteProductDTO,'body'),*/
    async(req,res,next)=>{
    try {
        const body = req.body;
        await service.Create(body);
        res.status(201).send('Created :)');
        
    }catch (err) {
        next(err);
    }
});



router.delete("/:id",
    /*ValidatorHandler(GetProductDTO,'params'),*/
    async(req, res)=>{
    const {id} = req.params;
    await service.Delete(id,(Datares)=>{
        res.status(200).json({
            message: Datares
        });
    });
    
});

router.patch("/:id",
    ValidatorHandler(GetProductDTO,'params'), 
    ValidatorHandler(UpdateProductDTO,'body'),
    async(req, res,next)=>{
    try {
        const body = req.body;
        const {id} = req.params;
        await service.Update(id,body,(data)=>{
            res.json({
                data: data
            });
        });
    }catch (error) {
        next(error);
    }

});

module.exports = router;


