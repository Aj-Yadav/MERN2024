const express = require("express");
const router = express.Router();

//?         we have advantages of using this method 
router.route("/").get((req,res) => {
    res
    .status(200)
    .send("hello i am in Router Home")
})

router.route("/register").get((req, res) => {
    res
    .status(200)
    .send("hello i am in router register")
})



    
module.exports = router;