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

//READ ALL RECORDS function
exports.getUsers = async (req, res) => {
    try {
    
      const userList = await User.find({}); //find all users, store result in userList
      console.log("Successfully read database."); //console log to tell user of success
      res.status(200).send({ userList }); //send the userlist to the result part of the endpoint
    
    } catch (error) {
      console.log(error);
      res
        .status(418)
        .send({ message: "Reading database went wrong. Check server logs." }); //response if fails.
    }
  };

//UPDATE FUNCTION
exports.editUsers = async (req, res) => {
    try {
    
    const filterField = req.user.username; //need to ensure this is the username being searched
    const updateField = req.user; //need to figure out what to pass as an update

      const userList = await User.updateOne(/*filter field*/ req.user, /*update value*/ update) //update user
      console.log("Successfully updated database! "); //console log to tell user of success
      res.status(200).send({ userList }); //send the userlist to the result part of the endpoint
    
    } catch (error) {
      console.log(error);
      res
        .status(418)
        .send({ message: "Reading database went wrong. Check server logs." }); //response if fails.
    }
  };