const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('./userModel');
const verifyToken = require('./auth');
require('dotenv').config();

// Secret key for JWT. Need to keep this secure and should not expose it publicly.
const secretKey = process.env.SECRET_KEY;

/* Handle the request from client for Registering the New User */
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  console.log("Request from Client:", req.body);

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Generate a salt to use during hashing
    const salt = await bcrypt.genSalt(10);

    // Hash the password with the generated salt
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create the new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save()
    res.status(201).json({
      message: 'User Signed up successfully'
    });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

/* Handle the request from client for Login the Existing User */
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare the entered password with the hashed password from the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password.' });
    }

    // Generate the token and send back the response with token
    const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
    res.status(201).json({
      message: 'User Logged in successfully',
      token,
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

/* Handle the request from client to get the user data by sending the token */
router.post("/get", verifyToken, async (req, res) => {
  console.log("request:", req.userId);
  const userId = req.userId;
  
  try {
    // Check if the user exists
    const user = await User.findOne({ _id: userId });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    console.log("User:", user);
    res.status(201).json({
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error' });
  }
})

module.exports = router;