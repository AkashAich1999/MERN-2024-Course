const express = require("express");
const router = express.Router();
// const { home, register } = require("../controllers/auth-controller");
const authcontrollers = require("../controllers/auth-controller");

router.route("/").get(authcontrollers.home);

router.route("/register").get(authcontrollers.register);

module.exports = router;