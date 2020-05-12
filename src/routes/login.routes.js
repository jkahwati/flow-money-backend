const express = require('express');
const router = express.Router();
const LoginService = require('../services/authentication.service');
const User = require('../model/user.model')


router.post('/login', (req,res) => {

    var loginService = new LoginService();
    var user =  new User(req.body);
    var response = loginService.authenticate(user);
    if (response.success) {
        res.status(200).send(response);
    } else {
        res.status(401).send(response);
    }
});

router.post('/sign-up', (req,res) => {

    var loginService = new LoginService();
    var user =  new User(req.body);
    var response = loginService.signUp(user);
    if (response.success) {
        res.status(200).send(response);
    } else {
        res.status(422).send(response);
    }
});

module.exports = router;