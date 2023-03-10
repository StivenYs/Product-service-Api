const {models} = require('./../db/sequelize');
const boom = require("@hapi/boom");
const bcrypt = require('bcrypt');

class services {
    async Create(req){
        const hash = await bcrypt.hash(req.user.password, 7);
        const data ={
            ...req,
            user:{
                ...req.user,
                password: hash
            }
        }
        const newCustomer =  await models.Customer.create(data,{
            include:['user']
        });
        delete newCustomer.user.dataValues.password;
        return newCustomer;
    }
    async Read(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                const res = models.Customer.findAll({
                    include: 'user'
                });
                resolve(res);
            });
        });
    }
    async readOne(id){
        const product =  await models.Customer.findByPk(id);
        if(!product){throw boom.notFound('Customer not found :(')}
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