//  router -> auth-router.js

const express = require("express");
const router = express.Router();
// const {home, register} = require("../controllers/auth-controllers");
const authControllers = require("../controllers/auth-controllers");
const signupSchema = require("../validators/auth-validator");

const validate = require("../middleware/validate-middleware");
const authMiddleware = require("../middleware/auth-Middleware");


//?         we have advantages of using this method 
router.route("/").get(authControllers.home);
console.log("from router",validate(signupSchema));
router.route("/register")
        .post(validate(signupSchema),authControllers.register);
router.route("/login").post(authControllers.login);

router.route('/user').get(authMiddleware, authControllers.user);



    
module.exports = router;

