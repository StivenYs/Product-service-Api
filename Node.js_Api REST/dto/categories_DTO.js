const joi = require('joi');

const id = joi.number().integer();
const name = joi.string().alphanum().min(3).max(30);
const image = joi.string().min(3).max(30)


const GetCategorySchema = joi.object({
    id: id.required()
});
const CreateCategorySchema = joi.object({
    name: name.required(),
    image: image.required(),

});
const UpdateCategorySchema = joi.object({
    name: name,
    image: image,
});

module.exports = {GetCategorySchema,CreateCategorySchema,UpdateCategorySchema};