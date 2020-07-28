const Sequelize = require('sequelize');

module.exports = sequelize.define("User", {            //sequelize makes global in coonection.js
    id: {
        type: Sequelize.INTEGER(64),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: Sequelize.STRING(35),
        allowNull: false,
        unique: true
    },
    password: {
        type:Sequelize.STRING(20),
        allowNull: false
    }
});