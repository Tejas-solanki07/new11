const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

/* 🔥 GLOBAL USER STORE */
global.users = global.users || [];
const users = global.users;

/* =========================
   ✅ REGISTER
========================= */
router.post("/register", (req, res) => {
  try {
    let { name, email, password, phone } = req.body;

    email = email?.toLowerCase().trim();
    phone = phone?.trim();

    if (!name || !email || !password || !phone) {
      return res.status(400).json({ error: "All fields required" });
    }

    const existingUser = users.find(
      (u) => u.email === email || u.phone === phone
    );

    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      phone,
    };

    users.push(newUser);

    const token = jwt.sign({ id: newUser.id }, "secret123", {
      expiresIn: "7d",
    });

    res.json({ user: newUser, token });

  } catch (err) {
    res.status(500).json({ error: "Register failed" });
  }
});

/* =========================
   ✅ LOGIN
========================= */
router.post("/login", (req, res) => {
  try {
    let { email, phone, password } = req.body;

    email = email?.toLowerCase().trim();
    phone = phone?.trim();

    const user = users.find(
      (u) =>
        ((email && u.email === email) ||
          (phone && u.phone === phone)) &&
        u.password === password
    );

    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id }, "secret123", {
      expiresIn: "7d",
    });

    res.json({ user, token });

  } catch (err) {
    res.status(500).json({ error: "Login failed" });
  }
});

/* =========================
   🔐 FORGOT PASSWORD
========================= */
router.post("/forgot-password", (req, res) => {
  try {
    let { email, phone } = req.body;

    email = email?.toLowerCase().trim();
    phone = phone?.trim();

    const user = users.find(
      (u) =>
        (email && u.email === email) ||
        (phone && u.phone === phone)
    );

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    res.json({ message: "User verified" });

  } catch (err) {
    res.status(500).json({ error: "Error" });
  }
});

/* =========================
   🔐 RESET PASSWORD
========================= */
router.post("/reset-password", (req, res) => {
  try {
    let { email, phone, newPassword } = req.body;

    email = email?.toLowerCase().trim();
    phone = phone?.trim();

    const user = users.find(
      (u) =>
        (email && u.email === email) ||
        (phone && u.phone === phone)
    );

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    user.password = newPassword;

    res.json({ message: "Password updated successfully" });

  } catch (err) {
    res.status(500).json({ error: "Reset failed" });
  }
});

module.exports = router;