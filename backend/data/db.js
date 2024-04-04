const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb+srv://josephcruel:UkwKD5LJ9yLIWp12@calories.ifsfwtg.mongodb.net/?retryWrites=true&w=majority&appName=Calories';

// Create a new MongoClient
const client = new MongoClient(uri);

async function connectToDatabase() {
    try {
        // Connect the client to the server
        await client.connect();
        console.log('Connected to MongoDB Atlas');

        // Access your database and collection
        const database = client.db('ifsfwtg.mongodb.net');
        const collection = database.collection('calories');

        // Perform operations on your collection
    } catch (error) {
        console.error('Error connecting to MongoDB Atlas', error);
    }
}

// Connect to the database
connectToDatabase();
