const User = require("./User");
const Card = require ("./Card");

User.hasMany(Card, {foreignKey: "teammate_id"});

module.exports = {
  User,
  Card
}