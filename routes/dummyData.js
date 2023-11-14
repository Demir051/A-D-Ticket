const express = require('express');
const router = express.Router();
const User = require("../models/user");
const Ticket = require("../models/ticket");
const Route = require("../models/route");
const Bus = require("../models/bus");
const Reservation = require("../models/reservation");

router.get('/createDummyData', async (req, res) => {
    try {
        // Otobüs oluştur
        const bus = await Bus.create({
            plateNumber: 'ABC123',
            capacity: 50,
        });

        // Rota oluştur
        const route = await Route.create({
            name: 'Sample Route',
            departureCity: 'City A',
            arrivalCity: 'City B',
            distance: 300,
            BusId: bus.id, // Otobüs ile ilişkilendir
        });

        // Kullanıcı oluştur
        const user = await User.create({
            username: 'sampleUser',
            password: 'password123',
            email: 'sample@example.com',
        });

        // Rezervasyon oluştur
        const reservation = await Reservation.create({
            date: new Date(),
            UserId: user.id, // Kullanıcı ile ilişkilendir
        });

        // Bilet oluştur
        const ticket = await Ticket.create({
            seatNumber: 10,
            price: 50.0,
            RouteId: route.id, // Rota ile ilişkilendir
            ReservationId: reservation.id, // Rezervasyon ile ilişkilendir
        });

        res.status(201).json({
            message: 'Dummy data created successfully'
        });
    } catch (error) {
        console.error('Error creating dummy data:', error);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
});

module.exports = router;
