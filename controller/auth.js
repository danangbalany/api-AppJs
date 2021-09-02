const User = require('../src/models/user')
const asyncHandler = require('../middleware/asyncHandler')

exports.register = asyncHandler(async(req, res, next) => {
  const data = req.body;
  await User.add({ data });
  res.send({ msg: "Register Success" });
})