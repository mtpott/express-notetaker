//required consts 
const express = require('express');
const app = express();

//localhost port!
const PORT = process.env.PORT || 3001;

//our routes, so everything is accessible in across our code while still keeping the files modularized.
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//middleware--required to accept POST request data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

//more middleware :)
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`api server now on port ${PORT} :)`);
});