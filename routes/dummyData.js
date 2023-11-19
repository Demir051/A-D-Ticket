const express = require('express');
const router = express.Router();
const User = require("../models/user");
const Ticket = require("../models/ticket");
const Route = require("../models/route");
const Bus = require("../models/bus");
const Reservation = require("../models/reservation");

router.get('/createDummyData', async (req, res) => {

    try {
        // const busData = [{
        //         plateNumber: 'ABC123',
        //         capacity: 50
        //     },
        //     {
        //         plateNumber: 'DEF456',
        //         capacity: 50
        //     },
        //     {
        //         plateNumber: 'GHI789',
        //         capacity: 40
        //     },
        //     {
        //         plateNumber: 'JKL012',
        //         capacity: 55
        //     },
        //     {
        //         plateNumber: 'MNO345',
        //         capacity: 60
        //     },
        //     {
        //         plateNumber: 'PQR678',
        //         capacity: 45
        //     },
        //     {
        //         plateNumber: 'STU901',
        //         capacity: 48
        //     },
        //     {
        //         plateNumber: 'VWX234',
        //         capacity: 52
        //     },
        //     {
        //         plateNumber: 'YZA567',
        //         capacity: 53
        //     },
        //     {
        //         plateNumber: 'BCD890',
        //         capacity: 58
        //     },
        // ];

        // const routeData = [{
        //         name: 'Route 1',
        //         departureCity: 'Istanbul',
        //         arrivalCity: 'Ankara',
        //         distance: 300,
        //         departureDate: new Date(2023, 0, 1, 12, 30),
        //         BusId: bus.id,
        //     },
        //     {
        //         name: 'Route 2',
        //         departureCity: 'Ankara',
        //         arrivalCity: 'Izmir',
        //         distance: 500,
        //         departureDate: new Date(2023, 0, 2, 14, 0),
        //         BusId: bus.id,
        //     },
        //     {
        //         name: 'Route 3',
        //         departureCity: 'Izmir',
        //         arrivalCity: 'Antalya',
        //         distance: 400,
        //         departureDate: new Date(2023, 0, 3, 10, 45),
        //         BusId: bus.id,
        //     },
        //     {
        //         name: 'Route 4',
        //         departureCity: 'Antalya',
        //         arrivalCity: 'Bursa',
        //         distance: 200,
        //         departureDate: new Date(2023, 0, 4, 16, 20),
        //         BusId: bus.id,
        //     },
        //     {
        //         name: 'Route 5',
        //         departureCity: 'Bursa',
        //         arrivalCity: 'Eskisehir',
        //         distance: 150,
        //         departureDate: new Date(2023, 0, 5, 8, 0),
        //         BusId: bus.id,
        //     },
        //     {
        //         name: 'Route 6',
        //         departureCity: 'Eskisehir',
        //         arrivalCity: 'Konya',
        //         distance: 250,
        //         departureDate: new Date(2023, 0, 6, 13, 15),
        //         BusId: bus.id,
        //     },
        //     {
        //         name: 'Route 7',
        //         departureCity: 'Konya',
        //         arrivalCity: 'Adana',
        //         distance: 350,
        //         departureDate: new Date(2023, 0, 7, 11, 30),
        //         BusId: bus.id,
        //     },
        //     {
        //         name: 'Route 8',
        //         departureCity: 'Adana',
        //         arrivalCity: 'Mersin',
        //         distance: 100,
        //         departureDate: new Date(2023, 0, 8, 9, 45),
        //         BusId: bus.id,
        //     },
        //     {
        //         name: 'Route 9',
        //         departureCity: 'Mersin',
        //         arrivalCity: 'Gaziantep',
        //         distance: 450,
        //         departureDate: new Date(2023, 0, 9, 14, 0),
        //         BusId: bus.id,
        //     },
        //     {
        //         name: 'Route 10',
        //         departureCity: 'Gaziantep',
        //         arrivalCity: 'Istanbul',
        //         distance: 600,
        //         departureDate: new Date(2023, 0, 10, 17, 30),
        //         BusId: bus.id,
        //     },
        // ];

        // const userData = [{
        //         username: 'user1',
        //         password: 'pass123',
        //         email: 'user1@example.com',
        //     },
        //     {
        //         username: 'user2',
        //         password: 'pass456',
        //         email: 'user2@example.com',
        //     },
        //     {
        //         username: 'user3',
        //         password: 'pass789',
        //         email: 'user3@example.com',
        //     },
        //     {
        //         username: 'user4',
        //         password: 'passabc',
        //         email: 'user4@example.com',
        //     },
        //     {
        //         username: 'user5',
        //         password: 'passdef',
        //         email: 'user5@example.com',
        //     },
        //     {
        //         username: 'user6',
        //         password: 'passghi',
        //         email: 'user6@example.com',
        //     },
        //     {
        //         username: 'user7',
        //         password: 'passjkl',
        //         email: 'user7@example.com',
        //     },
        //     {
        //         username: 'user8',
        //         password: 'passmno',
        //         email: 'user8@example.com',
        //     },
        //     {
        //         username: 'user9',
        //         password: 'passpqr',
        //         email: 'user9@example.com',
        //     },
        //     {
        //         username: 'user10',
        //         password: 'passtu',
        //         email: 'user10@example.com',
        //     },
        // ];

        // const reservationData = [{
        //         date: new Date(),
        //         UserId: user.id,
        //     },
        //     {
        //         date: new Date(),
        //         UserId: user.id,
        //     },
        //     {
        //         date: new Date(),
        //         UserId: user.id,
        //     },
        //     {
        //         date: new Date(),
        //         UserId: user.id,
        //     },
        //     {
        //         date: new Date(),
        //         UserId: user.id,
        //     },
        //     {
        //         date: new Date(),
        //         UserId: user.id,
        //     },
        //     {
        //         date: new Date(),
        //         UserId: user.id,
        //     },
        //     {
        //         date: new Date(),
        //         UserId: user.id,
        //     },
        //     {
        //         date: new Date(),
        //         UserId: user.id,
        //     },
        //     {
        //         date: new Date(),
        //         UserId: user.id,
        //     },
        // ];

        // const ticketData = [{
        //         seatNumber: 10,
        //         price: 50.0,
        //         RouteId: route.id, // Rota ile ilişkilendir
        //         ReservationId: reservation.id, // Rezervasyon ile ilişkilendir
        //     },
        //     {
        //         seatNumber: 15,
        //         price: 55.0,
        //         RouteId: route.id,
        //         ReservationId: reservation.id,
        //     },
        //     {
        //         seatNumber: 20,
        //         price: 60.0,
        //         RouteId: route.id,
        //         ReservationId: reservation.id,
        //     },
        //     {
        //         seatNumber: 25,
        //         price: 45.0,
        //         RouteId: route.id,
        //         ReservationId: reservation.id,
        //     },
        //     {
        //         seatNumber: 30,
        //         price: 52.0,
        //         RouteId: route.id,
        //         ReservationId: reservation.id,
        //     },
        //     {
        //         seatNumber: 35,
        //         price: 48.0,
        //         RouteId: route.id,
        //         ReservationId: reservation.id,
        //     },
        //     {
        //         seatNumber: 40,
        //         price: 55.0,
        //         RouteId: route.id,
        //         ReservationId: reservation.id,
        //     },
        //     {
        //         seatNumber: 45,
        //         price: 50.0,
        //         RouteId: route.id,
        //         ReservationId: reservation.id,
        //     },
        //     {
        //         seatNumber: 50,
        //         price: 58.0,
        //         RouteId: route.id,
        //         ReservationId: reservation.id,
        //     },
        //     {
        //         seatNumber: 55,
        //         price: 53.0,
        //         RouteId: route.id,
        //         ReservationId: reservation.id,
        //     },
        // ];



        // Otobüs oluştur
        const bus = await Bus.bulkCreate([
        {
            plateNumber: 'ABC123',
            capacity: 50
        }, {
            plateNumber: 'DEF456',
            capacity: 50
        }, {
            plateNumber: 'GHI789',
            capacity: 40
        }, {
            plateNumber: 'JKL012',
            capacity: 55
        }, {
            plateNumber: 'MNO345',
            capacity: 60
        }, {
            plateNumber: 'PQR678',
            capacity: 45
        }, {
            plateNumber: 'STU901',
            capacity: 48
        }, {
            plateNumber: 'VWX234',
            capacity: 52
        }, {
            plateNumber: 'YZA567',
            capacity: 53
        }, {
            plateNumber: 'BCD890',
            capacity: 58
        } ]);

        // Rota oluştur
        const route = await Route.bulkCreate([
        {
            name: 'Route 1',
            departureCity: 'Istanbul',
            arrivalCity: 'Ankara',
            distance: 300,
            departureDate: new Date(2023, 0, 1, 12, 30),
            BusId: bus.id,
        }, {
            name: 'Route 2',
            departureCity: 'Istanbul',
            arrivalCity: 'Ankara',
            distance: 500,
            departureDate: new Date(2023, 0, 2, 14, 0),
            BusId: bus.id,
        }, {
            name: 'Route 3',
            departureCity: 'Istanbul',
            arrivalCity: 'Ankara',
            distance: 400,
            departureDate: new Date(2023, 0, 3, 10, 45),
            BusId: bus.id,
        }, {
            name: 'Route 4',
            departureCity: 'Istanbul',
            arrivalCity: 'Ankara',
            distance: 200,
            departureDate: new Date(2023, 0, 4, 16, 20),
            BusId: bus.id,
        }, {
            name: 'Route 5',
            departureCity: 'Bursa',
            arrivalCity: 'Eskisehir',
            distance: 150,
            departureDate: new Date(2023, 0, 5, 8, 0),
            BusId: bus.id,
        }, {
            name: 'Route 6',
            departureCity: 'Eskisehir',
            arrivalCity: 'Konya',
            distance: 250,
            departureDate: new Date(2023, 0, 6, 13, 15),
            BusId: bus.id,
        }, {
            name: 'Route 7',
            departureCity: 'Konya',
            arrivalCity: 'Adana',
            distance: 350,
            departureDate: new Date(2023, 0, 7, 11, 30),
            BusId: bus.id,
        }, {
            name: 'Route 8',
            departureCity: 'Adana',
            arrivalCity: 'Mersin',
            distance: 100,
            departureDate: new Date(2023, 0, 8, 9, 45),
            BusId: bus.id,
        }, {
            name: 'Route 9',
            departureCity: 'Mersin',
            arrivalCity: 'Gaziantep',
            distance: 450,
            departureDate: new Date(2023, 0, 9, 14, 0),
            BusId: bus.id,
        }, {
            name: 'Route 10',
            departureCity: 'Gaziantep',
            arrivalCity: 'Istanbul',
            distance: 600,
            departureDate: new Date(2023, 0, 10, 17, 30),
            BusId: bus.id,
        } ]);

        // Kullanıcı oluştur
        const user = await User.bulkCreate([
        {
            username: 'user1',
            password: 'pass123',
            email: 'user1@example.com',
        }, {
            username: 'user2',
            password: 'pass456',
            email: 'user2@example.com',
        }, {
            username: 'user3',
            password: 'pass789',
            email: 'user3@example.com',
        }, {
            username: 'user4',
            password: 'passabc',
            email: 'user4@example.com',
        }, {
            username: 'user5',
            password: 'passdef',
            email: 'user5@example.com',
        }, {
            username: 'user6',
            password: 'passghi',
            email: 'user6@example.com',
        }, {
            username: 'user7',
            password: 'passjkl',
            email: 'user7@example.com',
        }, {
            username: 'user8',
            password: 'passmno',
            email: 'user8@example.com',
        }, {
            username: 'user9',
            password: 'passpqr',
            email: 'user9@example.com',
        }, {
            username: 'user10',
            password: 'passtu',
            email: 'user10@example.com',
        } ]);

        // Rezervasyon oluştur
        const reservation = await Reservation.bulkCreate([
        {
            date: new Date(),
            UserId: user.id,
        }, {
            date: new Date(),
            UserId: user.id,
        }, {
            date: new Date(),
            UserId: user.id,
        }, {
            date: new Date(),
            UserId: user.id,
        }, {
            date: new Date(),
            UserId: user.id,
        }, {
            date: new Date(),
            UserId: user.id,
        }, {
            date: new Date(),
            UserId: user.id,
        }, {
            date: new Date(),
            UserId: user.id,
        }, {
            date: new Date(),
            UserId: user.id,
        }, {
            date: new Date(),
            UserId: user.id,
        } ]);

        // Bilet oluştur
        const ticket = await Ticket.bulkCreate([
        {
            seatNumber: 10,
            price: 50.0,
            RouteId: route.id, // Rota ile ilişkilendir
            ReservationId: reservation.id, // Rezervasyon ile ilişkilendir
        }, {
            seatNumber: 15,
            price: 55.0,
            RouteId: route.id,
            ReservationId: reservation.id,
        }, {
            seatNumber: 20,
            price: 60.0,
            RouteId: route.id,
            ReservationId: reservation.id,
        }, {
            seatNumber: 25,
            price: 45.0,
            RouteId: route.id,
            ReservationId: reservation.id,
        }, {
            seatNumber: 30,
            price: 52.0,
            RouteId: route.id,
            ReservationId: reservation.id,
        }, {
            seatNumber: 35,
            price: 48.0,
            RouteId: route.id,
            ReservationId: reservation.id,
        }, {
            seatNumber: 40,
            price: 55.0,
            RouteId: route.id,
            ReservationId: reservation.id,
        }, {
            seatNumber: 45,
            price: 50.0,
            RouteId: route.id,
            ReservationId: reservation.id,
        }, {
            seatNumber: 50,
            price: 58.0,
            RouteId: route.id,
            ReservationId: reservation.id,
        }, {
            seatNumber: 55,
            price: 53.0,
            RouteId: route.id,
            ReservationId: reservation.id,
        } ]);

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