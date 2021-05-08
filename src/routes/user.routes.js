const express = require('express');
const router = express.Router();
const UserService = require('../services/user.service');
const User = require('../model/user.model')

router.get('/users/:userId/accounts', async (req, res) => {
    try {
        console.log("User accounts are queried:", req.params.userId)
        const userService = new UserService();
        const accounts = await userService.getAccounts(req.params.userId);
        res.status(200).send(accounts);
    } catch (error) {
        console.log("Error->", error);
        const statusError = error.status || 500;    
        res.status(statusError).send(error)
    }
});

module.exports = router;