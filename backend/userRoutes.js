const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('./userModel');

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

    // Create the new user
    const newUser = new User({
      name,
      email,
      password,
    });
    console.log("User is not registered already");

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

/* Handle the request from client for Logging in the Existing User */
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Generate the token and send back the response with token
    const token = jwt.sign({ userId: user._id }, 'your-secret-key');
    res.status(201).json({
      message: 'User Logged in successfully',
      token,
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;