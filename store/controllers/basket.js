const Baskets = require('../models/Basket')
const errorHandler = require('../utils/errorHandler')

module.exports.getAllElementsOfBasket = async (req, res) => {
    try {
        const usersBasket = await Baskets.findOne({userid: req.user.id})
        if (usersBasket) {
            res.status(200).json(usersBasket)
        } else {
            res.status(404).json({
                message: 'Корзина данного пользователя пустая'
            })
        }
    } catch (e) {
        errorHandler(res, e)
    }
}
//
// module.exports.deleteElementOfBasket = async (req, res) => {
//     try {
//         const usersBasket = await Baskets.findOne({userid: req.user.id})
//         if(usersBasket) {
//             // const deleted = await usersBasket.basket.pull({_id: req.params.id})
//             // if (deleted) {
//             //     res.status(200).json({
//             //         message: 'Элемент удален'
//             //     })
//             // } else {
//             //     res.status(409).json({
//             //         message: 'Непредвиденная ошибка удаления'
//             //     })
//             // }
//
//         } else {
//             res.status(404).json({
//                 message: 'Корзина данного пользователя пустая'
//             })
//         }
//     } catch (e) {
//         errorHandler(res, e)
//     }
// }

module.exports.createElementOfBasket = async (req, res) => {
    const basketItem = {
        id: req.body.id,
        name: req.body.name,
        cost: req.body.cost,
        art: req.body.art,
        desc: req.body.desc,
        count: req.body.count
    }
    const basket = new Baskets({
        userid: req.user.id,
        basket: [basketItem]
    })
    try {
        await basket.save()
        res.status(200).json({
            message: 'Корзина создана'
        })
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.updateElementOfBasket = async (req, res) => {
    try {
        const basket = await Baskets.findOneAndUpdate(
            {userid: req.user.id},
            {$set: {basket: req.body.basket}}
        )
        res.status(200).json(basket)

    } catch (e) {
        errorHandler(res, e)
    }
}
