const router = require('express').Router();
const { createNote, validateNote } = require('../../lib/notes');
const { notes } = require('../../db/db');

router.get('/notes', (req, res) => {
    let result = notes;
    res.json(result);

});

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