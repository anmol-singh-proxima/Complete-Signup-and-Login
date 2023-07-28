const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const user = require('./userRoutes');

/* Set up middleware */
app.use(cors());
app.use(bodyParser.json());

/* Database Connection */
mongoose.connect('mongodb://127.0.0.1:27017/sample', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then((response) => {
  // console.log("Response:", response);
  console.log('Connected to the database');
}).catch((err) => {
  console.error('Error connecting to the database:', err);
});

/* Getting the user requests in the imported router */
app.use('/user', user);

/* Protect a route using the JWT middleware */
app.get('/home', (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  // Verify and decode the JWT token
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token.' });
    }

    // Token is valid, continue processing the protected route
    res.status(200).json({ message: 'Access granted to protected route!', user: decoded.userId });
  });
});

/* Start the Server */
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});