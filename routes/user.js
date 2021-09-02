const express = require('express')
const router = express.Router()
const userController = require('../controller/user')

// console.log(userController.getList)
router.get('/', userController.getList)
// router.get('/current', userController.getCurrentUser)
router.put('/edit', userController.editCurrentUser)
router.delete('/delete', userController.deleteCurrentUser)

module.exports = router;
