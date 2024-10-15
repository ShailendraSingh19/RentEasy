const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = async()=>{
    try{
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@cluster0.pn8nba5.mongodb.net/?retryWrites=true&w=majority`);
        console.log("mongoose connected");
    }catch(err){
        // console.log(process.env.DB_PWD);
        console.log("ERROR in DB", err);
    }
}

module.exports = connectDB;