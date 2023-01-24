const {Model,DataTypes,Sequelize} = require('sequelize');
const {ORDER_TABLE} = require('./order.models');
const {PRODUCTS_TABLE} = require('./Products.models');

const ORDER_PRODUCT_TABLE = 'order_product';

const orderPorductSchema = {
    id:{
        allowNull:false,
        autoIncrement:true,
        type: DataTypes.INTEGER,
        primaryKey:true
    },
    amount:{
        allowNull:false,
      type:DataTypes.INTEGER  
    },
    orderId:{
        field: 'order_id',
        allowNull: false,
        type:DataTypes.INTEGER,
        references:{
            model: ORDER_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    productId:{
        field: 'product_id',
        allowNull:false,
        type: DataTypes.INTEGER,
        references:{
            model: PRODUCTS_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    createAt:{
        field: 'create_at',
        allowNull: false,
        type:DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ')
    }
}


class Order_Product extends Model{
    static  associate(){
        
    }
    
    static config(sequelize){
        return{
            sequelize,
            tableName: ORDER_PRODUCT_TABLE,
            modelName: 'Order_Product',
            timestamps:false
        }
    }
}

module.exports = {ORDER_PRODUCT_TABLE,orderPorductSchema,Order_Product};