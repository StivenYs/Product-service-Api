const express = require('express');
const {json} = require("express");
const router = express.Router();

const OrderServices = require('./../Services/order.services');
const ValidatorHandler = require('./../dto/ValidatorHadlerDTO');
const {GetOrderSchema,CreateOrderSchema,UpdateOrderSchema,AddItemSchema} = require('./../dto/order_DTO');

const OrderService = new OrderServices();

router.get('/', async(req,res)=>{
    const data = await OrderService.Read();
    res.json(data);

});

router.get("/:id",
    ValidatorHandler(GetOrderSchema,'params'),
    async(req,res,next)=>{
        try {
            const {id} = req.params;
            const rta = await OrderService.readOne(id);
            res.json({
                message: 'Order with id',
                Order: rta
            });

        }catch (err){
            next(err);
        }
    });

router.post('/',
    ValidatorHandler(CreateOrderSchema,'body'),
    async(req,res,next)=>{
        try {
            const body = req.body;
            const rta = await OrderService.Create(body);
            res.status(201).json({
                message: 'Create :)',
                rta
            });

        }catch (err) {
            next(err);
        }
    });


//add item
router.post('/add-item',
    ValidatorHandler(AddItemSchema,'body'),
    async(req,res,next)=>{
        try {
            const body = req.body;
            const rta = await OrderService.AddItem(body);
            res.status(201).json({
                message: 'add :)',
                rta
            });

        }catch (err) {
            next(err);
        }
    });



router.delete("/:id",
    ValidatorHandler(GetOrderSchema,'params'),
    async(req, res,next)=>{
        try {
            const {id} = req.params;
            const rest = await OrderService.Delete(id);
            res.json({
                message: 'Delete successful',
                id: rest
            });
        }catch (err){
            next(err);
        }

    });

router.patch("/:id",
    ValidatorHandler(GetOrderSchema,'params'),
    ValidatorHandler(UpdateOrderSchema,'body'),
    async(req, res,next)=>{
        try {
            const body = req.body;
            const {id} = req.params;
            const rest = await OrderService.Update(id,body);
            res.json(rest);

        }catch (err) {
            next(err);
        }

    });

module.exports = router;

