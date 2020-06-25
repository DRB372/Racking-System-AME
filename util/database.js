const Sequelize = require('sequelize');

const sequelize = new Sequelize('RackingSystem', 'root', '', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;