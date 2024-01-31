const mongoose = require('mongoose');

const URI = "mongodb+srv://akashaichofficial:akash12345@cluster0.aytplln.mongodb.net/?retryWrites=true&w=majority";

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connection Successful To Database !");
    } catch(err) {
        console.error("Database Connection Failed !");
        process.exit(0);
    }
}

module.exports = connectDb;