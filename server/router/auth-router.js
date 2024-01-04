const express = require("express");
const router = express.Router();

// Mount the Router: To use the router in your main Express app, you can mount it at a specific URL prefix.

// One Way (1st Way)
// router.get("/", (req, res) => {
// 	res.status(200).send("Welcome, to Akash Technologies !");
// });

// Second Way
router.route("/").get((req, res) => {
    	res.status(200).send("Welcome, to Akash Technologies !");
});

router.route("/register").get((req, res) => {
    res.status(200).send("Welcome, to Registration Page !");
});

module.exports = router;