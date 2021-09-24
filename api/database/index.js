const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

//Set Models
const User = require('../models/User')
const UserAddress = require('../models/UserAddress')
const Technology = require('../models/Technology')
const UserTechnology = require('../models/UserTechnology')

const connection = new Sequelize(dbConfig);

User.init(connection);
UserAddress.init(connection);
Technology.init(connection);
UserTechnology.init(connection);
Technology.associate(connection.models);
User.associate(connection.models);


module.exports = connection;