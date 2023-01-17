const joi = require('joi');

const id = joi.number().integer();
const firstName = joi.string().alphanum().min(5).max(30);
const lastName = joi.string().min(5).max(30)
const phone = joi.string();
const userId = joi.number().integer();


const GetCustomerSchema = joi.object({
    id: id.required()
});
const CreateCustomerSchema = joi.object({
    firstName: firstName.required(),
    lastName: lastName.required(),
    phone: phone.required(),
    userId: userId.required()
});
const UpdateCustomerSchema = joi.object({
    firstName: firstName,
    lastName: lastName,
    phone: phone,
    userId: userId
});

module.exports = {GetCustomerSchema,CreateCustomerSchema,UpdateCustomerSchema};