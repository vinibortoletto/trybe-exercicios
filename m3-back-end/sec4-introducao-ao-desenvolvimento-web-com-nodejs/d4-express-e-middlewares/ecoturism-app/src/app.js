const express = require('express');
const middlewares = require('./middlewares');
require('express-async-errors');

const app = express();
app.use(express.json());

app.post('/activities', middlewares.validadeName, async function (_req, res) {
  const successMessage = { message: 'Atividade cadastrada com sucesso!' };
  return res.status(201).json(successMessage);
});

module.exports = { app };
