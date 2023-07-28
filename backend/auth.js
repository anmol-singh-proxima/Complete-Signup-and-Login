const jwt = require('jsonwebtoken');
require('dotenv').config();

/* Secret key for JWT */
const secretKey = process.env.SECRET_KEY;

/* Middleware function to verify the token */
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
  
    if (!token) {
      return res.status(401).json({ error: 'Access denied. No token provided.' });
    }
  
    // Verify the token
    jwt.verify(token.replace('Bearer ', ''), secretKey, (err, decoded) => {
      if (err) {
        return res.status(403).json({ error: 'Invalid token.' });
      }
  
      // Token is valid, you can access the decoded information (e.g., user ID) in the 'decoded' object
      req.userId = decoded.userId;
  
      // Continue to the next middleware or route handler
      next();
    });
};

module.exports = verifyToken;