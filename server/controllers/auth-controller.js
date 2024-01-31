const User = require("../models/user-model");
const bcrypt = require("bcrypt");

const home = async (req, res) => {
    try{
        res.status(200).send("Welcome, to Akash Technologies !");
    }
    catch(error){
        console.log(error);
    }
}

const register = async (req, res) => {
    try{
        console.log(req.body);
        // res.status(200).send("Welcome, to Registration Page !");
        const {username, email, phone, password} = req.body;
        const userExist = await User.findOne({email: email});

        if(userExist){
            return res.status(400).json({ msg : "Email Already Exists !"});
        }

        // hash the password
        /* const saltRound = 10;
          const hash_password = await bcrypt.hash(password, saltRound); */

        // If user does not Exists, then Create One
        // const userCreated = await User.create({ username, email, phone, password:hash_password });
        const userCreated = await User.create({ username, email, phone, password });

        res.status(201).json({ userCreated });
    }
    catch(error){
        res.status(400).send({msg:"page not found"});
    }
}

module.exports = { home, register };