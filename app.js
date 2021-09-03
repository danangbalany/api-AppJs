const express = require("express")
const cors = require("cors")

const app = express()
const router = express.Router()
const PORT = process.env.PORT || 8004
app.use(express.json())
app.use(cors())

const userRoutes = require('./routes/user')
const authRoutes = require('./routes/auth')

router.use('/user', userRoutes)
router.use('/auth', authRoutes)

app.use('/api/v1', router)

// app.post("/delete", async (req, res) => {
//   const id = req.body.id;
//   await User.doc(id).delete();
//   res.send({ msg: "Deleted" });
// });

app.listen(PORT, () => console.log("8004"));

module.exports = app