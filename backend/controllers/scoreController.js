const db = require("../config/db");

exports.addScore = (req, res) => {
  const userId = req.user.id;
  const { score, date } = req.body;

  db.query(
    "SELECT * FROM scores WHERE user_id = ? ORDER BY date ASC",
    [userId],
    (err, results) => {
      if (results.length >= 5) {
        const oldest = results[0];
        db.query("DELETE FROM scores WHERE id = ?", [oldest.id]);
      }

      db.query(
        "INSERT INTO scores (user_id, score, date) VALUES (?, ?, ?)",
        [userId, score, date],
        (err2) => {
          if (err2) return res.status(500).json(err2);
          res.json({ message: "Score added" });
        }
      );
    }
  );
};