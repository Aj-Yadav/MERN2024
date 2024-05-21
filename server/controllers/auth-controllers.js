const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
try {
    res
    .status(200)
    .send("hello I am in the Home and I am using Controllers by authcontrollers")
} catch (error) {
    console.log(error);
    res.status(400).send("their was error with Home")
}
}

const register = async (req, res) => {
    try {
        // console.log(req.body);
        const { username,
                email,
                phone,
                password} = req.body;
                
        const userExist = await User.findOne({email});

        if(userExist){
            return res.status(400).json({msg:"email already exists"});
        }

        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password, saltRound);
        

        const data = await User.create({username, email, phone, password});
        res.status(200).send({msg: data})
    } catch (error) {
        console.log(error);
        res.status(400).json({msg:"their was error with register"});
    }
}


module.exports = {home , register};