const validateName = require('./validateName');
const validatePrice = require('./validatePrice');
const validateDescription = require('./validateDescription');
const validateCreatedAt = require('./validateCreatedAt');
const validateRating = require('./validateRating');
const validateDifficulty = require('./validateDifficulty');
const validateToken = require('./validateToken');

module.exports = {
  validateName,
  validatePrice,
  validateDescription,
  validateCreatedAt,
  validateRating,
  validateDifficulty,
  validateToken,
};
