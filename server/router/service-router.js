

const express = require("express");
const router = express.Router();
const Service = require("../controllers/service-controller")
// const contactForm = require("")

router.route("/service").get(Service);

module.exports = router;
