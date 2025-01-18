//Database design is completed

const mongoose = require("mongoose");
// const { Unique } = require('typeorm')
const Schema = mongoose.Schema;
const NotesSchema = new Schema({
    notes_title: { type: String, required: true },
    notes_content: { type: String },
    user_id: { type: String, required: true },
    course_id: { type: String, required: true },
    session_id: { type: String, required: true },
    notes_id: { type: String, required: true, unique: true },
});
const Notes = mongoose.model('Notes', NotesSchema)
module.exports = Notes
