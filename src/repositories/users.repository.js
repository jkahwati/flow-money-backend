const users = require('../db/users')


module.exports = class UserRepository {

    constructor() {
    }

    exist(user) {
        return users.some(userDb => {
            return (userDb.username === user.username && userDb.password === user.password);
        })
    }





}