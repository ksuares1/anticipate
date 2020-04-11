const db = require("../models");

module.exports = {
     create: function (req, res) {
        console.log("server signup");
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));

            db.User
            .find(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}