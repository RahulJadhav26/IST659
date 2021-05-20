const express = require("express")
const router = express.Router()
const book = require("../controller/book.controller")


// Register  a new Book 

router.post("/registerBook", book.create)

router.get("/listings", book.findList)
router.get("/",book.findAll)
router.get("/sellerBooks", book.findByBookId)

module.exports = router