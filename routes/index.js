const express = require("express");

const router = express.Router();

const indexController = require("../controllers/index");

router.get("/", indexController.index_get)

router.get("/contact", indexController.contact_get)

router.get("/error", indexController.error_get)

module.exports = router;