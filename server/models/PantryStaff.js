import mongoose from 'mongoose';

const pantryStaffSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  contactNumber: { type: String, required: true },
  location: String,
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  currentAssignments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Meal' }]
}, { timestamps: true });

export default mongoose.model('PantryStaff', pantryStaffSchema);