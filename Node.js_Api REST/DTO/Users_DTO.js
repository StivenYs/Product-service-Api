const joi = require('joi');

const id = joi.number().integer();
const email = joi.string().email();
const password = joi.string().min(6);
const role = joi.string().min(5);


const CreateUserDTO = joi.object({
    email: email.required(),
    password: password.required(),
   // role: role.required()
});

const UpdateUserDTO = joi.object({
    email: email,
    //role: role
});

const GetUserDTO = joi.object({
    id: id.required()
});

module.exports = {CreateUserDTO,UpdateUserDTO,GetUserDTO};