const {Model,Sequelize,DataTypes} = require('sequelize');
const {CATEGORIES_TABLE} = require('./categories.models');

const PRODUCTS_TABLE = 'products'

const productSchema = {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name:{
      allowNull: false,
      type: DataTypes.STRING(40),
    },
    description:{
        type: DataTypes.STRING,
        defaultValue: 'not description'
    },
    price:{
        allowNull: false,
        type: DataTypes.INTEGER
    },
    image:{
      type: DataTypes.STRING  
    },
    creteAt:{
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    categoryId:{
        allowNull:false,
        field: 'category_Id',
        type: DataTypes.INTEGER,
        references: {
            model: CATEGORIES_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    }
    
    
}

class Product extends Model{
   
   static associate(models){
       this.belongsTo(models.Category,{as: "category",foreignKey:'categoryId'})
   }
    static config(sequelize){
        return{
            sequelize,
            tableName: PRODUCTS_TABLE,
            modelName: 'Product',
            timestamps: false
        }
    }
}
//nameTable,schema,model
module.exports = {PRODUCTS_TABLE,productSchema,Product};