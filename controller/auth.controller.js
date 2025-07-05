const User = require('./../model/user.model');
const jwt = require('jsonwebtoken');
require('dotenv').config(); // Ensure dotenv is loaded

const jwttokensecret = process.env.JWT_SECRET || 'studynow12345'; // Use uppercase and underscore by convention
const tokenexptime = process.env.JWT_TOKEN_EXPIRATION_TIME || '1hr'; 



const userRegistration = (req, res) => {
   
  const { mobile, email, password } = req.body;
  
      User.findOne({ email }).then(existingUser => {
          if (existingUser) {
          return res.status(409).json({ message: 'User already exists with this email' });
        }
        const newUser = new User({ mobile, email, password });
        newUser.save();
        res.status(201).json({ message: 'User registered successfully', user: newUser });

          }).catch(err => {
        res.status(500).json({ message: 'Server error', error: err.message });
      });

  
  // try {
  //   const { mobile, email, password } = req.body;
  //   // Check if user already exists
  //   const existingUser = await User.findOne({ email });
  //   if (existingUser) {
  //     return res.status(409).json({ message: 'User already exists with this email' });
  //   }
  //   // Create new user
  //   const newUser = new User({ mobile, email, password });
  //   await newUser.save();
  //   res.status(201).json({ message: 'User registered successfully', user: newUser });
  // } catch (err) {
  //   res.status(500).json({ message: 'Server error', error: err.message });
  // }
};

const validateLogin =  (req, res) => {
  const { email, password } = req.body;

    User.findOne({ email }).then(user => {
       if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid email or password' });
       }
        // Generate JWT token
        const token = jwt.sign(
          { id: user._id, email: user.email },
          jwttokensecret, // Replace with your secret
          { expiresIn: tokenexptime }
        );
        res.json({ message: 'Login successful', user, token });
      }).catch(err => {
    res.status(500).json({ message: 'Server error', error: err.message });
  });

  
  
  
};

module.exports = { validateLogin, userRegistration };