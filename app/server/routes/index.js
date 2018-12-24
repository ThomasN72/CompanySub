const express = require("express")
const router = express.Router()

router.get("/users", (req, res)=> {
    console.log("..........Gettinggggg.........")
    res.send({"users": ["christina", "tommy"]})
})


router.post("/users/create", (req, res)=> {
    console.log("Creating user... ", req.body)
    res.json({"user": req.body})
})

module.exports = router;