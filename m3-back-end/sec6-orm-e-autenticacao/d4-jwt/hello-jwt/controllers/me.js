module.exports = async (req, res) => {
  const { username, admin } = req.user;
  res.status(200).json({ username, admin });
};