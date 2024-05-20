const express = require("express");
const router = express.Router();
// const {home, register} = require("../controllers/auth-controllers");
const authControllers = require("../controllers/auth-controllers");

//?         we have advantages of using this method 
router.route("/").get(authControllers.home);

router.route("/register").get(authControllers.register)



    
module.exports = router;