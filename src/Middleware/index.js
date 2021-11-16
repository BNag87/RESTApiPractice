const bcrypt = require("bcryptjs");
const { json } = require("express");
const { restart } = require("nodemon");
const User = require("../user/user.model")
const jwt = require("jsonwebtoken")

exports.hashPassword = async(req, res, next) => {
    try{
        const pass = req.body.password;
        const hashedPass = await bcrypt.hash(pass, 8);
        req.body.password = hashedPass;

        //[↓↓↓]this does the same as the three lines above
        //req.body.password = await bcrypt.hash(req.body.password, 8);
        
        next(); //ensure you leave the function
    } catch(error) {
        console.log("Error whilst hashing in Middleware → index.js:\n\t",error)
        res.status(500).send({message:"Check server error logs"});
    }
}

exports.comparePassword = async (req, res, next) => {
try{
    const user = await User.findOne({email:req.body.email});
    if(await bcrypt.compare(req.body.password, user.password)){
        req.user = user;
        next();
    }
    else {
        throw new Error();
    }
} 
catch (error){
    console.log(error);
    res.status(500).send({message: "Check server logs"});
}
} 

exports.tokenAuth = async (req, res, next) => {
    try {
        const tokenObj = jwt.verify(req.header("Authorization").replace("Bearer ", ""), process.env.SECRET);
        const user = await User.findOne({_id: tokenObj._id})
        req.user = user;

        console.log("user was set as:\n\t", user);
        next();
    } 
    catch (error) {
    console.log(error)
    res.status(500).send({message: "Check server logs"});
    }
}