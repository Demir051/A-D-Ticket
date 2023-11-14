const toUpperCase = require("../helpers/uppercaseString");

exports.index_get = async (req, res) => {

    try{

        res.render("users/index", {
            title : "Home Page"
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

    res.render("users/ticket" , {
        title: toUpperCase.buyutBasHarfi(kalkis) + "-" + toUpperCase.buyutBasHarfi(varis) + " Biletler",
        varis: varis,
        kalkis: kalkis,
        tarih: tarih
    });

}catch(err){
    console.log(err)
}

}