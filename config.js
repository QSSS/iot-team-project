var path = require('path');
var rootPath = path.normalize(__dirname);

module.exports = {
  root: rootPath,
  port: process.env.PORT || 5001,
  firebase_config :{
    apiKey: "AIzaSyCAYpc1ssJ06QMxKRcmZo-5Ow71UxO-bgE",
    authDomain: "miot-team4.firebaseapp.com",
    databaseURL: "https://miot-team4.firebaseio.com",
    projectId: "miot-team4",
    storageBucket: "miot-team4.appspot.com",
    messagingSenderId: "573387262618"
  }
};
