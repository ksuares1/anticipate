const router = require("express").Router();
const userController = require("../controllers/userController.js");

// Matches with "/api/books"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/books/:id"
router
  .route("/:username")
  .get(userController.username)
  .put(userController.update)
  .delete(booksController.remove);

module.exports = router;