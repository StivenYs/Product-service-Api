'use strict';

const {UsersSchema,USERS_TABLE} = require('./../Models/user.models');


module.exports = {
  async up (queryInterface) {
      await queryInterface.addColumn(USERS_TABLE,'role',UsersSchema.role);
  },

  async down (queryInterface) {
      await queryInterface.removeColumn(USERS_TABLE,'role');
  }
};
