var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var SportLeague = require('./routes/Sport-League')
var NBAteams = require('./routes/NBA-teams')
var NBAplayerbackboard = require('./routes/NBA-player-backboard')
var NNBAplayerassists = require('./routes/NBA-player-assists')
var NBAplayerblocks = require('./routes/NBA-player-blocks')
var NNBAplayerfouls = require('./routes/NBA-player-fouls')
var NBAplayersteals = require('./routes/NBA-player-steals')
var NBAplayerturnovers = require('./routes/NBA-player-turnovers')
var NBAplayerscore = require('./routes/NBA-player-score')
var SportHomeNews = require('./routes/Sport-Home-News')
var NBASy = require('./routes/NBA-index');
var NBASc = require('./routes/NBA-sc');
var NBAXblm = require('./routes/NBA-xb');
var NBADblm = require('./routes/NBA-db')
var Login = require('./routes/login')
var ZC = require('./routes/zc')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use((req, res, next) => {
  // 允许所有请求跨域，所有请求的响应头部分都带上cors
  res.append('Access-Control-Allow-Origin', '*')
  next()
})
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/SportLeague', SportLeague);
app.use('/NBAteams', NBAteams);
app.use('/NBAplayerbackboard', NBAplayerbackboard);
app.use('/NBAplayerscore', NBAplayerscore);
app.use('/NBAplayerassists', NNBAplayerassists);
app.use('/NBAplayerblocks', NBAplayerblocks);
app.use('/NNBAplayerfouls', NNBAplayerfouls);
app.use('/NBAplayersteals', NBAplayersteals);
app.use('/NBAplayerturnovers', NBAplayerturnovers);
app.use('/SportHomeNews', SportHomeNews);
app.use('/NBASy', NBASy);
app.use('/NBASc', NBASc);
app.use('/NBAXblm', NBAXblm);
app.use('/NBADblm', NBADblm);
app.use('/Login', Login);
app.use('/ZC', ZC);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;