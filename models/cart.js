"use strict";
const { type } = require("express/lib/response");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    toJSON(){
      return {...this.get(),id:undefined}
    }
  }
  Cart.init(
    {
      uuid: { type: DataTypes.UUID, 
        defaultValue: DataTypes.UUIDV4 },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          notNull:{message:"name can not be empty "}
        }
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
          notNull:{message:"price can not be empty "}
        }
      },
    },
    {
      sequelize,
      tableName: "carts",
      modelName: "Cart",
    }
  );
  
  return Cart;
};
