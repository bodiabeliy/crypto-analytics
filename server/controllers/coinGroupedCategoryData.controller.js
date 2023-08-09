const ApiError = require('../errors/api.error')
const GroupCategoryModel = require("../models/coinGroupedCategoryList")

class projectVisibleFilterController {
    async findAll(req, res, next) {
        try {
            const groupedCategories = await GroupCategoryModel.find()

            return res.json(groupedCategories)
        } catch (e) {
            next()//e
        }
    }
    async create(req, res, next) {
        const {parentGroup, groupItems, groupItemsTooltip} = req.body
        const createdCoinGroupedCategoryObject = new GroupCategoryModel({
            parentGroup: parentGroup,
            groupItems: groupItems,
            groupItemsTooltip:groupItemsTooltip
        })
    
        try {
            const dataToSave = createdCoinGroupedCategoryObject.save();
            return res.json(dataToSave)
        }
        catch (error) {
            res.status(400).json({message: error.message})
            next()
        }
    }
    
}

module.exports = new projectVisibleFilterController()