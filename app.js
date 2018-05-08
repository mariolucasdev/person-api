const express = require('express');
const app = express();
const router = express.Router();

//Routes
const index = require('./src/routes/index');
const personRoute = require('./src/routes/personRoute');

app.use('/', index);
app.use('/persons', personRoute);

module.exports = app;
