//   controllers -> auth-controllers.js

const User = require("../models/user-model");

const bcrypt = require("bcryptjs");

//? GET home 
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
// *-------------------
// Home Logic
// *-------------------
//?      User POST register
const register = async (req, res) => {
    try {
        console.log(req.body);
        const { username,email,phone,password} = req.body;

        const userExist = await User.findOne({email});

        if(userExist){
            return res.status(400).json({msg:"email already exists"});
        }

        const data = await User.create({username, email, phone, password});
        // const value = await data.generateToken()
        res.status(201).send({msg: "registration Successfull", token: await data.generateToken(),userId: await data._id.toString(), });
        //? it is best practice to convert id to string to git rid of ferther complications in  frontend;
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"Internal server error"});
    }
}

//?         POST login
const login = async (req, res) => {
    try {
        const { email, password} = req.body;
        const userExist = await User.findOne({email});
        console.log("controller",userExist);
        if(!userExist){
            res.status(400).json({msg:"Invalid Credentials"});
        }

        // const user = await bcrypt.compare(password, userExist.password);
        const user = await userExist.comparePassword(password);
        if(user){
            res.status(200).send({
                msg: "login Successfull",
                token: await userExist.generateToken(),
                userId: await userExist._id.toString(), 
        });
        }else{
            res.status(401).json({mesConfig:"Invalid email or password"});
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({mesConfig:"Internal server error"});
    }
}


module.exports = {home , register , login};

