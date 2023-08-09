const ApiError = require('../errors/api.error')
const calculatingService = require('../services/calculating.service')
const coinService = require('../services/coin.service')

class coinController {
    async search(req, res, next){
        try {
            const {text} = req.body
            console.log(text)
            if (!text) {
                return next(ApiError.badRequest())
            }
            const coins = await coinService.search(text)
            return res.json({coins})
        } catch (e) {
            next()//e
        }
    }
    async create(req, res, next) {
        try {
            const {name, img, price, ath_price, ath_time, atl_price, atl_time, market_cap, total_supply,
                    c1,c2,c3,c4,c5,c6,c7,c8,c9,c10} = req.body
            if (name == undefined || img == undefined || ath_price == undefined || ath_time == undefined || atl_price == undefined || atl_time == undefined || market_cap == undefined || total_supply == undefined || price == undefined) {
                return next(ApiError.badRequest())
            }
            const coin = await coinService.create({name, img, price, ath_price, ath_time, atl_price, atl_time, market_cap, total_supply,
                c1,c2,c3,c4,c5,c6,c7,c8,c9,c10})

            return res.json(coin)
        } catch (e) {
            next()//e
        }
    }

    async findAll(req, res, next) {
        try {
            const coins = await coinService.findAll()

            return res.json(coins)
        } catch (e) {
            next()//e
        }
    }

    async delete(req, res, next) {
        try {
            const {name} = req.body
            if (!name) {
                return next(ApiError.badRequest())
            }
            const coin = await coinService.delete(name)

            return res.json(coin)
        } catch (e) {
            next()//e
        }
    }


    async redact(req, res, next) {
        try {            
            const coin = await coinService.redact(req.body)
            return res.json(coin)
        } catch (e) {
           console.log("error", e);
        }
    }

}

module.exports = new coinController()