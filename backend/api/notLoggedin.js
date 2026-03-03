const express = require("express");

const notLoggedinController = require("../controllers/notLoggedin");

const router = express.Router();

router.post("/login", notLoggedinController.login);

module.exports = router;
