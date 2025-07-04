const User = require('./../model/user.model');
const jwt = require('jsonwebtoken');
require('dotenv').config(); // Ensure dotenv is loaded

const jwttokensecret = process.env.JWT_SECRET; // Use uppercase and underscore by convention




const userRegistration = async (req, res) => {
  try {
    const { mobile, email, password } = req.body;
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists with this email' });
    }
    // Create new user
    const newUser = new User({ mobile, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const validateLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      jwttokensecret, // Replace with your secret
      { expiresIn: '1h' }
    );
    res.json({ message: 'Login successful', user, token });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

module.exports = { validateLogin, userRegistration };