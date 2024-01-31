const mongoose = require('mongoose');

// const URI = "mongodb+srv://akashaichofficial:akash12345@cluster0.aytplln.mongodb.net/MERN-2024-Course?retryWrites=true&w=majority";
const URI = process.env.MONGODB_URI;

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