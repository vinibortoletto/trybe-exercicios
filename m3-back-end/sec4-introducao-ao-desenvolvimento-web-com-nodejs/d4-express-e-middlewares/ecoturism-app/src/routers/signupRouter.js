const { Router } = require('express');
const generateToken = require('../utils/generateToken');
const router = Router();

router.post('/', async function (req, res) {
  const { email, password, firstName, phone } = req.body;
  const errorMessage = { message: 'Campos ausentes!' };
  const randomToken = generateToken();

  if (!email || !password || !firstName || !phone) {
    return res.status(401).json(errorMessage);
  }

  return res.status(200).json({ token: randomToken });
});

module.exports = router;
