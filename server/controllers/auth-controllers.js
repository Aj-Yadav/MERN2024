const user = require("../models/user-model");

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
        console.log(req.body);
        const {username, email, phone, password} = req.body;
        const userExist = User.findOne({email: email});

        if(userExist){
            return res.status(400).json({msg:"email already exists"});
        }
        await User.create({username, email, phone, password});
        res.status(200).send({data})
    } catch (error) {
        res.status(400).send("their was error with register")
    }
}


module.exports = {home , register};