const {models} = require('./../db/sequelize');
const boom = require("@hapi/boom");
const {Op} = require('sequelize');

class services {
    async Create(req){
        const newproduct =  await models.Product.create(req);
        return newproduct;
    }
    async Read(query){
        
        return new Promise((resolve, reject)=>{
             setTimeout(()=>{
                 
                 const options = {
                     include: ['category'],
                     where:{},
                 }
                 const {limit,offset} = query;
                    
                 if (limit && offset){
                    options.limit = parseInt(limit);
                    options.offset = parseInt(offset);
                 }
                 
                 const {price_min,price_max} = query;
                 
                 if (price_min && price_max){
                     options.where.price = {
                         [Op.gte]: price_min,
                         [Op.lte]: price_max
                     }
                 }
                 const res =  models.Product.findAll(options);
                 resolve(res);
             });
        });
        
    }
    async readOne(id){
        const product =  await models.Product.findByPk(id);
        if(!product){throw boom.notFound('Product not found :(')}
        return product;
    }
    async Update(id,req){
        const product = await this.readOne(id);
        const rest = await product.update(req);
        return rest;
    }
    async Delete(id){
        const product = await this.readOne(id);
        await product.destroy();
        return id;
    }
}

module.exports = services;