var express = require('express');
var app = express();
var path = require('path')
var bodyParser = require('body-parser')

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname + '/client/build/index.html'));
// });


app.use(express.static('client/build'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(require('./controllers'))

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('app listening at http://%s:%s', host, port);
});
