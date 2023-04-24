const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const db = require('..//config/connection');

class User extends Model {
  async validatePassword(password) {
    const isValid = await bcrypt.compare(password, this.password);
    return isValid;
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6, 100],
      },
    },
  },
  {
    sequelize: db,
    modelName: 'User',
    hooks: {
      async beforeCreate(user) {
        const encryptedPassword = await bcrypt.hash(user.password, 10);
        user.password = encryptedPassword;
      },
    },
  }
);

module.exports = User;
