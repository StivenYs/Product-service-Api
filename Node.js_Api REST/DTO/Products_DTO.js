const Joi = require('joi');

const id = Joi.string().uuid();
const active = Joi.bool();
const name = Joi.string().alphanum().min(5).max(40);
const price = Joi.number().integer();

const CreteProductDTO  = Joi.object({
    name: name.required(),
    price: price.required(),
    active: active.required()
});

const UpdateProductDTO = Joi.object({
    id : id,
    name: name,
    price: price,
    active: active
});

 const GetProductDTO = Joi.object({
     id: id.required()
 });
    
 module.exports = { CreteProductDTO, UpdateProductDTO, GetProductDTO};
 