module.exports = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: 'O campo name é obrigatório' });
  }

  return next();
};
