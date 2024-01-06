const express = require("express");

const router = express.Router();

const indexController = require("../controllers/index");

const formatDateMiddleware = require("../middlewares/formatDate");

const fullFormatDateMiddleware = require("../middlewares/formatFullDate");

router.get("/",indexController.index_get)

router.post("/",formatDateMiddleware ,indexController.index_post)

router.get("/tickets", fullFormatDateMiddleware, indexController.tickets_get)

router.get("/contact", indexController.contact_get)

router.get("/error", indexController.error_get)

module.exports = router;