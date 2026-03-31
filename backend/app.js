const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const scoreRoutes = require("./routes/scoreRoutes");
const drawRoutes = require("./routes/drawRoutes");
const charityRoutes = require("./routes/charityRoutes");
const adminRoutes = require("./routes/adminRoutes"); // ✅ FIX

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/score", scoreRoutes);
app.use("/api/draw", drawRoutes);
app.use("/api/charity", charityRoutes);
app.use("/api/admin", adminRoutes); // ✅ FIX

module.exports = app;