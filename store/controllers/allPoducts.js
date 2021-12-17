const allProducts = require('../models/AllProducts')
const errorHandler = require('../utils/errorHandler')

module.exports.getAll = async (req, res) => {
    try {
        const products = await allProducts.find({});
        res.status(200).json({products})
    } catch (e) {
        errorHandler(e)
    }
}

module.exports.createFromMock = async (req, res) => {
    try {
        const products = new allProducts({
            id: req.body.id,
            name: req.body.name,
            img: req.body.img,
            cost: req.body.cost,
            art: req.body.art,
            desc: req.body.desc
        })
        await products.save()
        res.status(200).json({
            message: 'done'
        })
    } catch (e) {
        errorHandler(res, e)
    }
}