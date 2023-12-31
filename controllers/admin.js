const Ticket = require('../models/ticket');

exports.admin_get = async (req, res) => {
    res.render('admin/index' , {
        title: 'Admin Panel'
    });
};

exports.add_ticket_get = async (req, res) => {
    res.render('admin/add-ticket' , {
        title: 'Add Ticket'
    });
};

exports.add_ticket_post = async (req, res) => {

    const {
        departure,
        destination,
        date,
        passengerCount,
        price,
        companyName
    } = req.body

    try{

        const ticket = await Ticket.create({
            departure,
            destination,
            date,
            passengerCount,
            price,
            companyName
        });

        res.redirect('/adminpanel')

    }catch(err){
        console.log(err);
    }
}

exports.tickets_get = async (req, res) => {
    
        try{
    
            const tickets = await Ticket.find();
    
            res.render('admin/tickets' , {
                title: 'Tickets',
                tickets
            });
    
        }catch(err){
            console.log(err);
        }
}