const router = require('express').Router();
//const { filterByQuery, createNote, validateNote } = require('../../lib/notes');
const { createNote, validateNote } = require('../../lib/notes');
const { notes } = require('../../db/db');

router.get('/notes', (req, res) => {
    let result = notes;
    console.log(result);
    
    res.json(result);

});

// router.get('/notes', (req, res) => {

//     res.json(req.body);
// })

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