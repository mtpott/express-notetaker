const fs = require('fs');
const path = require('path');

function createNote (body, notesArray) {
    const note = body;
    notesArray.push(note);
    console.log("notesArray: ", notesArray);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );

    return note;
}

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

