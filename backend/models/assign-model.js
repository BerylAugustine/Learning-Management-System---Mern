const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const assignSchema = new mongoose.Schema({
    Aname: { type: String, required: true },
    Question: { type: String, required: true },
    AssignmentID: { type: String, required: true },
    subDate: { type: Date, default: Date() },
    checkVal: [],

})
const AssignModel = mongoose.model('Assign', assignSchema)
module.exports = AssignModel
