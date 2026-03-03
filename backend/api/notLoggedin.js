const path = require("path");
const express = require("express");

const loggedinController = require("../controllers/loggedin");

const router = express.Router();

router.get("/",loggedinController.);

module.exports = router;
