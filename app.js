const express = require('express');
const app = express();
const router = express.Router();

//Routes
const index = require('./routes/index');
const personRoute = require('./routers/personRoute');

app.use('/', index);
app.use('/persons', personRoute);
