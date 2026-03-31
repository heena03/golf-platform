const express = require("express");
const router = express.Router();
const scoreController = require("../controllers/scoreController");
const auth = require("../middleware/authMiddleware");

router.post("/add", auth, scoreController.addScore);

module.exports = router;