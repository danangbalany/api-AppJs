const asyncHandler = require('../middleware/asyncHandler')
const admin = require('../src/models/admin')
const firebase = require("firebase")


firebase.default.auth().onAuthStateChanged(user => {
  if (user) {
    // console.log('user logged in: ', user);
  } else {
    // console.log('user logged out');
  }
})

exports.register = asyncHandler(async(req, res, next) => {
  const data = req.body
  admin.auth().createUser({
    firstname: data.firstname,
    lastname: data.lastname,
    email: data.email,
    password: data.password,
    disable: false
  })
    .then(cred => {
      // console.log('Successfully created new user:', cred);
    })
  res.send({ message: "Register Success" });
})

exports.login = asyncHandler(async(req, res, next) =>{
  const data = req.body
  firebase.default.auth().signInWithEmailAndPassword(data.email, data.password)
  .then(cred => {
    // console.log('Login Successfully:', cred);
  })
  res.send({ message: "Login Success" });
})

exports.clientLogout = asyncHandler(async (req, res, next) => {
  firebase.default.auth().signOut().then(() => {
    res.status(200).send({
      message: 'Successfully Signed Out'
    })
  })
})