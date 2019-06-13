const express = require('express');
const bc = require("bcryptjs");

const User = require('../models/user');
const userAuth = require("../middleware/userAuth");

const router = express.Router();

// Create user end-point
router.put("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    const token = user.createJWT();
    await user.save();
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// User login
router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByEmailAndPass(req.body);
    const token = user.createJWT();
    await user.save();
    res.status(200).send({ user, token });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// User profile
router.get("/users/profile", userAuth, async (req, res) => {
  res.send(req.user);
});

// User single logout device
router.post("/users/logout", userAuth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(token => token === req.token);
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send();
  }
});

// logout from all devices
router.post("/users/logoutAll", userAuth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send();
  }
});

// Removing user from db
router.delete("/users", userAuth, async (req, res) => {
  try {
    await req.user.remove();
    res.send();
  } catch (error) {
    res.status(500).send();
  }
});


//Update user info
router.patch("/users", userAuth, async (req, res) => {
  const allowedUpdates = ["name", "email", "password"];
  const updates = Object.keys(req.body);
  try {
    updates.forEach(update => {
      if (!allowedUpdates.includes(update)) throw new Error("Invalid updates");
      req.user[update] = req.body[update];
    });
    await req.user.save();
    res.send()
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});


module.exports = router;