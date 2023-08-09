const Filter = require('../models/filter.model')
const ApiError = require(`../errors/api.error`)

class filterService{
    async create(data){
        try{
            const candidate = await Filter.findOne({name:data.name})
            if(candidate){
                throw ApiError.preconditionFailed()
            }
            return await Filter.create(data)
        }catch (e) {
            console.log("error: ", e)
        }
    }

    async findAll(){
        return await Filter.find()
    }

    async delete(name){
        return await Filter.findOneAndDelete({name})
    }



}

module.exports = new filterService()
