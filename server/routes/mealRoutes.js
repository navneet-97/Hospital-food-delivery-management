// routes/mealRoutes.js
import express from 'express';
import {
  getMeals,
  createMeal,
  updateMealStatus
} from '../controllers/mealController.js';

const router = express.Router();

router.get('/', getMeals);
router.post('/', createMeal);
router.patch('/:id/status', updateMealStatus);

export default router;