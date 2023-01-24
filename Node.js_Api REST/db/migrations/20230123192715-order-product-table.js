'use strict';

const {ORDER_PRODUCT_TABLE,orderPorductSchema}= require('./../models/order_product');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(ORDER_PRODUCT_TABLE,orderPorductSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(ORDER_PRODUCT_TABLE,orderPorductSchema);
  }
};
