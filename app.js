const express = require('express');
const app = express();
const router = express.Router();

//Routes
const index = require('./src/routes/index');
const personRoute = require('./src/routes/personRoute');
const booksRoute = require('./src/routes/booksRoute');

app.use('/', index);
app.use('/persons', personRoute);
app.use('/books', booksRoute);

module.exports = app;
