const joi = require('joi');

const id = joi.number().integer();
const customerId = joi.number().integer();

const orderId = joi.number().integer();
const productId = joi.number().integer();
const amount = joi.number().integer().min(1)
;



const GetOrderSchema = joi.object({
    id: id.required()
});
const CreateOrderSchema = joi.object({
    customerId: customerId.required()
});
const UpdateOrderSchema = joi.object({
    id: id,
    customerId: customerId
});


const AddItemSchema = joi.object({
    orderId: orderId.required(),
    productId: productId.required(),
    amount: amount.required()
});

module.exports = {GetOrderSchema,CreateOrderSchema,UpdateOrderSchema,AddItemSchema};