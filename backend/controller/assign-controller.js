const AssignModel = require('../models/assign-model.js')

async function getAssign(req, res) {
    try {
        const id = req.params.id;
        const fetchAssign = await AssignModel.find(id);
        res.json(fetchAssign);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
}

async function createAssign(req, res) {
    const dataToCreate = req.body
    try {
        const newAssign = new AssignModel(dataToCreate);
        await newAssign.save();
        res.status(201).json(newAssign);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
}

async function deleteAssign(req, res) {
    try {
        const id = req.params.id;
        await AssignModel.findByIdAndDelete(id);
        res.status(204).end();
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
}

module.exports = { createAssign, getAssign, deleteAssign }
