const Ticket = require("../models/ticket");
const formatDateMiddleware = require("../middlewares/formatDate");

exports.index_get = async (req, res, next) => {
    const tickets = await Ticket.find();
    res.render("homepage",{
        title: "Home Page",
        tickets
    });
}

exports.index_post = async (req, res, next) => {
    const {departure , destination , date} = req.body

    try{

        if( !departure || !destination || !date || departure == destination){
            const tickets = await Ticket.find();
            return res.render("homepage",{
                title: "Home Page",
                error: "Please fill all the fields",
                tickets
            })
        }

        const formatDate = (dateString) => {
            const options = {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric'
            };
            return new Date(dateString).toLocaleDateString('en-US', options);
        };

        const formattedDate = formatDate(date);

        res.redirect(`/tickets?departure=${departure}&destination=${destination}&date=${formattedDate}`)

    }catch(err){
        console.log(err);
    }
}

exports.tickets_get = async (req, res, next) => {

    const { departure, destination, date } = req.query;

    try{

        const tickets = await Ticket.find({
            departure: departure,
            destination: destination,
        });

        if(tickets.length == 0){
            return res.render("homepage",{
                title: "Home Page",
                error: "No tickets found"
            })
        }

        const formattedTicketsDates = tickets.map(ticket => {
            const dateObject = new Date(ticket.date);
            return `${dateObject.getMonth() + 1}/${dateObject.getDate()}/${dateObject.getFullYear()}`;
        });

        if( formattedTicketsDates.includes(date)){
            return res.render("tickets",{
                title: departure + " - " + destination,
                tickets : tickets.filter(ticket => {
                    const dateObject = new Date(ticket.date);
                    return `${dateObject.getMonth() + 1}/${dateObject.getDate()}/${dateObject.getFullYear()}` === date;
                })
            });
        }

        res.render("homepage",{
            title: "Home Page",
            error: "No tickets found"
        })
        
    }catch(err){
        console.log(err);
    }
}

exports.contact_get = async (req, res, next) => {
    res.render("contact",{
        title: "Contact Page"
    });
}

exports.error_get = async (req, res, next) => {
    res.render("error",{
        title: "Error Page"
    });
}