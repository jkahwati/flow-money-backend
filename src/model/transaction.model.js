const mongoose = require('mongoose');

const transactions = new mongoose.Schema({
    amount: {type: Number, required: true,unique: false},
    description: {type: String, required: true,unique: false},
    type: {type: String, required: true,unique: false},
    accountId: {type: String, required: true,unique: false},
    date: {type: String, required: true,unique: false},
    status: {type: String, required: true,unique: false},
}, {timestamps: { createdAt: 'created_at' } });


module.exports = mongoose.model('transactions', transactions, 'transactions');