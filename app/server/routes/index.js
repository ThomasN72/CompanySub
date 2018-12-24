const express = require("express")
const router = express.Router()
const connection = require("../sqlConnection")

router.get("/users/get/:id", (req, res)=> {
    console.log("..........Gettinggggg.........")
    res.send({"users": ["christina", "tommy"]})
})

router.post("/users/create", (req, res)=> {
    // console.log('req', req);
    console.log("Creating user... ", req.body)
    let user = req.body;
     connection.query(
         "INSERT INTO userdata (UserName, Password, Email) VALUES (?, ?, ?)",
         [user.name, user.password, user.email],
         function (err, res) {
             if (err) throw err;
         }
     );
})

module.exports = router;