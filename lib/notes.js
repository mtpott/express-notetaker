const fs = require('fs');
const path = require('path');

//createNote pushes the req.body to the notes Array, which in turn writes the data to the file, which appears as the next note in the list of notes to the left of the screen.
function createNote (body, notesArray) {
    const note = body;
    notesArray.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );

    return note;
}

//in the post request--if the inputted data does not match how it should look in the validateNote function (aka formatted witout title or text), then a 400 error is sent. if it is formatted correctly, then createNote is called. 
function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
}

module.exports = { createNote, validateNote };

