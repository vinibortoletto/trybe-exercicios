module.exports = (req, res, next) => {
  const { rating } = req.body.description;

  const errorMessage = {
    message: 'O campo rating deve ser um número inteiro entre 1 e 5',
  };

  if (typeof rating !== 'number' || rating < 1 || rating > 5) {
    return res.status(400).json(errorMessage);
  }

  next();
};
