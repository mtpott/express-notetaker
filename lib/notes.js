const fs = require('fs');
const path = require('path');

function filterByQuery(query, notes) {
    let filteredResults = notes;

    if (query.title) {
        filteredResults = filteredResults.filter(note => note.title === query.title);
    } 
    if (query.text) {
        filteredResults = filteredResults.filter(note => note.text === query.text);
    }

    return filteredResults;
}

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
        //console.log(typeof note[0].title);
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
}

module.exports = { filterByQuery, createNote, validateNote };

