const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin-controllers");
const authMiddleware = require("../middleware/auth-Middleware");
const adminMiddleware = require("../middleware/admin-middleware");

router.route('/users').get(authMiddleware,adminMiddleware,adminController.getAllUsers)

router.route('/contacts').get(authMiddleware,adminMiddleware,adminController.getAllContacts)

module.exports = router;





