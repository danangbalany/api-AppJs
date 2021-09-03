const User = require('../src/models/user')
const asyncHandler = require('../middleware/asyncHandler')
const firebase = require("firebase")
// const ErrorResponse = require('../src/util/errorResponse')

firebase.default.auth().onAuthStateChanged(user => {
  if (user) {
    // console.log('user logged in: ', user);
    console.log(user.uid);
  } else {
    // console.log('user logged out');
  }
})


exports.getList = asyncHandler(async(req, res, next) => {
  const user = await User.get()
  const list = user.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  res.send(list)
})
// console.log()

exports.getCurrentUser = asyncHandler(async (req, res, next) => {
  const user = await User.get()
  const currentUser = user.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  res.send(currentUser)
})

exports.editCurrentUser = asyncHandler(async (req, res, next) => {
  const id = req.body.id
  delete req.body.id
  const data = req.body
  await User.doc(id).update({data})
  res.send({ message: "Data Updated" })
})

exports.deleteCurrentUser = asyncHandler(async (req, res, next) => {
  const id = req.body.id
  await User.doc(id).delete()
  res.send({ msg: "Deleted" })
})