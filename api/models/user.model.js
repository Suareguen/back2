const { connection } = require('../../database/index.js')
const { DataTypes } = require('sequelize')

const User = connection.define("user", {
  
  user_firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  user_lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  user_nickname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
  user_role: {
    type: DataTypes.ENUM(['Player','Admin']),
    allowNull: false,
  },
  user_DNI: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  user_email: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  user_password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  user_direction: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  user_discord_user: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User