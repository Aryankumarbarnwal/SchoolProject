import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// Hardcoded admin for now
const adminUser = {
  username: "admin",
  password: "$2b$10$7WtNY0Lj8hal4JaaeUrsBOnfTgj8eX4WCpwrHYsWFh2YRtjCaojYW", // password: 123456
};

export const loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check username
    if (username !== adminUser.username) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Check password
    const matched = await bcrypt.compare(password, adminUser.password);
    if (!matched) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Create JWT token
    const token = jwt.sign(
      { username },
      process.env.JWT_SECRET || "secret123",
      { expiresIn: process.env.JWT_EXPIRE || "7d" }
    );

    // Set cookie correctly
    res.cookie("adminToken", token, {
      httpOnly: true,
      secure: false,  // true only on production HTTPS
      sameSite: "lax",
      path: "/",
    });

    return res.json({ message: "Login successful" });
  } catch (error) {
    console.error("LOGIN ERROR:", error);
    return res.status(500).json({ message: "Server error", error });
  }
};

export const getAdminProfile = (req, res) => {
  return res.json({ username: req.admin.username });
};

export const logoutAdmin = (req, res) => {
  res.clearCookie("adminToken", { path: "/" });
  return res.json({ message: "Logged out" });
};
