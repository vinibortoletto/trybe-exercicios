module.exports = (req, res, next) => {
  const { price } = req.body;
  const errorMessage = {
    message: 'O campo price é obrigatório',
  };

  if (price === undefined) {
    return res.status(400).json(errorMessage);
  }

  return next();
};
