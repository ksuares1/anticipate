const router = require("express").Router();
const patientController = require("../../controllers/patientController");

router.route("/patients")
  .get(patientController.findAll)
  .post(patientController.create);

router
  .route("/patients/:id")
  .get(patientController.findById)
  .put(patientController.update)
  .delete(patientController.remove);

module.exports = router;