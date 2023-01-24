const {models} = require('./../db/sequelize');
const boom = require("@hapi/boom");

class OrderServices {
    async Create(req){
        const newOrder =  await models.Order.create(req);
        return newOrder;
    }
    async AddItem(req){
        const newItem =  await models.Order_Product.create(req);
        return newItem;
    }
    async Read(){

        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                const res = models.Order.findAll();
                resolve(res);
            });
        });

    }
    async readOne(id){
        const Order =  await models.Order.findByPk(id,{
            include: [
                {
                    association :'customer',
                    include: ['user']
                },
                'item'
            ]
        });
        if(!Order){throw boom.notFound('Order not found :(')}
        return Order;
    }
    async Update(id,req){
        const order = await this.readOne(id);
        const rest = await order.update(req);
        return rest;
    }
    async Delete(id){
        const order = await this.readOne(id);
        await order.destroy();
        return id;
    }
}

module.exports = OrderServices;