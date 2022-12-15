const express = require('express');
require('express-async-errors');

const app = express();
app.use(express.json());

app.post('/activities', async function (req, res) {
  const successMessage = { message: 'Atividade cadastrada com sucesso!' };
  return res.status(201).json(successMessage);
});

module.exports = { app };
