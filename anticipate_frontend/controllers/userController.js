const db = require("../models")
const passport = require("passport");
passport.authenticate('local'),

    module.exports = {
        create: function (req, res, done) {
            console.log("server signup");
            db.User
                .create(req.body)
                .then(dbModel =>
                    res.json(dbModel)
                )
                .catch(err => res.status(422).json(err));
        },
        find: function (req, res) {
            db.User
                .find(req.body.password)
                .then(dbModel => {
                    if (!dbModel) {
                        return done(null, false, { message: 'Incorrect username' })
                    }
                    if (!dbModel.checkPassword(password)) {
                        return done(null, false, { message: 'Incorrect password' })

                    }
                    if (dbModel.length !== 0) {
                        return done(null, dbModel);
                        // res.send("Login successful!")
                    } else {
                        res.send("Login error!");
                    }
                })
                .catch(err => res.status(422).json(err));
        }
    }
