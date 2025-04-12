const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  // Validate admin credentials using environment variables
  const adminEmail = process.env.ADMIN_EMAIL || "admin@codesfortomorrow.com";
  const adminPassword = process.env.ADMIN_PASSWORD || "Admin123!@#";

  if (email !== adminEmail || password !== adminPassword) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Ensure JWT_SECRET is defined
  if (!process.env.JWT_SECRET) {
    return res.status(500).json({ message: "JWT_SECRET is not configured" });
  }

  // Generate JWT token
  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ token });
};

module.exports = {
  login,
};
