import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  diseases: [String],
  allergies: [String],
  roomNumber: { type: String, required: true },
  bedNumber: { type: String, required: true },
  floorNumber: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  contactNumber: { type: String, required: true },
  emergencyContact: {
    name: { type: String, required: true },
    relationship: String,
    phone: { type: String, required: true }
  },
  dietaryRestrictions: [String],
  admissionDate: { type: Date, default: Date.now },
  status: { type: String, default: 'Active' }
}, { timestamps: true });

export default mongoose.model('Patient', patientSchema);