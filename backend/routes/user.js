const express = require('express')
const userContorller = require('../controllers/userController')

const router = express.Router();

router.post("/register", userContorller.register)
router.post("/login", userContorller.login)

module.exports = router;