const User = require("../models/user-model")
const Contact = require("../models/contact-model")
const getAllUsers = async(req, res) => {
    try {
        const users = await User.find({}, {password:0})
        console.log(users);
        if(!users || users.length ===0){
            return res.status(404).json({message:"No user Found"});
        }
        console.log(users)
        return res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

const getAllContacts = async(req, res) => {
    try {
        const contacts = await Contact.find()
        console.log(contacts);
        if(!contacts || contacts.lenght ===0){
return res.status(404).json({message:"no Contacts Found"});
        }
        console.log(contacts);
        return res.status(200).json({message:contacts});
    } catch (error) {
        next(error);
    }
}

module.exports = {getAllUsers,getAllContacts};