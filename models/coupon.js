"use strict";
const { type } = require("express/lib/response");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Coupon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    toJSON() {
      return { ...this.get(), id: undefined };
    }
  }
  Coupon.init(
    {
      uuid: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4 },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: { message: "code can not be empty " },
        },
      },
      expireDate: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { message: "expire date must not be empty " },
        },
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      discount: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      isPercent: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      sequelize,
      tableName: "coupon",
      modelName: "Coupon",
    }
  );
  return Coupon;
};
