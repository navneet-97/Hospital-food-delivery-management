// controllers/pantryController.js
import { PantryStaff } from '../models/PantryStaff.js';

export const getPantryStaff = async (req, res) => {
  try {
    const staff = await PantryStaff.find().populate('currentAssignments');
    res.status(200).json(staff);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const assignMeal = async (req, res) => {
  try {
    const { mealId } = req.body;
    const pantryStaff = await PantryStaff.findById(req.params.id);
    if (!pantryStaff) {
      return res.status(404).json({ message: 'Pantry staff not found' });
    }
    pantryStaff.currentAssignments.push(mealId);
    const updatedStaff = await pantryStaff.save();
    res.status(200).json(updatedStaff);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
