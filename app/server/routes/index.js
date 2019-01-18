const express = require("express")
const router = express.Router()
const controller = require("../controller/registerController");

router.post("/users/create", controller.createUser);

router.get("/users", controller.getUsers);

router.get("/user", controller.getUser);

// router.post("/login", passport)
// router.post("/users/create", (req, res)=> {
//     // console.log('req', req);
//     console.log("Creating user... ", req.body)
//     let user = req.body;
//      connection.query(
//          "INSERT INTO userdata (UserName, Password, Email) VALUES (?, ?, ?)",
//          [user.name, user.password, user.email],
//          function (err, res) {
//              if (err) throw err;
//          }
//      );
// })

module.exports = router;