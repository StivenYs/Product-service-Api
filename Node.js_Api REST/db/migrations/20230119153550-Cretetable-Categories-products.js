'use strict';

const {categoriesSchema,CATEGORIES_TABLE} =  require('./../models/categories.models');
const {productSchema,PRODUCTS_TABLE} = require('./../models/Products.models');

module.exports = {
  async up (queryInterface) {
      await queryInterface.createTable(CATEGORIES_TABLE,categoriesSchema);
      await queryInterface.createTable(PRODUCTS_TABLE,productSchema);
  },

  async down (queryInterface) {
      await queryInterface.dropTable(PRODUCTS_TABLE);
      await queryInterface.dropTable(CATEGORIES_TABLE);
  }
};
