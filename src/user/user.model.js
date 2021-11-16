const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
});

//create a method for the userSchema above
//tokens are made with an NPM library, jsonwebtoken
userSchema.methods.generateAuthToken = function() {
    //if using newUser, 'this' refers to the new user created
    return jwt.sign({_id: this._id}, process.env.SECRET)
}

const User = mongoose.model("User", userSchema);
module.exports = User;