var express = require('express');
var router = express.Router();

const user = require("../controller/userController");
const superAdmin = require("../middleware/superAdmin");
const auth = require("../middleware/auth");

router.post("/register", user.registerMember);
router.post("/registeradmin",superAdmin ,user.registerAdmin);
router.post("/login", user.login);
router.get("/alluser", user.getAllUser);
router.get("/currentuser",auth, user.currentUser);
module.exports = router;
