const express = require("express");
const router = express.Router();

const drawController = require("../controllers/drawcontroller");
const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

// Admin runs draw
router.post("/run-draw", auth, admin, drawController.runDraw);

module.exports = router;