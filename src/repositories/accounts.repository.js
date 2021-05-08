const Accounts = require('../model/account.model');

module.exports = class UserRepository {

    constructor() {}

    async findOne (filter) {
        try {
            return await Accounts.findOne(filter, { _id: 0 }).exec();
        } catch (error) {
            console.log("findOne-->>", error)
        }

    }

    async findOneAndUpdate (filter, update) {
        try {
            return await Accounts.findOneAndUpdate(filter, update).exec();
        } catch (error) {
            console.log("findOneAndUpdate-->>", error)
        }
    }
}