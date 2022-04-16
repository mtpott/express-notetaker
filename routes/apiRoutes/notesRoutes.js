const router = require('express').Router();
const { createNote, validateNote } = require('../../lib/notes');
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

module.exports = router;