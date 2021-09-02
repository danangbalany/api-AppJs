const express = require("express")
const cors = require("cors")

const app = express()
const router = express.Router()

app.use(express.json())
app.use(cors())

const userRoutes = require('./routes/user')
const authRoutes = require('./routes/auth')

router.use('/user', userRoutes)
router.use('/auth', authRoutes)

app.use('/api/v1', router)

// app.get("/", async (req, res) => {
//   const user = await User.get();
//   const list = user.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//   res.send(list);
// });

// app.post("/update", async (req, res) => {
//   const id = req.body.id;
//   delete req.body.id;
//   const data = req.body;
//   await User.doc(id).update(data);
//   res.send({ msg: "Updated" });
// });

// app.post("/delete", async (req, res) => {
//   const id = req.body.id;
//   await User.doc(id).delete();
//   res.send({ msg: "Deleted" });
// });

app.listen(8004, () => console.log("8004"));

module.exports = app