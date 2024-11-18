const express = require('express');
const { createNotes, updateNotes, deleteNotes, readNotes } = require('../controller/notes-controller')
const Router = express.Router();

Router.post('/create', createNotes);
Router.post('/update', updateNotes);
Router.post('/delete', deleteNotes);
Router.get('/read', readNotes)
module.exports = Router;
