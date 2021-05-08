const { v4: uuidv4 } = require('uuid');
const Transaction = require('../model/transaction.model')


module.exports = class UserRepository {

    constructor() {}

    async saveTransaction(transaction) {
        try {
            const transactionObj = new Transaction(transaction)
            const response = await transactionObj.save();
            console.log("response->", response)
        } catch (error) {
            console.log("Error->", error);
        }
    }
}