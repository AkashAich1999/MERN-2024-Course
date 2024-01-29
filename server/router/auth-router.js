const express = require("express");
const router = express.Router();
const { home, register } = require("../controllers/auth-controller");
// const register = require("../controllers/auth-controller.js");


router.route("/").get(home);

// router.route("/register").get((req, res) => {
//     res.status(200).send("Welcome, to Registration Page !");
// });

router.route("/register").get(register);

module.exports = router;