const firebase = require("firebase");
const firebaseConfig = require('../util/firebaseConfig')

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
user = db.collection("Users");

module.exports = user