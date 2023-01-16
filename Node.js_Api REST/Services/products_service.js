const {models} = require('./../Database/sequelize');
const boom = require("@hapi/boom");

class services {
    async Create(req){
        const newproduct =  await models.Product.create(req);
        return newproduct;
    }
    async Read(){
        
        return new Promise((resolve, reject)=>{
             setTimeout(()=>{
                 const res = models.Product.findAll();
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