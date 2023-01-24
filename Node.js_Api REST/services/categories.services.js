const {models} = require('./../db/sequelize');
const boom = require("@hapi/boom");

class CategoryServices {
    async Create(req){
        const newproduct =  await models.Category.create(req);
        return newproduct;
    }
    async Read(){

        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                const res = models.Category.findAll();
                resolve(res);
            });
        });

    }
    async readOne(id){
        const product =  await models.Category.findByPk(id,{
            include: ['product']
        });
        if(!product){throw boom.notFound('Category not found :(')}
        return product;
    }
    async Update(id,req){
        const category = await this.readOne(id);
        const rest = await category.update(req);
        return rest;
    }
    async Delete(id){
        const category = await this.readOne(id);
        await category.destroy();
        return id;
    }
}

module.exports = CategoryServices