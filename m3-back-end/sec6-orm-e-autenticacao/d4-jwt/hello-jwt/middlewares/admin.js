/* eslint-disable max-lines-per-function */
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
    
    if (!payload.admin) {
      console.log(jwt.verify(token, JWT_SECRET));
      const error = new Error('Restricted access');
      error.statusCode = 401;
      return next(error);
    }
    
    req.user = payload;
    req.secretInfo = 'Peter Parker é o Homem-Arannha';
    return next();
  } catch (error) {
    error.statusCode = 401;
    return next(error);
  }
};