const express = require('express')
const passport = require('passport')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth')
const basketRoutes = require('./routes/basket')
const cardDetailRoutes = require('./routes/cardDetail')
const allProductsRoutes = require('./routes/allProducts')
const keys = require('./config/keys')
const app = express()

mongoose.connect(keys.mongoURI)
    .then(() => console.log('MongoDB connected.'))
    .catch(error => console.log(error))

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(require('morgan')('dev'))
app.use(require('cors')())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api/auth', authRoutes)
app.use('/api/basket', basketRoutes)
app.use('/api/card_detail', cardDetailRoutes)
app.use('/api/products', allProductsRoutes)

module.exports = app