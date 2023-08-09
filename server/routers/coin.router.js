const Router = require('express')
const router = new Router()
const coinController = require('../controllers/coin.controller')
const authMiddleware = require('../middlewares/authMidlleware');

router.post('/create', authMiddleware, coinController.create)
router.post('/search', coinController.search)
router.get('/coins', coinController.findAll)
router.delete('/delete', authMiddleware, coinController.delete)
router.post('/redact', authMiddleware, coinController.redact)

module.exports = router