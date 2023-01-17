const {User,UsersSchema} = require('./user.models');
const {Product,productSchema} = require('./Products.models');
const {Customer,customerSchema}= require('./customer.models');
function setupModels(sequelize){
    User.init(UsersSchema,User.config(sequelize));
    Product.init(productSchema,Product.config(sequelize));
    Customer.init(customerSchema,Customer.config(sequelize));
    
    Customer.associate(sequelize.models);
}

module.exports = setupModels;
