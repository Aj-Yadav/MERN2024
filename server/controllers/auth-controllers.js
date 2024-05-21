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

        const data = await User.create({username, email, phone, password});
        const value = await data.generateToken()
        res.status(200).send({msg: "registration Successfull", token: await value,userId: await data._id.toString(), });
        //? it is best practice to convert id to string to git rid of ferther complications in  frontend;
    } catch (error) {
        console.log(error);
        res.status(400).json({msg:"their was error with register"});
    }
}


module.exports = {home , register};