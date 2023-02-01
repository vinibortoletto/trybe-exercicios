const Joi = require('joi');
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const validateBody = (body) =>
  Joi.object({
    username: Joi.string().min(5).alphanum().required()
.messages({
      'string.min': '"username" length must be 5 characters long',
      'string.required': '"username" is required',
    }),

    password: Joi.string().min(5).required().messages({
      'string.min': '"password" length must be 5 characters long',
      'string.required': '"password" is required',
    }),
  }).validate(body);

module.exports = async (req, res, next) => {
  const { username, password } = req.body;

  const { error } = validateBody(req.body);
  if (error) return next(error);

  if (username === 'admin' && password !== 's3nh4S3gur4???') {
    const adminError = new Error('Invalid username or password');
    adminError.statusCode = 401;
    return next(error);
  }

  const admin = username === 'admin' && password === 's3nh4S3gur4???';
  const payload = { username, admin };

  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '1h',
  });

  res.status(200).json({ token });
};
