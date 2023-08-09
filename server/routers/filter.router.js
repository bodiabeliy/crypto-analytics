const Router = require('express')
const router = new Router()
const filterController = require('../controllers/filter.controller')
const authMiddleware = require('../middlewares/authMidlleware');

router.post('/create', filterController.create)
router.get('/filters', filterController.findAll)
router.delete('/delete', authMiddleware, filterController.delete)

module.exports = router