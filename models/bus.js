const {DataTypes} = require('sequelize');
const sequelize = require('../data/db');

const Bus = sequelize.define('Bus', {
    plateNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = Bus;
