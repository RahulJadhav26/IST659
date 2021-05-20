const express = require("express")
const router = express.Router()
const buyer = require("../controller/buyer.controller")


// Create a new buyer

router.post("/", buyer.create)

router.get("/:book", buyer.findOne)
router.get("/", buyer.findOne)
router.get('/buyerid',buyer.findBuyerById)


module.exports = router