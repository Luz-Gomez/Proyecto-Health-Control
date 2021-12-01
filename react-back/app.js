var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var database = require("./config/database");
var auth = require("./auth/main_auth");
var cors = require('cors');

var tomaPresionRouter = require('./routes/tomaPresion.router');
var perfilUsuarioRouter = require('./routes/perfilUsuario.router');
var usuariosRouter = require('./routes/usuarios.router');
var medicosRouter = require('./routes/medico.router');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// Coneccion con Mongodb
database.mongoConnect();

// Router
app.use('/usuarios', usuariosRouter);
app.use('/tomaPresion', tomaPresionRouter);
app.use('/perfilUsuario', perfilUsuarioRouter);
app.use('/medicos', medicosRouter);

app.use(auth);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
