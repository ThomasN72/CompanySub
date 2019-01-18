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
    },
    getUsers: (req, res) => {
        db.User.findAll({})
            .then(function(dbUsers){
                console.log("Got users");
                res.json(dbUsers)
            })
    },
    getUser: (req, res) => {
        console.log("GETTTING USER>>>>>>")
        const { query: params } = req;
        console.log(params.user);
        const user = JSON.parse(params.user);
        console.log(user);
        // console.log(req.params);
        // console.log(req.params.email);
        db.User.findOne({
            where: {
                email: user.email
            }
        })
            .then(function(dbUser){
                // if (dbUser.password != req.password){
                //     console.log("WRONG PASSWORD");
                //     res.send("WRONG PASSWORD")
                // } else {
                //     res.json(dbUser)
                // }
                console.log("USER: ", dbUser)
                res.json(dbUser)
            })
    }
}