const express = require('express')
const controller = require('../controllers/cardDetail')
const router = express.Router()

router.get('/get_one:id', controller.getOne)
router.post('/post_mock', controller.postMock)

module.exports = router