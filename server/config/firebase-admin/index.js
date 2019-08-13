
var admin = require("firebase-admin");

var serviceAccount = require('./credentials.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://test-demo-777.firebaseio.com"
});
