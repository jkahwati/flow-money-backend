const UserRepository = require ('../repositories/users.repository')


module.exports =  class LoginService {

    constructor() {
        
    }

    authenticate(user) {
        var userRepository = new UserRepository();
        if (userRepository.exist(user)) {
            return {success: true, message: "User successfully logged in"};
        } else {
            return{success: false, message: "User not found"}
        }
    }

    signUp(user) {
        var userRepository = new UserRepository();
        if (userRepository.exist(user)) {
            return {success: false, message: "User already exist"};
        } else {
            userRepository.sigUp(user);
            return {success: true, message: "User successfully registered"};
        }
    }

}