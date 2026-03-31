const db = require("../config/db");

// generate 5 random numbers
function generateNumbers() {
  let nums = [];
  while (nums.length < 5) {
    let n = Math.floor(Math.random() * 45) + 1;
    if (!nums.includes(n)) nums.push(n);
  }
  return nums;
}

exports.runDraw = (req, res) => {
  const drawNumbers = generateNumbers();

  // save draw
  db.query(
    "INSERT INTO draws (draw_date, numbers, status) VALUES (CURDATE(), ?, 'published')",
    [drawNumbers.join(",")],
    (err, result) => {
      if (err) return res.status(500).json(err);

      const drawId = result.insertId;

      // get users scores
      db.query("SELECT * FROM scores", (err2, scores) => {
        if (err2) return res.status(500).json(err2);

        scores.forEach((s) => {
          let match = drawNumbers.includes(s.score);

          if (match) {
            db.query(
              "INSERT INTO winners (user_id, draw_id, match_type, prize_amount) VALUES (?, ?, '3', 100)",
              [s.user_id, drawId]
            );
          }
        });

        res.json({ message: "Draw completed", numbers: drawNumbers });
      });
    }
  );
};