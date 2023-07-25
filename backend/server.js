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

/* Start the Server */
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});