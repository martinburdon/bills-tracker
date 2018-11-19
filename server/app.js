const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const routes = require('./routes/index');

// Create our Express app
const app = express();

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Exposes a bunch of methods for validating data
app.use(expressValidator());

// After allllll that above middleware, we finally handle our own routes!
app.use('/', routes);

// done! we export it so we can start the site in start.js
module.exports = app;
