const Joi = require('joi');
const {de} = require("faker/lib/locales");

const id = Joi.number().integer();
const name = Joi.string().alphanum().min(3).max(40);
const description = Joi.string();
const price = Joi.number().integer();
const image = Joi.string();

const CreteProductDTO  = Joi.object({
    name: name.required(),
    description: description,
    price: price.required(),
    image: image
});

const UpdateProductDTO = Joi.object({
    name: name,
    description: description,
    price: price,
    image: image
});

 const GetProductDTO = Joi.object({
     id: id.required()
 });
    
 module.exports = { CreteProductDTO, UpdateProductDTO, GetProductDTO};
 