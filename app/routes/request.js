const express = require("express")
const router = express.Router()
const request = require("../controller/request.controller")

router.post("/",request.create)

router.get("/sellerRequests", request.findBySellerId)

module.exports = router