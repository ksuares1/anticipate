const db = require("../models");

module.exports = {
    create: function (req, res) {
        console.log("server signup");
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    find: function (req, res) {
        db.User
            .find(req.body)
            .then(dbModel => {
                if (dbModel.length !== 0) {
                    res.send("Login successful!")
                } else {
                    res.send("Login error!");
                }
                console.log(dbModel.length);
                res.json(dbModel)
            })
            .catch(err => res.status(422).json(err));
}
}
