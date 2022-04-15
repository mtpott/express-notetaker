const router = require('express').Router();
//const { filterByQuery, newNote, addNote } = require('../../lib/notes');
const { addNote } = require('../../lib/notes');
const notes = require('../../db/db.json');

router.get('/notes', (req, res) => {
    let result = notes;
    
    console.log('this get request worked');
    // if(req.query) {
    //     result = filterByQuery(req.query, result);
    // }
    res.json(result);
});

router.post('/notes', (req, res) => {
    req.body = notes.length;

    //req.body = notes;

    console.log('this post request worked');

    //console.log(notes);

    //const note = addNote(req.body, notes);

    res.json(req.body);
});

module.exports = router;