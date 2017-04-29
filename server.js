var firebase = require('firebase')
var express = require('express')
  app = express(),
  config = require('./config');

//Recieve image data in JSON Format
app.post('/imageData', function(req, res) {

});

app.listen(config.port);
firebase.initializeApp(config.firebase_config);
console.log(firebase.database())

console.log('Server Up on: ' + config.port);
