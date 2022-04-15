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

function findByTitle(title, notes) {
    const result = notes.filter(note => note.title === title);
    return result;
}

function addNote(body, notes) {
    const note = body;
    notes.push(note);

    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify({ note: notes }, null, 2)
    );

    return notes;

}

module.exports = { filterByQuery, addNote, findByTitle };