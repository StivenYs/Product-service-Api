const {User,UsersSchema} = require('./user.models');
const {Category,categoriesSchema} = require('./categories.models');
const {Product,productSchema} = require('./Products.models');
const {Customer,customerSchema}= require('./customer.models');
const {Order,orderSchema} = require('./order.models'); 
const {Order_Product, orderPorductSchema} = require('./order_product');
function setupModels(sequelize){
    User.init(UsersSchema,User.config(sequelize));
    Category.init(categoriesSchema,Category.config(sequelize));
    Product.init(productSchema,Product.config(sequelize));
    Customer.init(customerSchema,Customer.config(sequelize));
    Order.init(orderSchema,Order.config(sequelize));
    Order_Product.init(orderPorductSchema,Order_Product.config(sequelize));
    
    Customer.associate(sequelize.models);
    User.associate(sequelize.models);
    Category.associate(sequelize.models);
    Product.associate(sequelize.models);
    Order.associate(sequelize.models);
   
}

module.exports = setupModels;
