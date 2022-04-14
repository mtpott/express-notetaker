const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
//const htmlRoutes = require('./routes/htmlRoutes');
const notes = require('./db/db.json');
//const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//app.use('/api', apiRoutes);
//app.use('/', htmlRoutes);

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

app.get('/api/notes', (req, res) => {
    let result = notes;
    
    if(req.query) {
        result = filterByQuery(req.query, result);
    }
    res.json(result);
});

app.listen(3001, () => {
    console.log(`api server now on port 3001 :)`);
});