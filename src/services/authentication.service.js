const UserRepository = require ('../repositories/users.repository')


module.exports =  class LoginService {

    constructor() {}

    authenticate(user) {
        const userRepository = new UserRepository();
        if (userRepository.exist(user)) {
            return {success: true, message: "User successfully logged in"};
        } else {
            return{success: false, message: "User not found"}
        }
    }

    async signUp(user) {
        const userRepository = new UserRepository();
        if (await userRepository.exist(user)) {
            return {success: false, message: "User already exist"};
        } else {
            await userRepository.sigUp(user);
            return {success: true, message: "User successfully registered"};
        }
    }
}