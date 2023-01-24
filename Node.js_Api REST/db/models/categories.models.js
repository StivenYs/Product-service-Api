const {Model,DataTypes,Sequelize} = require('sequelize');

const CATEGORIES_TABLE = 'categories'

const categoriesSchema = {
    
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type:DataTypes.INTEGER,
    },
    name:{
        allowNull: false, 
        unique: true,
        type: DataTypes.STRING,
    },
    image:{
        type: DataTypes.STRING,
        allowNull: false
    },
    createAt:{
        allowNull: false,
        field: 'create_at',
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
    }
}

class Category extends Model{
    
    static associate (models){
        this.hasMany(models.Product,{
            as: 'product',
            foreignKey:'categoryId'
        })
       
    }
    static config(sequelize){
        return {
            sequelize,
            tableName: CATEGORIES_TABLE,
            modelName: 'Category',
            timestamps: false
        }
    }
}

module.exports = {CATEGORIES_TABLE,categoriesSchema,Category};