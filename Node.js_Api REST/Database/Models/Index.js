const {User,UsersSchema} = require('./model.user');
const {Product,productSchema} = require('./Products.models');
function setupModels(sequelize){
    User.init(UsersSchema,User.config(sequelize));
    Product.init(productSchema,Product.config(sequelize));
}

module.exports = setupModels;
