const express = require("express");
const router = express.Router();
const getAllUsers = require("../controllers/admin-controllers");

router.route('/users').get(getAllUsers)

module.exports = router;