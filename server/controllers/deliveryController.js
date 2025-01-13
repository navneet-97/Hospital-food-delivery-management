// controllers/deliveryController.js
import { DeliveryStaff } from '../models/DeliveryStaff.js';

export const getDeliveryStaff = async (req, res) => {
  try {
    const staff = await DeliveryStaff.find()
      .populate('currentDeliveries')
      .populate('completedDeliveries');
    res.status(200).json(staff);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const assignDelivery = async (req, res) => {
  try {
    const { mealId } = req.body;
    const deliveryStaff = await DeliveryStaff.findById(req.params.id);
    if (!deliveryStaff) {
      return res.status(404).json({ message: 'Delivery staff not found' });
    }
    deliveryStaff.currentDeliveries.push(mealId);
    const updatedStaff = await deliveryStaff.save();
    res.status(200).json(updatedStaff);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const completeDelivery = async (req, res) => {
  try {
    const { mealId } = req.body;
    const deliveryStaff = await DeliveryStaff.findById(req.params.id);
    if (!deliveryStaff) {
      return res.status(404).json({ message: 'Delivery staff not found' });
    }
    deliveryStaff.currentDeliveries = deliveryStaff.currentDeliveries.filter(
      id => id.toString() !== mealId
    );
    deliveryStaff.completedDeliveries.push(mealId);
    const updatedStaff = await deliveryStaff.save();
    res.status(200).json(updatedStaff);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};