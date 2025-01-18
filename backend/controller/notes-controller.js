const Notes = require("../models/notes-model")

async function createNotes(req, res) {
    const dataToInsert = req.body
    //code logic to create notes in db
    const result = await Notes.create(dataToInsert);
    res.json(result);
}

async function updateNotes(req, res) {
    //code logic to update notes in db
    const dataToUpdate = req.body;
    const result = await Notes.updateOne({ notes_id: dataToUpdate.notes_id }, dataToUpdate)
    res.json(result)
}

async function deleteNotes(req, res) {
    //code logic to delete notes in db
    const dataToDelete = req.body;
    const result = await Notes.deleteOne({ notes_id: dataToDelete.notes_id })
    res.json('Notes Deleted Succesfully')
}

async function readNotes(req, res) {
    //code logic to read notes in db
    const result = await Notes.find({ user_id: req.query.user_id })
    res.json(result);
}

module.exports = { createNotes, updateNotes, deleteNotes, readNotes }