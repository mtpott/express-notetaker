const express = require('express');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
//const htmlRoutes = require('./routes/htmlRoutes');
const notes = require('./db/db.json');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//app.use('/api', apiRoutes);
//app.use('/', htmlRoutes);

app.listen(3001, () => {
    console.log(`api server now on port 3001 :)`);
});