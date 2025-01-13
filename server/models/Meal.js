// import mongoose from 'mongoose';

// const mealSchema = new mongoose.Schema({
//   patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
//   type: { type: String, enum: ['morning', 'evening', 'night'], required: true },
//   items: [{
//     name: String,
//     ingredients: [String],
//     specialInstructions: [String]
//   }],
//   dietaryRestrictions: [String],
//   preparationStatus: { type: String, enum: ['pending', 'preparing', 'ready', 'delivered'], default: 'pending' },
//   assignedPantry: { type: mongoose.Schema.Types.ObjectId, ref: 'PantryStaff' },
//   assignedDelivery: { type: mongoose.Schema.Types.ObjectId, ref: 'DeliveryStaff' },
//   deliveryStatus: { type: String, enum: ['pending', 'in-progress', 'delivered'], default: 'pending' },
//   deliveryTime: Date,
//   date: { type: Date, required: true }
// }, { timestamps: true });

// export default mongoose.model('Meal', mealSchema);

// models/Meal.js
import mongoose from "mongoose";
const mealSchema = new mongoose.Schema({
  patientId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Patient',
    required: true 
  },
  mealType: { 
    type: String, 
    enum: ['morning', 'evening', 'night'],
    required: true 
  },
  preparationStatus: { 
    type: String, 
    enum: ['pending', 'preparing', 'ready'],
    default: 'pending'
  },
  deliveryStatus: { 
    type: String, 
    enum: ['pending', 'in-progress', 'delivered'],
    default: 'pending'
  },
  specialInstructions: [String],
  assignedPantry: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'PantryStaff' 
  },
  assignedDelivery: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'DeliveryStaff' 
  },
  scheduledTime: { 
    type: Date, 
    required: true 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

export const Meal = mongoose.model('Meal', mealSchema);
