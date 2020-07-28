const Sequelize = require('sequelize');

module.exports = sequelize.define("Tweet", {            //sequelize makes global in coonection.js
    id: {
        type: Sequelize.INTEGER(64),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    content: Sequelize.STRING(300),
});
