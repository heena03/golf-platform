const db = require("../config/db");

exports.getCharities = (req, res) => {
  db.query("SELECT * FROM charities", (err, result) => {
    res.json(result);
  });
};

exports.selectCharity = (req, res) => {
  const userId = req.user.id;
  const { charity_id } = req.body;

  db.query(
    "INSERT INTO user_charity (user_id, charity_id) VALUES (?, ?)",
    [userId, charity_id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Charity selected" });
    }
  );
};