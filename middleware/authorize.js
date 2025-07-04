const jwt = require('jsonwebtoken');
require('dotenv').config(); // Ensure dotenv is loaded

const jwttokensecret = process.env.JWT_SECRET;


const authMiddleware = (req, res, next) => {
  // Get token from header
 
  const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];
    console.log("token is ", token);
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }
  
  try {
    const decoded = jwt.verify(token, jwttokensecret); // Replace with your secret
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token.' });
  }
};

module.exports = authMiddleware;