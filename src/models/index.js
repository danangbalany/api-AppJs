const firebase = require("firebase");
const firebaseConfig = require('../util/firebaseConfig')
firebase.initializeApp(firebaseConfig);


const fs = require('fs')
const path = require('path')
const basename = path.basename(__filename)
const db = {}

fs.readdirSync(__dirname)
  .filter(file => {
    return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  })
  .forEach(file => {
    const model = path.join(__dirname, file)
    db[model.name] = model
  })

Object.keys(db).forEach(file => {
  console.log(file)
  if (db[file].associate) {
    db[file].associate(db)
  }
})



module.exports = db