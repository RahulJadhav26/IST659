const express = require("express")
const router  = express.Router()

const seller = require("../controller/seller.controller")


// Create a new seller

router.post("/",seller.create)

router.post("/login",seller.findOne)

module.exports = router