const db = require("../models");

module.exports = {
    index: (req, res) => {
        res.send("NOT IMPLEMENTED");
    },

    createUser: (req, res) => {
        db.User.create({
            email: req.body.email,
            firstName: req.body.firstName, 
            lastName: req.body.lastName, 
            phoneNumber: req.body.phoneNumber, 
            password: req.body.password
        })
        .then(function(dbUser){
            console.log("New User,,", dbUser.email);
            res.json(dbUser);
        })
    }
}