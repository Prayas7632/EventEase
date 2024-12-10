const mongoose = require('mongoose')

const connectDB = async () => {
    try {        
        await mongoose.connect('mongodb://127.0.0.1:27017/myDatabase');
        console.log("Connected to database")

    } catch (e) {
        console.log("error:", e);
    }
}

module.exports = connectDB;