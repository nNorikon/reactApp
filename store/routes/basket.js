const express = require('express')
const controller = require('../controllers/basket')
const passport = require('passport')

const router = express.Router()

router.get('/', passport.authenticate('jwt', {session: false}), controller.getAllElementsOfBasket)
router.post('/', passport.authenticate('jwt', {session: false}), controller.createElementOfBasket)
router.patch('/:id', passport.authenticate('jwt', {session: false}), controller.updateElementOfBasket)
// router.delete('/:id', passport.authenticate('jwt', {session: false}), controller.deleteElementOfBasket)

module.exports = router