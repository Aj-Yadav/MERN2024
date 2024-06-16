const User = require("../models/user-model");
const Contact = require("../models/contact-model");
// *-----------------------------------
//?             Get All Users  from db
// *-----------------------------------
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    console.log(users);
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No user Found" });
    }
    console.log(users);
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

// *-----------------------------------
//?             GEt  user by id
// *-----------------------------------

const getUsersById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({ _id: id }, { password: 0 });
    if (!data) {
      res.status(400).json({ message: "Data not fond issue with Data" });
    }
    return res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};
// *-----------------------------------
//?             Update  user by id
// *-----------------------------------

const updateUsersById = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUserData = req.body;

    const updatedData = await User.updateOne(
      { _id: id },
      {
        $set: updatedUserData,
      }
    );
    return res.status(200).json({ updatedData });
  } catch (error) {
    console.log(error);
  }
};

// *-----------------------------------
//?             Delete user by id
// *-----------------------------------

const deleteUserById = async (req, res) => {
  try {
    const id = await req.params.id;
    const data = await User.deleteOne({ _id: id });
    // console.log("data")
    return res.status(200).json({ message: data });
  } catch (error) {
    console.log(error);
  }
};

// *-----------------------------------
//?             Get All Contacts
// *-----------------------------------
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    if (!contacts || contacts.lenght === 0) {
      return res.status(404).json({msg:"no Contacts Found"});
    }
    return res.status(200).json({contacts});
  } catch (error) {
    next(error);
    // console.log(error);
  }
};

module.exports = {
  getAllUsers,
  getAllContacts,
  deleteUserById,
  getUsersById,
  updateUsersById,
};
