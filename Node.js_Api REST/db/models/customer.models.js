const {Sequelize,Model,DataTypes} = require('sequelize');
const {USERS_TABLE} = require('./user.models');

const CUSTOMERS_TABLE = 'customers';

const customerSchema = {
  id:{
      allowNull: false ,
      autoIncrement: true,
      primaryKey:true,
      type: DataTypes.INTEGER
  },
  firstName:{
      allowNull: false,
      type: DataTypes.STRING,
      field: 'first_name'
  },
  lastName:{
      allowNull: false,
      type: DataTypes.STRING,
      field: 'last_name'
  },
  phone:{
      allowNull: true,
      type: DataTypes.STRING
  },
  creteAt:{
      allowNull: false,
      type: DataTypes.DATE,
      field: 'create_at',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  },
    userId: {
        field: 'user_id',
        allowNull:false,
        type: DataTypes.INTEGER,
        references:{
            model: USERS_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
}

class Customer extends Model{
    static associate (models){
        this.belongsTo(models.User, {
            as: 'user',
            foreignKey:'userId'
        });
        this.hasMany(models.Order,{
            as:'orders',
            foreignKey:'customerId'
        });
    }
    
    static config(sequelize){
        return{
            sequelize,
            tableName: CUSTOMERS_TABLE,
            modelName: 'Customer',
            timestamps:false
        }
    }
}

module.exports = {customerSchema,Customer,CUSTOMERS_TABLE};