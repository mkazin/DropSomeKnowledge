const express = require('express')
const router = express.Router()
const dropsController = require('../controllers/drops')

router.get('/', dropsController.getDrops)

router.post('/createDrop', dropsController.createDrop)

router.delete('/deleteDrop', dropsController.deleteDrop)

module.exports = router