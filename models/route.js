const {DataTypes} = require('sequelize');
const sequelize = require('../data/db');

const Route = sequelize.define('Route', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    departureCity: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    arrivalCity: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    distance: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    departureDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
});

module.exports = Route;
