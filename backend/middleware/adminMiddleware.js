module.exports = (req, res, next) => {
  if (req.user.id !== 2) {
    return res.status(403).json({ message: "Admin only" });
  }
  next();
};