const express = require("express")
const router = express.Router()

router.get("/users", (req, res)=> {
    res.end("WE MADE IT and Its great")
})

module.exports = router;