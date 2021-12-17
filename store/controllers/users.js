const user = require('../models/User')
const errorHandler = require('../utils/errorHandler')

module.exports.getUsers = async (req, res) => {
    try {
        const users = await user.find({});
        res.status(200).json({users})
    } catch (e) {
        errorHandler(e)
    }
}