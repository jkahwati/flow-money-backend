const mongoose = require('mongoose');

const users = new mongoose.Schema({
    username: {type: String, required: true,unique: true},
    email: {type: String, required: true,unique: false},
    password: {type: String, required: true,unique: false},
    role: {type: String, required: true,unique: false},
}, {timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('users', users, 'users');