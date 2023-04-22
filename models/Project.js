const { Model, DataTypes, INTEGER } = require("sequelize");
// const bcrypt = require("bcrypt");
const db = require("../config/connection");

class Project extends Model {
    // async validatePass(provided_password) {
    //     const is_valid = await bcrypt.compare(provided_password, this.password);
    //     return is_valid;
    // }
}

Project.init({
    proj_title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id: {
        type: INTEGER
    }
}, {
    sequelize: db,
    modelName: "proj",
    // hooks: {
    //     async beforeCreate(user) {
    //         const encrypted_pass = await bcrypt.hash(user.password, 10);
    //         user.password = encrypted_pass;
    //     }
    // }
});

module.exports = Project;