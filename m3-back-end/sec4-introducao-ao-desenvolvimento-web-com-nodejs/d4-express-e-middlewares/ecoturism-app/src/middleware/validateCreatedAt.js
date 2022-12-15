module.exports = (req, res, next) => {
  const { createdAt } = req.body.description;

  const errorMessage = {
    message: "O campo createdAt deve ter o formato 'dd/mm/aaaa'",
  };

  const dateFormatRegex =
    /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

  if (!dateFormatRegex.test(createdAt)) {
    return res.status(400).json(errorMessage);
  }

  next();
};
