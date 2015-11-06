var express = require('express');
var users = require('./api/users');
var quizzes = require('./api/quizzes');

// Démarrage de server
var app = express();

// Chargement des routes de l'api
app.use('/users', users);
app.use('/quizzes', quizzes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;
