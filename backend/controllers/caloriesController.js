const Calorie = require('../models/calorieModel');

exports.createCalorieInfo = async (name, calories, protein, sodium) => {
    try {
        const newCalorie = new Calorie({
            name,
            calories,
            protein,
            sodium
        });
        return await newCalorie.save();
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.getAllCalories = async () => {
    try {
        return await Calorie.find();
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.updateCalorieInfo = async (id, name, calories, protein, sodium) => {
    try {
        const updatedCalorie = await Calorie.findByIdAndUpdate(id, { name, calories, protein, sodium }, { new: true });
        if (!updatedCalorie) {
            throw new Error('Calorie not found');
        }
        return updatedCalorie;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.deleteCalorieInfo = async (id) => {
    try {
        await Calorie.findByIdAndDelete(id);
    } catch (error) {
        throw new Error(error.message);
    }
};
