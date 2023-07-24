const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const connectToDatabase = require('./dbConnection');
const dbQueriesExecution = require('./dbQueries');

// Handle all other routes and return the index file
app.post('/api/signup', (req, res) => {
  res.send("Got the Request");
});

// Start the Server based on the Database connection
connectToDatabase(function({ isConnected, db, error }) {
  // console.log("dbObject:", dbObject);
  if(isConnected) {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
    dbQueriesExecution(db);
  } else {
    console.log("Error in connecting to the Database:", error);
  }
});