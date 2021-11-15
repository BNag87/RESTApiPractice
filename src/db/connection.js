require("dotenv").config();
const mongoose = require("mongoose");

const connection = async () => {
try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("CoNNeCtEd!")
    }
catch(error) {
        console.log("Bowel movement in connections.js → connection function: ", error)
    }

};

connection();