var express = require('express');
//var request = require('request');
var path = require('path'); // node stanard library
var app = express();
var engine = require('ejs-mate');
var bodyParser  = require("body-parser");

var name;

var compliments = [
"Your instructors love you",
"High five = ^5",
"Is it Ruby Tuesday yet?",
"It's almost beer o'clock",
"The Force is strong with you"
];

colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];


function logger(req, res, next) {
  // console.log('%s request %s from %s', req.method, req.path, req.ip);
  console.log(`${req.method} request ${req.path} from ${req.ip}`)
  next();
}


function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// where are the templates?
app.set('views', path.join(__dirname, 'views'))
// what kind of templates?
app.engine('ejs', engine);
app.set('view engine', 'ejs');

// | request
// |
// |
// use a middleware - middlewares are just functions
// static asset
app.use( express.static( path.join(__dirname, 'public') ) )
// |
// |
// |
// \/
app.use(logger);
// |
// |
// \/


app.get('/:id', function(req, res) {

  name  = req.params.id;
  res.render('home', {
    compliment: compliments[getRandom(0, compliments.length)],
    bgColor: colors[getRandom(0, colors.length)],
    userName: name
  });

});

app.get('/', function(req, res) {

  name = '';
  res.render('home', {
    compliment: compliments[getRandom(0, compliments.length)],
    bgColor: colors[getRandom(0, colors.length)],
    userName: name
  });

});

app.post('/', function(req, res) {

  var newComp = req.body.input;
  compliments.push(newComp);

  console.log(newComp);
  debugger;

  res.render('home', {
    compliment: compliments[getRandom(0, compliments.length)],
    bgColor: colors[getRandom(0, colors.length)],
    userName: ''
  });

});

module.exports = app;
