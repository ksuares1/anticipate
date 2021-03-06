const db = require("../models")
const passport = require("passport");
passport.authenticate('local');


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


    find: function (req, res, next) {
        const { username, password } = req.body
        console.log("username, password", username, password);
        // ADD VALIDATION
        // db.User.find(req.body, (err, user) => {
        //     if (err) {
        //         console.log('User.js post error: ', err)
        //     } else if (user) {
        //         res.json({
        //             error: `Sorry, already a user with the username: ${username}`
        //         })
        //     }
        //     else {
        //         const newUser = new User({
        //             username: username,
        //             password: password
        //         })
        //         newUser.save((err, savedUser) => {
        //             if (err) return res.json(err)
        //             res.json(savedUser)
        //         })
        //     }
        // })
        passport.authenticate('local'),
            console.log("req.body", req.body)
        db.User
            .find(req.body)
            .then(dbModel => {
                console.log("dbModel", dbModel);
                if (dbModel === 0) {
                    return res.send("user not found");
                }

                if (dbModel.length !== 0) {
                    // if (!dbModel.checkUsername(username)) {
                    //     return done(null, false, { message: 'Incorrect username' })
                    // }
                    
                    if (!dbModel.checkPassword(password)) {
                        return done(null, false, { message: 'Incorrect password' })
                    }
                    // return done(null, dbModel);
                    // res.send("Login successful!")
                }

                // console.log("dbModel", dbModel);


            })
            .catch(err => {
                console.log("error", err);
                res.status(422).json(err)
            });
    }
}
