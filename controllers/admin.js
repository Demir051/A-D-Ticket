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