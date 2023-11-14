const {DataTypes} = require('sequelize');
const sequelize = require('../data/db');

const Ticket = sequelize.define('Ticket', {
    seatNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
});

module.exports = Ticket;
