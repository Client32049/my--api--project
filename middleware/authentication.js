const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  const token = req.header("Authorization");
  try {
    if (!token || !token.startsWith("Bearer ")) {
      throw new Error("Invalid or missing token");
    }

    const decoded = jwt.verify(
      token.split(" ")[1], // Extract the token part
      process.env.JWT_SECRET
    );
console.log("Decoded token:", decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Token verification failed:", error.message);
    res.status(401).json({
      message: "Invalid Token",
    });
  }
};

module.exports = {
  authentication
};
