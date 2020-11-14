const path = require("path");
const router = require("express").Router();
const api = require("./api/user.js");
const userController = require("../controllers/userController.js");
// const patientController = require("../controllers/patientController.js");
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

// API Routes
router.route("/api/signup").post(userController.create);
router.route("/api/login").post(userController.find);
// router.route("/api/patients").get(patientController.findAll);




module.exports = router;


