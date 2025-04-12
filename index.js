require('dotenv').config();
const express = require("express");
const { connection } = require("./middleware/config/config");

const { authRoutes } = require("./routes/authRoutes");
const { categoryRoutes } = require("./routes/categoryRoute");



const app = express();
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.json("Welcome to CodeforTomorrow");
});

// API routes
app.use("/api", authRoutes);
app.use("/api", categoryRoutes);

// Use process.env.PORT or default to 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to the database successfully");
  } catch (error) {
    console.error("Failed to connect to the database:", error.message);
    process.exit(1); // Exit the process if the database connection fails
  }
  console.log(`Server is running on port ${PORT}`);
});