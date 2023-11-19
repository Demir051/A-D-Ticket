const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");

router.get("/ticket/:id", userController.ticket_params_get);

router.get("/tickets", userController.tickets_get)

router.get("/about", userController.about_get);

router.get("/", userController.index_get);

router.post("/", userController.index_post);

module.exports = router;