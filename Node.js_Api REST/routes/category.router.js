const express = require('express');
const {json} = require("express");
const router = express.Router();

const CategoryServices = require('./../Services/categories.services');
const ValidatorHandler = require('./../dto/ValidatorHadlerDTO');
const {GetCategorySchema,CreateCategorySchema,UpdateCategorySchema} = require('./../dto/categories_DTO');

const CategoryService = new CategoryServices();

router.get('/', async(req,res)=>{
    const data = await CategoryService.Read();
    res.json(data);

});

router.get("/:id",
    ValidatorHandler(GetCategorySchema,'params'),
    async(req,res,next)=>{
        try {
            const {id} = req.params;
            const rta = await CategoryService.readOne(id);
            res.json({
                message: 'Category with id',
                rta
            });

        }catch (err){
            next(err);
        }
    });

router.post('/',
    ValidatorHandler(CreateCategorySchema,'body'),
    async(req,res,next)=>{
        try {
            const body = req.body;
            const rta = await CategoryService.Create(body);
            res.status(201).json({
                message: 'Create :)',
                rta
            });

        }catch (err) {
            next(err);
        }
    });


router.delete("/:id",
    ValidatorHandler(GetCategorySchema,'params'),
    async(req, res,next)=>{
        try {
            const {id} = req.params;
            const rest = await CategoryService.Delete(id);
            res.json({
                message: 'Delete successful',
                id: rest
            });
        }catch (err){
            next(err);
        }

    });

router.patch("/:id",
    ValidatorHandler(GetCategorySchema,'params'),
    ValidatorHandler(UpdateCategorySchema,'body'),
    async(req, res,next)=>{
        try {
            const body = req.body;
            const {id} = req.params;
            const rest = await CategoryService.Update(id,body);
            res.json(rest);

        }catch (err) {
            next(err);
        }

    });

module.exports = router;

