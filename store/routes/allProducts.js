const express = require('express')
const controller = require('../controllers/allPoducts')
const router = express.Router()

router.get('/', controller.getAll)
router.post('/createfrommock', controller.createFromMock)

module.exports = router