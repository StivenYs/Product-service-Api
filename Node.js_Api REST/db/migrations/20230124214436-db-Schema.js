'use strict';

const {UsersSchema,USERS_TABLE} = require('./../Models/user.models');
const {customerSchema,CUSTOMERS_TABLE} = require('./../Models/customer.models');
const {categoriesSchema,CATEGORIES_TABLE} =  require('./../models/categories.models');
const {productSchema,PRODUCTS_TABLE} = require('./../models/Products.models');
const {ORDER_TABLE,orderSchema} = require('./../models/order.models');
const {ORDER_PRODUCT_TABLE,orderPorductSchema}= require('./../models/order_product');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(USERS_TABLE, UsersSchema);
    await queryInterface.createTable(CUSTOMERS_TABLE, customerSchema);
    await queryInterface.createTable(CATEGORIES_TABLE,categoriesSchema);
    await queryInterface.createTable(PRODUCTS_TABLE,productSchema);
    await queryInterface.createTable(ORDER_TABLE,orderSchema);
    await queryInterface.createTable(ORDER_PRODUCT_TABLE,orderPorductSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(ORDER_PRODUCT_TABLE);
    await queryInterface.dropTable(PRODUCTS_TABLE);
    await queryInterface.dropTable(ORDER_TABLE);
    await  queryInterface.dropTable(CUSTOMERS_TABLE);
    await  queryInterface.dropTable(USERS_TABLE);
    await queryInterface.dropTable(CATEGORIES_TABLE);
  }
};
