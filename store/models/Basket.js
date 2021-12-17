const mongoose = require('mongoose')
const Schema = mongoose.Schema

const nestedSchema = new Schema({
    id: Number,
    name: String,
    cost: String,
    art: String,
    desc: String,
    count: Number
})

const basketSchema = new Schema({
    userid: {
        type: String,
    },
    basket: [nestedSchema]
})

module.exports = mongoose.model('baskets', basketSchema)