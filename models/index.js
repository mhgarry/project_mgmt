const Project = require('./Project');
const User = require('./User');
const Card = require('./Card');

User.belongsToMany(Project, { through: Card });
User.hasMany(Card, { foreignKey: 'teammate_id' });

module.exports = {
  User,
  Card,
  Project,
};
