const { MongoClient } = require('mongodb');

let dbObject = {
    isConnected: false,
    db: null,
    error: null,
}
const uri = 'mongodb://127.0.0.1:27017'; // Connection URL
const dbName = 'sample'; // Database name

const connectToDatabase = (callBack) => {
    /* Create a MongoDB client */
    const client = new MongoClient(uri, { 
        useNewUrlParser: true,
        useUnifiedTopology: true 
    });

    /* Connect to the MongoDB server */
    client.connect()
    .then(response => {
        dbObject.isConnected = true;
        // console.log("Response:", response);
        console.log('Connected to the Database successfully!!');
        dbObject.db = client.db(dbName);
       callBack(dbObject);
    })
    .catch(error => {
        dbObject.error = error;
        callBack(dbObject);
    });
}

module.exports = connectToDatabase;