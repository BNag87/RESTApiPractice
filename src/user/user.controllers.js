const User = require("./user.model");


//CREATE function
exports.addUser = async (req, res) => {
    try{
        console.log("When adding, the request was: ",req.body)
        const newUser = new User(req.body)
        const token = await newUser.generateAuthToken();
        await newUser.save();
        res.status(200).send({ message: "Success", newUser, token})
        } 
        catch (error) {
            console.log(error)
            res.status(418).send({message: "Something went wrong, check server logs."})
        }   
}

//READ function
exports.login = async (req, res) => {
     try{
            const token = await req.user.generateAuthToken()
            res.status(200).send({user: req.user, token})
         } 
         catch (error) {
             console.log("Error in login function in controllers.js: \n\t",error)
             res.status(500).send({message: "Something went wrong, check server logs."})
         }   
}

//UPDATE FUNCTION
