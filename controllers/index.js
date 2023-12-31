exports.index_get = async (req, res, next) => {
    res.render("homepage",{
        title: "Home Page"
    });
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