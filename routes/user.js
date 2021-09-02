const express = require('express')
const getList = require('../controller/user')
const router = express.Router()

router.get('/', getList)

module.exports = router
