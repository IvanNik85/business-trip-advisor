const express = require('express');
const bc = require("bcryptjs");

const User = require('../models/user');

const router = express.Router();

// Create user end-point
router.put("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    const token = user.createJWT();
    user.password = await bc.hash(user.password, 10);
    await user.save();
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// User login
router.post("/users/login", async (req, res) => {
  
})

module.exports = router;