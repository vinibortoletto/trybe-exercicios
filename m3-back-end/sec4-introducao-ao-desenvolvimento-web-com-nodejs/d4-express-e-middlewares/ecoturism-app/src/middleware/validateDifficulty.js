module.exports = (req, res, next) => {
  const { difficulty } = req.body.description;

  const errorMessage = {
    message: "O campo difficulty deve ser 'Fácil', 'Médio' ou 'Difícil'",
  };

  const difficultyList = ['Fácil', 'Médio', 'Difícil'];

  if (!difficultyList.includes(difficulty)) {
    return res.status(400).json(errorMessage);
  }

  next();
};
