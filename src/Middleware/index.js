const bcrypt = require("bcryptjs");

exports.hashPassword = async(req, res, next) => {
    try{
        const pass = req.body.password;
        const hashedPass = await bcrypt.hash(pass, 8);
        req.body.password = hashedPass;

        //[↓↓↓]this does the same as the three lines above
        //req.body.password = await bcrypt.hash(req.body.password, 8);

    } catch(error) {
        console.log("Error whilst hashing in Middleware → index.js:\n\t",error)
        res.status(500).send({message:"Check server error logs"});
    }
}