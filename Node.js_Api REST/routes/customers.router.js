const express = require('express');
const {json} = require("express");
const router = express.Router();

const customerServices = require('./../Services/customers.services');
const ValidatorHandler = require('./../dto/ValidatorHadlerDTO');
const {CreateCustomerSchema,UpdateCustomerSchema,GetCustomerSchema} = require('./../dto/Customers_DTO');

const customerService = new customerServices();

router.get('/', async(req,res)=>{
    const data = await customerService.Read();
    res.json(data);

});

router.get("/:id",
    ValidatorHandler(GetCustomerSchema,'params'),
    async(req,res,next)=>{
        try {
            const {id} = req.params;
            const rta = await customerService.readOne(id);
            res.json({
                message: 'Customer with id',
                rta
            });

        }catch (err){
            next(err);
        }
    });

router.post('/',
    ValidatorHandler(CreateCustomerSchema,'body'),
    async(req,res,next)=>{
        try {
            const body = req.body;
            const rta = await customerService.Create(body);
            res.status(201).json({
                message: 'Create :)',
                rta
            });

        }catch (err) {
            next(err);
        }
    });


router.delete("/:id",
    ValidatorHandler(GetCustomerSchema,'params'),
    async(req, res,next)=>{
        try {
            const {id} = req.params;
            const rest = await customerService.Delete(id);
            res.json({
                message: 'Delete successful',
                id: rest
            });
        }catch (err){
            next(err);
        }

    });

router.patch("/:id",
    ValidatorHandler(GetCustomerSchema,'params'),
    ValidatorHandler(UpdateCustomerSchema,'body'),
    async(req, res,next)=>{
        try {
            const body = req.body;
            const {id} = req.params;
            const rest = await customerService.Update(id,body);
            res.json(rest);

        }catch (err) {
            next(err);
        }

    });

module.exports = router;

