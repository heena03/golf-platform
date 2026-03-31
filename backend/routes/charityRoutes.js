const express = require("express");
const router = express.Router();
const charityController = require("../controllers/charityController");
const auth = require("../middleware/authMiddleware");

router.get("/", charityController.getCharities);
router.post("/select", auth, charityController.selectCharity);

module.exports = router;