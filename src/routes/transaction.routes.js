const express = require('express');
const router = express.Router();
const TransactionService = require('../services/transaction.service');
const User = require('../model/user.model')

router.post('/transactions', (req, res) => {
    try {
        const transaction = req.body;
        console.log("A transaction is processed:", transaction)
        const transactionService = new TransactionService();
        transactionService.saveTransaction(transaction);
        console.log("Transaccion registrada con exito:");
        res.status(201).send();
    } catch (error) {
        console.log("Error->", error);
        const statusError = error.status || 500;
        res.status(error.status).send(error)
    }
});

module.exports = router;