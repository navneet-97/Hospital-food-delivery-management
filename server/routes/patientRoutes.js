// routes/patientRoutes.js
import express from 'express';
import {
  getPatients,
  getPatient,
  createPatient,
  updatePatient
} from '../controllers/patientController.js';

const router = express.Router();

router.get('/', getPatients);
router.get('/:id', getPatient);
router.post('/', createPatient);
router.patch('/:id', updatePatient);

export default router;