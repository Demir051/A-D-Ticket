const express = require("express");
const app = express();
const dotenv = require('dotenv');
const sequelize = require("./data/db");
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const path = require("path");

const pug = require("pug");

// Pug şablonları için view engine ayarı
app.set("view engine", "pug");

// .env dosyasından çevresel değişkenleri yükle
dotenv.config();

// Sequelize veritabanı bağlantısı
sequelize
    .sync() // Veritabanınızı senkronize eder
    .then(() => {
        console.log('Database connected.');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });

// Port numarası .env dosyasından alınır
const PORT = process.env.PORT;

// Middleware'ler
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(expressSession({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false,
}));

// User modeli
const User = require("./models/user");
const Ticket = require("./models/ticket");
const Route = require("./models/route");
const Bus = require("./models/bus");
const Reservation = require("./models/reservation");


//Relation
Bus.hasMany(Route, {
    as: 'Routes'
});

Route.belongsTo(Bus);

Ticket.belongsTo(Route);

Reservation.belongsTo(User);

User.hasMany(Reservation, {
    as: 'Reservations'
});

Reservation.hasMany(Ticket, {
    as: 'Tickets'
});

Ticket.belongsTo(Reservation);


// User rotaları
const userRoutes = require("./routes/user");
app.use("/", userRoutes);

const dummyDataRoutes = require('./routes/dummyData');
app.use('/dummy', dummyDataRoutes);

// Statik dosyaların sunumu
app.use("/libs", express.static(path.join(__dirname, "node_modules")));
app.use("/static", express.static(path.join(__dirname, "public")));

//remove database

// (async () => {
//     await sequelize.sync({force : true});
// })()

// Uygulamayı dinle
app.listen(PORT, () => {
    console.log(`App started`);
});