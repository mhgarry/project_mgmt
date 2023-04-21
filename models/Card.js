const { Model, DataTypes } = require("sequelize");
// const bcrypt = require("bcrypt");
const db = require("../config/connection");

class Card extends Model {
    // async validatePass(provided_password) {
    //     const is_valid = await bcrypt.compare(provided_password, this.password);
    //     return is_valid;
    // }
}

Card.init({
    task_title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    task_desc: {
        type: DataTypes.STRING
    },
    task_cat: {
        type: DataTypes.STRING
    },
    teammate_id: {
        type: DataTypes.INTEGER
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: "To do"
    }
}, {
    sequelize: db,
    modelName: "card",
    // hooks: {
    //     async beforeCreate(user) {
    //         const encrypted_pass = await bcrypt.hash(user.password, 10);
    //         user.password = encrypted_pass;
    //     }
    // }
});

module.exports = Card;