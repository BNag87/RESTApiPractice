const User = require("./user.model");


//CREATE function
exports.addUser = async (req, res) => {
    try{
        console.log("When adding, the request was: ",req.body)
        const newUser = new User(req.body)
        await newUser.save();
        res.status(200).send({ message: "Success", newUser})
        } 
        catch (error) {
            console.log(error)
            res.status(418).send({message: "Something went wrong, check server logs."})
        }   
}

//READ function
exports.login = async (req, res) => {
     try{
            res.status(200).send(req.user)
         } 
         catch (error) {
             console.log("Error in login function in contorollers.js: \n\t",error)
             res.status(500).send({message: "Something went wrong, check server logs."})
         }   
}