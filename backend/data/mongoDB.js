// Import the insertDataIntoCollection function
const { insertDataIntoCollection } = require('./dataService');

// Inside your route handler/controller
async function handleCalorieData(req, res) {
    try {
        // Fetch data from Calorie Ninja API and transform it
        const transformedData = transformDataFromCalorieNinjaAPI(req.body);

        // Insert the transformed data into MongoDB
        await insertDataIntoCollection(transformedData);

        res.status(200).json({ message: 'Data inserted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error inserting data into MongoDB collection', error });
    }
}
