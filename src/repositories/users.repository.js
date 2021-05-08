const accounts = require('../db/accounts');
const Users = require('../model/user.model')
const Accounts = require('../model/account.model');

module.exports = class UserRepository {

    constructor() {}

    async exist(user) {
        const {username, password} = user;
        return await Users.findOne({username, password}, { _id: 0 }).exec();
    }
    async sigUp(user) {
        try {
            await Users.create(user);
        } catch (error) {
            console.log("--->>>", error)
        }
    }

    async getAccounts(username) {
        try {
            let accounts =  await Accounts.find({username}, { _id: 0 }).exec();
            console.log(`${username} accounts: ${accounts}`)
            return {accounts};
        } catch (e) {
            console.log(e);
            return {message: e.message};
        }
    }

    getAccountByUserAndId(username,accountId) {
        const account = accounts.find(account => account.username=== username)
        return account.accounts.find(account => {account.id === accountId})
    }
    
}