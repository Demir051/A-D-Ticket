const express = require("express");

const router = express.Router();

const adminController = require("../controllers/admin");

router.get("/", adminController.admin_get)

router.get("/add-ticket", adminController.add_ticket_get);

module.exports = router;