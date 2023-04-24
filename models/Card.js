const { Model, DataTypes } = require('sequelize');
const db = require('../config/connection');
const User = require('./User');

class Card extends Model {}

Card.init(
  {
    task_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    task_desc: {
      type: DataTypes.STRING,
    },
    task_cat: {
      type: DataTypes.STRING,
    },
    teammate_id: {
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'To do',
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize: db,
    modelName: 'card',
  },
);

User.hasMany(Card, { foreignKey: 'user_id' });

module.exports = Card;
