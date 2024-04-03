const express = require('express');
const router = express.Router();
const calorieController = require('../controllers/calorieController');

// Create a new calorie entry
router.post('/calories', async (req, res) => {
    const { name, calories, protein, sodium } = req.body;
    try {
        const newCalorie = await calorieController.createCalorieInfo(name, calories, protein, sodium);
        res.status(201).json(newCalorie);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all calorie entries
router.get('/calories', async (req, res) => {
    try {
        const calories = await calorieController.getAllCalories();
        res.json(calories);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Update a calorie entry by ID
router.put('/calories/:id', async (req, res) => {
    const { id } = req.params;
    const { name, calories, protein, sodium } = req.body;
    try {
        const updatedCalorie = await calorieController.updateCalorieInfo(id, name, calories, protein, sodium);
        res.json(updatedCalorie);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a calorie entry by ID
router.delete('/calories/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await calorieController.deleteCalorieInfo(id);
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
