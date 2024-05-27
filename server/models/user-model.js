const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require: true,
    },
    email: {
        type:String,
        require: true,
    },
    phone: {
        type:String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
});


//? secure the password with bcrypt 
userSchema.pre('save', async function(next){
    // console.log("pre userSchema",this);
    const user = this;

    if(!user.isModified("password")){
        next();
    }

    try {
        //  const saltRound = 10;
         const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_password;// by this we are changing field of password with hash_password
    } catch (error) {
        console.log("bcrypt",error);
        
    }
});

userSchema.methods.comparePassword = async function (password) {
    // console.log("i am this from model",this.password);
    return  bcrypt.compare(password, this.password);
}


// josn web token
userSchema.methods.generateToken = async function () {
    // npm i jsonwebtoken
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn:"30d",
        }
        
    );
    } catch (error) {
        console.log("user-schema",error);

        
    }
};



const User = new mongoose.model("User",userSchema);
module.exports = User;

