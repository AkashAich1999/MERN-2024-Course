const express = require("express");
const router = express.Router();

// Mount the Router: To use the router in your main Express app, you can mount it at a specific URL prefix.
router.get("/", (req, res) => {
	res.status(200).send("Welcome, to Akash Technologies !");
});

module.exports = router;