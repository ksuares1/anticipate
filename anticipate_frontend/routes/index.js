const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const userController = require("../controllers/userController.js");

// API Routes
router.route("/api/signup").post(userController.create);


module.exports = router;