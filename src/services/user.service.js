const UserRepository = require ('../repositories/users.repository')


module.exports =  class UserService {

    constructor() {}

    getAccounts(user) {
        var userRepository = new UserRepository();
        const accounts = userRepository.getAccounts(user);
        return accounts
    }
}