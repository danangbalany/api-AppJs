
const admin = require('firebase-admin');
const serviceAccount = require('../util/serviceAccounKey.json');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
  apiKey: "AIzaSyAN2v6laQW-AmCjpKnxVa6jt2X51HB9mWM",
  authDomain: "treblood-d2e36.firebaseapp.com",
  databaseURL: "https://treblood-d2e36.firebaseio.com",
  projectId: "treblood-d2e36",
  storageBucket: "treblood-d2e36.appspot.com",
  messagingSenderId: "340578848022",
  appId: "1:340578848022:web:6a3e568f37ffbd0a865437"
})

module.exports = admin
