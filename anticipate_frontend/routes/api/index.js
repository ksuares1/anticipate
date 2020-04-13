const router = require("express").Router();
const patientRoutes = require("./patients");

router.use("/patients", patientRoutes);

module.exports = router;
