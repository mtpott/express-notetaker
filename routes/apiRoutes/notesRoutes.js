const router = require('express').Router();
const { createNote, validateNote, findById } = require('../../lib/notes');
const { notes } = require('../../db/db');

//get request--result shows the full notes array, which then appears as text on the client's side.
router.get('/notes', (req, res) => {
    let result = notes;
    res.json(result);
});

//post request--req.body is the initial data that we want to add to the notes array. please see notes.js for information on createNote and validateNote functionality 
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    if(!validateNote(req.body)) {
        res.status(400).send('this note is not properly formatted.');
    } else {
        const newNote = createNote(req.body, notes);
        res.json(req.body);
    }
});

//delete request--when the user clicks the trash can icon, the note should successfully delete and disappear from the list on the left of the screen. the delete request uses the findById function in order to find the correct note. if it can't find the note with the corresponding id, it will send a 404 error. 
router.delete ('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (!result) {
        res.status(404);
    } else {
        console.log(req.params.id);
        res.json(req.params.id);
    }
});

module.exports = router;