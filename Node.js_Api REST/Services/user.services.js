const {models} = require('./../Database/sequelize');
const boom = require('@hapi/boom');
class Users_services {
    async Create(reqData){
        const newU = await models.User.create(reqData);
        return newU;
    }
    async Read(){
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                const res = models.User.findAll();
                resolve(res);
            },500)
        })
    }
    async readOne(id){
        const user =  await models.User.findByPk(id);
        if(!user){throw boom.notFound('user not found :(')}
        return user;
    }
    async Update(id,req){
        const user = await this.readOne(id);
        const res = await user.update(req);
        return res;
    }
    async Delete(id){
        const user = await this.readOne(id);
        await user.destroy();
        return id;
    }
}

module.exports = Users_services;