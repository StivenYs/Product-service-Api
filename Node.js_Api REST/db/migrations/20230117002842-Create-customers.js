'use strict';



const {customerSchema,CUSTOMERS_TABLE} = require('./../Models/customer.models');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CUSTOMERS_TABLE, customerSchema);
  },

  async down (queryInterface) {
    await  queryInterface.dropTable(CUSTOMERS_TABLE);
  }
};
