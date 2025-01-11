// controllers/mealController.js
import Meal from '../models/Meal.js';

export const getMeals = async (req, res) => {
  try {
    const meals = await Meal.find()
      .populate('patientId')
      .populate('assignedPantry')
      .populate('assignedDelivery');
    res.status(200).json(meals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createMeal = async (req, res) => {
  const meal = new Meal(req.body);
  try {
    const newMeal = await meal.save();
    res.status(201).json(newMeal);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateMealStatus = async (req, res) => {
  try {
    const { preparationStatus, deliveryStatus } = req.body;
    const updatedMeal = await Meal.findByIdAndUpdate(
      req.params.id,
      { preparationStatus, deliveryStatus },
      { new: true }
    );
    if (!updatedMeal) {
      return res.status(404).json({ message: 'Meal not found' });
    }
    res.status(200).json(updatedMeal);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};