var express = require('express')
  app = express(),
  config = require('./config'),
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

//Recieve image data in JSON Format
app.post('/imageData', function(req, res) {
  if (!req.body) return res.sendStatus(400);

});

app.post('/mobile/imageData', function(req, res) {

})

app.listen(config.port);

console.log('Server Up on: ' + config.port);
