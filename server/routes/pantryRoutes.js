// routes/pantryRoutes.js
import express from 'express';
import {
  getPantryStaff,
  assignMeal
} from '../controllers/pantryController.js';

const router = express.Router();

router.get('/', getPantryStaff);
router.post('/:id/assign', assignMeal);

export default router;
