const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    const error = new Error('Token not found');
    error.statusCode = 401;
    return next(error);
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    return next();
  } catch (error) {
    error.statusCode = 401;
    return next(error);
  }
};