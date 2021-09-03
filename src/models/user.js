const firebase = require("firebase")
const firebaseConfig = require('../util/firebaseConfig')

firebase.initializeApp(firebaseConfig);


const db = firebase.firestore()
const User = db.collection("Users")
module.exports = User