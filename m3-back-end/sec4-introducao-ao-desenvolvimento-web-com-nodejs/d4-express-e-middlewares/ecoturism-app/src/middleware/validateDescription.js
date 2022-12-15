module.exports = (req, res, next) => {
  const { description } = req.body;

  const errorMessage = {
    message: 'O campo description é obrigatório',
  };

  if (!description) {
    return res.status(400).json(errorMessage);
  }

  if (!description.createdAt) {
    return res.status(400).json({
      message: `O campo createdAt é obrigatório`,
    });
  }

  return next();
};
