const path = require("path");
const router = require("express").Router();
const api = require("./api/user.js");
const userController = require("../controllers/userController.js");

// API Routes
router.route("/api/signup").post(userController.create);


module.exports = router;