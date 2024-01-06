const express = require("express");

const router = express.Router();

const adminController = require("../controllers/admin");

const formatDateMiddleware = require("../middlewares/formatFullDate");

router.get("/", adminController.admin_get);

router.get("/tickets" , formatDateMiddleware , adminController.tickets_get);

router.get("/add-ticket", adminController.add_ticket_get);

router.post("/add-ticket", adminController.add_ticket_post);

module.exports = router;