const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const registerSchema = new mongoose.Schema({
    username: { type: String, required: true },
    mailId: { type: String, required: true },
    password: { type: String, required: true },
    confirmpassword: { type: String, required: true }



})
const RegisterModel = mongoose.model('Register', registerSchema)
module.exports = RegisterModel
