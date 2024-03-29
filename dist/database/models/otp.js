"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _sequelize = require("sequelize");

function _default(sequelize) {
  class OTP extends _sequelize.Model {
    static associate(models) {
      OTP.belongsTo(models.user, {
        foreignKey: 'userId'
      });
    }

  }

  OTP.init({
    otp: {
      type: _sequelize.DataTypes.INTEGER,
      unique: true,
      allowNull: false
    },
    userId: {
      type: _sequelize.DataTypes.UUID,
      allowNull: false
    },
    createdAt: {
      type: _sequelize.DataTypes.DATE,
      allowNull: false,
      defaultValue: _sequelize.DataTypes.NOW
    },
    expiresAt: {
      type: _sequelize.DataTypes.DATE,
      allowNull: false
    }
  }, {
    modelName: 'otp',
    sequelize
  });
  OTP.afterCreate(async otp => {
    console.log('OTP db after created', otp.createdAt, otp.expiresAt, otp.createdAt.getTime());
    const createdAt = otp.createdAt;
    const expiresAt = new Date(createdAt.getTime() + 3 * 60000).toISOString();
    console.log("Expires at is: ", expiresAt); // 2 minutes in milliseconds

    otp.expiresAt = expiresAt;
  });
  return OTP;
}