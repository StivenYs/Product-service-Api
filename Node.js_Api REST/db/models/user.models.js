const {Model,Sequelize, DataTypes} = require('sequelize');

const USERS_TABLE = 'Users';

 const UsersSchema = {
     id:{
         allowNull: false,
         autoIncrement: true,
         primaryKey: true,
         type: DataTypes.INTEGER
     },
     email:{
         allowNull: false,
         type: DataTypes.STRING,
         unique: true
     },
     password:{
         allowNull: false,
         type: DataTypes.STRING
     },
     role:{
       allowNull: false,
       type: DataTypes.STRING,
       defaultValue: "customer"  
     },
     createdAt:{
         allowNull: false,
         type: DataTypes.DATE,
         field: 'create_at',
         defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
     }
 }

class User extends Model {
      static associate(){
          
      }
      static config(sequelize){
          return{
              sequelize,
              tableName: USERS_TABLE,
              modelName: 'User',
              timestamps: false 
          }
      }
}
//nameTable,schema,model
module.exports = {USERS_TABLE,UsersSchema,User}




