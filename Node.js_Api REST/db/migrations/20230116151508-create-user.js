'use strict';


const {UsersSchema,USERS_TABLE} = require('./../Models/user.models');

module.exports = {
  async up (queryInterface) {
      await queryInterface.createTable(USERS_TABLE, UsersSchema);
  },

  async down (queryInterface) {
      await  queryInterface.dropTable(USERS_TABLE);
  }
};
