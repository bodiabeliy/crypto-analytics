const ApiError = require('../errors/api.error')
const coinModel = require('../models/coin.model')
const calculatingService = require('../services/calculating.service')

class calculatingController {
    async getTop(req, res, next){
        try {
            const top = await calculatingService.getTop()

            return res.json(top)
        } catch (e) {
            next()//e
        }
    }

    async getForksCapitalization(req, res, next){
        try {

            const parentCoin = await coinModel.findOne({name:req.query.parentToken})
            const currentCoin = await coinModel.findOne({name:req.query.currentToken})
            const forksCapitalization = await calculatingService.getAllForksCapitalizationOfEcosystem(parentCoin, currentCoin.market_cap)

            return res.json(forksCapitalization)
        } catch (e) {
            next()//e
        }
    }

}

module.exports = new calculatingController()