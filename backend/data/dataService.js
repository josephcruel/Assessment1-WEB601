const { MongoClient } = require('mongodb');

// MongoDB connection URI
const uri = 'mongodb+srv://josephcruel:UkwKD5LJ9yLIWp12@calories.ifsfwtg.mongodb.net/?retryWrites=true&w=majority';

// Create a new MongoClient
const client = new MongoClient(uri);

// Function to insert data into the collection
async function insertDataIntoCollection(data) {
    try {
        await client.connect(); // Connect to MongoDB
        const collection = client.db('ifsfwtg').collection('calories'); // Access the collection
        const result = await collection.insertOne(data); // Insert data into the collection
        console.log(`Inserted ${result.insertedCount} document into the collection`);
    } catch (error) {
        console.error('Error inserting data into MongoDB collection:', error);
    } finally {
        await client.close(); // Close the MongoDB connection
    }
}

module.exports = { insertDataIntoCollection };
