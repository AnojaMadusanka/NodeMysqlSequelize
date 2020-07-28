const Sequelize = require('sequelize');
const sequelize = new Sequelize("socialnetwork", 'root', '', { host: '127.0.0.1', dialect: "mysql", operatorsAliases: false});

// try{
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully');
// }catch(error) {
//     console.error('Unable to connect to the database', error);
// }

module.exports = sequelize;
global.sequelize = sequelize;   //To make global so we can access directly without using require  