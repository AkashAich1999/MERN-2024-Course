const express = require('express');
const app = express();

app.get("/", (req, res) => {
	res.status(200).send("Hello, I am Akash Aich");
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
});