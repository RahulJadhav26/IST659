const express = require("express")
const router = express.Router()
const buyer = require("../controller/buyer.controller")


// Create a new buyer

router.post("/", buyer.create)

router.get("/:email", buyer.findOne)
router.get("/", buyer.findOne)


module.exports = router