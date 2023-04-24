const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const db = require('../config/connection');

class User extends Model {
  async validatePass(provided_password) {
    const is_valid = await bcrypt.compare(provided_password, this.password);
    return is_valid;
  }
}

User.init({
  email: {
    type: DataTypes.STRING,
    unique: true,
    validate: {
      isEmail: true,
    },
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    validate: {
      len: 6,
    },
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'user',
  hooks: {
    async beforeCreate(user) {
      const encrypted_pass = await bcrypt.hash(user.password, 10);
      user.password = encrypted_pass;
    },
  },
});

module.exports = User;
