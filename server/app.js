const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const expressValidator = require('express-validator');
const routes = require('./routes/index');
require('./handlers/passport.js');

// Create our Express app
const app = express();

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Exposes a bunch of methods for validating data
app.use(expressValidator());

// populates req.cookies with any cookies that came along with the request
app.use(cookieParser());

// After allllll that above middleware, we finally handle our own routes!
app.use('/', routes);

//Handle errors
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error : err });
});

// done! we export it so we can start the site in start.js
module.exports = app;
