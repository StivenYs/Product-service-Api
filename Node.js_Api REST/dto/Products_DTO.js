const Joi = require('joi');
const {de} = require("faker/lib/locales");

const id = Joi.number().integer();
const name = Joi.string().alphanum().min(3).max(40);
const description = Joi.string();
const price = Joi.number().integer();
const image = Joi.string();
const categoryId = Joi.number().integer();

//Query 
const limit = Joi.number().integer();
const offset = Joi.number().integer();

const price_min = Joi.number().integer();
const price_max = Joi.number().integer();

const CreteProductDTO  = Joi.object({
    name: name.required(),
    description: description,
    price: price.required(),
    image: image,
    categoryId: categoryId.required()
});

const UpdateProductDTO = Joi.object({
    name: name,
    description: description,
    price: price,
    image: image,
    categoryId:categoryId
});

 const GetProductDTO = Joi.object({
     id: id.required()
 });
 
 const queryPeductSchema = Joi.object({
     limit,
     offset,
     price_min,
     price_max: price_max.when('price_min',{
         is: Joi.number().integer().required(),
         then: Joi.required()
     })
 });
    
 module.exports = { CreteProductDTO, UpdateProductDTO, GetProductDTO,queryPeductSchema};
 