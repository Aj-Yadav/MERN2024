const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin-controllers");
const authMiddleware = require("../middleware/auth-Middleware");
const adminMiddleware = require("../middleware/admin-middleware");

router.route('/users').get(authMiddleware,adminMiddleware,adminController.getAllUsers)
router.route('/users/:id').get(authMiddleware,adminMiddleware,adminController.getUsersById)//we are using this to call user info in other page
router.route('/users/update/:id').patch(authMiddleware,adminMiddleware,adminController.updateUsersById)// we are using this to update the user data
router.route('/users/delete/:id').delete(authMiddleware,adminMiddleware,adminController.deleteUserById)


router.route('/contacts').get(authMiddleware,adminMiddleware,adminController.getAllContacts)
router.route("/contacts/delete/:id").delete(authMiddleware,adminMiddleware,adminController.deleteUserById);
module.exports = router;





