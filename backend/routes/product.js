const express = require('express')

const productController = require('../controllers/productController')


const router = express.Router();

router.get("/categories", productController.getCategories)
router.get("/lesson", productController.getLesson)
router.get("/price", productController.getPrice)
// router.post("/login", userContorller.login)

module.exports = router;