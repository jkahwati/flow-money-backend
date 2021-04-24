const accounts = require('../db/accounts');
const users = require('../db/users')


module.exports = class UserRepository {

    constructor() {
    }

    exist(user) {
        return users.some(userDb => {
            return (userDb.username === user.username && userDb.password === user.password);
        })
    }
    sigUp(user) {
        users.push(user);
    }

    getAccounts(username) {
        return accounts.find(account => account.username=== username && account.status) || {username,accounts:[]}
    }
}