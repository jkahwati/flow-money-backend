const express = require('express');
const router = express.Router();
const UserService = require('../services/user.service');
const User = require('../model/user.model')

router.get('/users/:userId/accounts', (req, res) => {
    try {
        console.log("Se consulta el usuario:", req.params.userId)
        const userService = new UserService();
        const accounts = userService.getAccounts(req.params.userId);
        console.log("Las cuentas del usuario son:", accounts);
        res.status(200).send(accounts);
    } catch (error) {
        console.log("Error->", error);
        const statusError = error.status || 500;
        res.status(error.status).send(error)
    }
});

module.exports = router;