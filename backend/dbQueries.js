const dbQueriesExecution = (db) => {
    /* Getting the collection from the database */
    const collection = db.collection('users');

    /* Insert Query on the Collection */
    collection.insertOne({ name: 'Anmol', age: 25 }).then(result => {
        console.log('Document inserted:', result.insertedId);
    }).catch(err => {
        console.error('Error inserting document:', err);
    });

    /* Read Query on the Collection */
    collection.find({ age: { $gt: 20 } }).toArray()
    .then((result) => {
        // Code to handle the success case using the result
        console.log("Documents found:", result);
        console.log("Number of documents inserted:", result.length);
    })
    .catch((error) => {
        // Code to handle the error case
        console.error(error);
    });

    /* Delete Query on the Collection */
    collection.deleteMany().then(response => {
        console.log("Response:", response)
    }).catch(error => {
        console.log("Error:", error);
    });
}

module.exports = dbQueriesExecution;