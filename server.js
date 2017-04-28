var express = require('express')
  app = express(),
  config = require('./config');

//Recieve image data in JSON Format
app.post('/imageData', function(req, res) {

});

app.listen(config.port);

console.log('Server Up on: ' + config.port);
