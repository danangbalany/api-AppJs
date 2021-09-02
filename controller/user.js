const User = require('../src/models')
const asyncHandler = require('../middleware/asyncHandler')
const ErrorResponse = require('../src/util/errorResponse')

exports.getList = asyncHandler(async (req, res, next) => {
  const user = await User.get();
  if (!user) {
    return next(new ErrorResponse('Users not found', 404))
  }
  const list = user.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.send(list);
});