const { Router } = require('express');
const middleware = require('../middleware');
const router = Router();

router.post(
  '/',
  middleware.validateName,
  middleware.validatePrice,
  middleware.validateDescription,
  middleware.validateCreatedAt,
  middleware.validateRating,
  middleware.validateDifficulty,
  async function (_req, res) {
    const successMessage = { message: 'Atividade cadastrada com sucesso!' };
    return res.status(201).json(successMessage);
  }
);

module.exports = router;
