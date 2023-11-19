const {
    DataTypes
} = require('sequelize');
const sequelize = require('../data/db');

const Reservation = sequelize.define('Reservation', {
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
});

module.exports = Reservation;