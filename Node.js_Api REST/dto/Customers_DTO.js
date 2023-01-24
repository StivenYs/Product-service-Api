const joi = require('joi');

const id = joi.number().integer();
const firstName = joi.string().alphanum().min(3).max(30);
const lastName = joi.string().min(3).max(30)
const phone = joi.string();
const userId = joi.number().integer();
//user data
const email = joi.string().email();
const password = joi.string().min(6);

const GetCustomerSchema = joi.object({
    id: id.required()
});
const CreateCustomerSchema = joi.object({
    firstName: firstName.required(),
    lastName: lastName.required(),
    phone: phone.required(),
    user: joi.object({
        email:email.required(),
        password:password.required()
    })
});
const UpdateCustomerSchema = joi.object({
    firstName: firstName,
    lastName: lastName,
    phone: phone,
    userId: userId
});

module.exports = {GetCustomerSchema,CreateCustomerSchema,UpdateCustomerSchema};