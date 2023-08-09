const db= require('../db/db')

const CustomTypeSchema = new db.Schema({
    groupName:{
        type:String
      },
      groupTooltipName:{
          type:String
      }
  });

const schema = new db.Schema({
    parentGroup:{
      type:String
    },
    groupItems:{
        type:[CustomTypeSchema]
    },
    groupItemsTooltip:{
        type:String
    } 
})

module.exports = db.model('CoinGroupedCategories', schema)