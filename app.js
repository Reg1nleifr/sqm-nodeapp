var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('hello jnkins!');
});
app.get('/asdf', function (req, res) {
  res.send('asdf');
});
app.get('/yxcv', function (req, res) {
  res.send('yxcv');
});

app.listen(process.env.PORT || 5000);

module.exports = app;