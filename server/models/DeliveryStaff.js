// import mongoose from 'mongoose';

// const deliveryStaffSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   contactNumber: { type: String, required: true },
//   status: { type: String, enum: ['available', 'busy', 'offline'], default: 'available' },
//   currentDeliveries: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Meal' }],
//   completedDeliveries: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Meal' }]
// }, { timestamps: true });

// export default mongoose.model('DeliveryStaff', deliveryStaffSchema);

// models/DeliveryStaff.js
import mongoose from 'mongoose';
const deliveryStaffSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  currentDeliveries: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Meal'
  }],
  completedDeliveries: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Meal'
  }],
  status: { 
    type: String, 
    enum: ['available', 'busy', 'offline'],
    default: 'available'
  }
});

export const DeliveryStaff = mongoose.model('DeliveryStaff', deliveryStaffSchema);