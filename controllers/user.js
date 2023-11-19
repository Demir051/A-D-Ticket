const toUpperCase = require("../helpers/uppercaseString");

//models

const User = require("../models/user");
const Ticket = require("../models/ticket");
const Route = require("../models/route");
const Bus = require("../models/bus");
const Reservation = require("../models/reservation");

exports.index_get = async (req, res) => {

    const message = req.query.message;

    try{

        const routes = await Route.findAll({

            attributes: ['departureCity', 'arrivalCity']

        });

        const routeMap = routes.map(route => route.dataValues);

        const uniqueDepartureCities = [];
        const uniqueArrivalCities = [];

        routeMap.forEach(route => {
            if (!uniqueDepartureCities.includes(route.departureCity)) {
               uniqueDepartureCities.push(route.departureCity);
            }

            if (!uniqueArrivalCities.includes(route.arrivalCity)) {
               uniqueArrivalCities.push(route.arrivalCity);
            }
        });

        res.render("users/index", {
            title : "Home Page",
            message: message,
            departureCitys : uniqueDepartureCities,
            arrivalCitys : uniqueArrivalCities
        })

    }catch(err){

        console.log(err);

    }
}

exports.index_post = async (req, res) => {
    try {

        const varis = req.body.varis;
        const kalkis = req.body.kalkis;
        const tarih = req.body.tarih;

        if (tarih !== "default" && varis !== "default" && kalkis !== "default") {

            const queryString = `?varis=${varis}&kalkis=${kalkis}&tarih=${tarih}`;

            return res.redirect(`tickets${queryString}`);
            
        }
 
        res.render("users/index", {
            title : "Home Page",
            message : "Lütfen Tüm Alanları Doldurunuz",
            alert : "danger"
        });

    } catch (err) {
        console.log(err);
    }
};

exports.tickets_get = async (req , res) => {

try{

    const varis = req.query.varis;
    const kalkis = req.query.kalkis;
    const tarih = req.query.tarih;

    const routes = await Route.findAll({
        where : {
            departureCity : kalkis,
            arrivalCity : varis,
        },
    });

    const dataValuesArray = routes.map(route => route.dataValues);

    if( routes.length == 0 ) {
        return res.redirect(`/?message=${encodeURIComponent("data_not_found")}`);
    }


    res.render("users/ticket" , {
        title: toUpperCase.buyutBasHarfi(kalkis) + "-" + toUpperCase.buyutBasHarfi(varis) + " Biletler",
        varis: varis,
        kalkis: kalkis,
        tarih: tarih,
        routes: dataValuesArray
    });

}catch(err){
    console.log(err)
}

};

exports.ticket_params_get = async (req, res) => {
    
        try{
    
            const id = req.params.id;
    
            const route = await Route.findOne({
                where : {
                    id : id
                }
            });
    
            const routeData = route.dataValues;
    
            res.render("users/ticket_params" , {
                title : routeData.name + "-" + " Ticket Details",
                route : routeData
            });

        }catch(err){
            console.log(err);
        }
};

exports.about_get = async (req, res) => {
    try {

        res.render("users/about", {
            title: "About Page"
        });

    } catch (err) {
        console.log(err);
    }
};