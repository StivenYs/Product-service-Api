const {Model,DataTypes,Sequelize, INTEGER}= require('sequelize');

const ORDER_TABLE = 'orders';

const orderSchema = {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type:DataTypes.INTEGER
    },
    customerId:{
      allowNull: false,
      field: 'customer_id',
      type: DataTypes.INTEGER,
      references:{
          model: 'customers',
          key: 'id'
      }  ,
      onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    createAt:{
        allowNull: false,
        field: 'create_at',
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
}

class Order extends Model{
    static associate(models){
        this.belongsTo(models.Customer,{
            as:'customer',
            foreignKey:'customerId'
        });
        this.belongsToMany(models.Product,{
            as:'item',
            through: models.Order_Product,
            foreignKey: 'orderId',
            otherKey: 'productId'
        });
    }
    static config(sequelize){
        return{
            sequelize,
            tableName: ORDER_TABLE,
            modelName: 'Order',
            timestamps: false
        }
    }
}

module.exports = {ORDER_TABLE,orderSchema,Order};