const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    nome: String,
    email: String,
    senha: String
});

module.exports = mongoose.model('User', userSchema);