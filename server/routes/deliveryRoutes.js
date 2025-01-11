// routes/deliveryRoutes.js
import express from 'express';
import {
  getDeliveryStaff,
  assignDelivery,
  completeDelivery
} from '../controllers/deliveryController.js';

const router = express.Router();

router.get('/', getDeliveryStaff);
router.post('/:id/assign', assignDelivery);
router.post('/:id/complete', completeDelivery);

export default router;