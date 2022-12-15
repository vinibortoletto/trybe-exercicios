const express = require('express');
const middleware = require('./middleware');
require('express-async-errors');

const app = express();
app.use(express.json());

app.post(
  '/activities',
  middleware.validateName,
  middleware.validatePrice,
  middleware.validateDescription,
  middleware.validateCreatedAt,
  async function (_req, res) {
    const successMessage = { message: 'Atividade cadastrada com sucesso!' };
    return res.status(201).json(successMessage);
  }
);

module.exports = { app };
