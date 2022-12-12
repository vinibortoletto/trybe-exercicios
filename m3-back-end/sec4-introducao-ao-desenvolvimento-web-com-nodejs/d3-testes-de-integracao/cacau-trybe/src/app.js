const express = require('express');
const cacauTrybe = require('./cacauTrybe');

const app = express();
app.use(express.json());

app.get('/chocolates/total', async (req, res) => {
  const chocolateList = await cacauTrybe.getAllChocolates();
  return res.status(200).json({ totalChocolates: chocolateList.length });
});

app.get('/chocolates/search', async (req, res) => {
  const { name } = req.query;
  const chocolates = await cacauTrybe.getAllChocolates();
  const filteredChocolateList = chocolates.filter((chocolate) =>
    chocolate.name.includes(name)
  );

  if (filteredChocolateList.length === 0) {
    return res.status(404).json(filteredChocolateList);
  }

  return res.status(200).json(filteredChocolateList);
});

app.get('/chocolates', async (req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  res.status(200).json({ chocolates });
});

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const chocolate = await cacauTrybe.getChocolateById(Number(id));

  if (!chocolate) {
    return res.status(404).json({ message: 'Chocolate not found' });
  }

  return res.status(200).json({ chocolate });
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;
  const chocolates = await cacauTrybe.getChocolateByBrand(Number(brandId));

  if (chocolates.length === 0) {
    return res.status(404).json({ message: 'Brand not found' });
  }

  return res.status(200).json({ chocolates });
});

app.put('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const { name, brandId } = req.body;
  const chocolate = await cacauTrybe.getChocolateById(Number(id));
  const errorMessage = {
    message: 'chocolate not found',
  };

  if (!chocolate) {
    return res.status(404).json(errorMessage);
  }

  chocolate.name = name;
  chocolate.brandId = brandId;

  return res.status(200).json({ chocolate });
});

module.exports = { app };
