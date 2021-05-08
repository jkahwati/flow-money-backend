const mongoose = require('mongoose');

const accounts = new mongoose.Schema({
    id: {type: String, required: true,unique: true},
    username: {type: String, required: true,unique: false},
    balance: {type: Number, required: true,unique: false},
    currency: {type: String, required: true,unique: false},
    status: {type: String, required: true,unique: false},
}, {timestamps: { createdAt: 'created_at' } });

// accounts.methods.processIncome = function() {
//     this.
    
// }

module.exports = mongoose.model('accounts', accounts, 'accounts');