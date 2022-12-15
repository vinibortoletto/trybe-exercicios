const { Router } = require('express');
const router = Router();

router.post('/', async function (req, res) {
  const { email, password, firstName, phone } = req.body;
  const errorMessage = { message: 'Campos ausentes!' };

  if (!email || !password || !firstName || !phone) {
    return res.status(401).json(errorMessage);
  }
});

module.exports = router;
