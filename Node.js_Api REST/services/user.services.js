const {models} = require('./../db/sequelize');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
class Users_services {
    async Create(reqData){
        const hash = await bcrypt.hash(reqData.password,7);
        const newU = await models.User.create({
            ...reqData,
            password: hash
        });
        delete newU.dataValues.password;
        return newU;
    }
    async Read(){
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                const res = models.User.findAll({
                    include: 'customer'
                });
                resolve(res);
            },500)
        })
    }
    async readOne(id){
        const user =  await models.User.findByPk(id);
        if(!user){throw boom.notFound('user not found :(')}
        return user;
    }
    async findEmail(email){
        const user =  await models.User.findOne({
            where: {email}
        });
        console.log(user);
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