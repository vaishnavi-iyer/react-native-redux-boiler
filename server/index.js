const express = require('express');
const path = require('path');

const home = require('./routes/home');
const drinks = require('./routes/drinks');

const app = express();
const port = process.env.port || 8080;

console.log('listening on port' + port);
app.listen(port);

app.use('/', home);
app.use('/drinks', drinks);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;