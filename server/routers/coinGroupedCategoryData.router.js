const Router = require('express')
const router = new Router()
const coinGroupCategoryController = require('../controllers/coinGroupedCategoryData.controller')

router.post('/create', coinGroupCategoryController.create)
router.get('/find', coinGroupCategoryController.findAll)


module.exports = router