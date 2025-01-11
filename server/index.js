// import express from 'express';
// import cors from 'cors';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import patientRoutes from './models/Patient.js';
// import mealRoutes from './models/Meal.js';
// import pantryRoutes from './models/PantryStaff.js';
// import deliveryRoutes from './models/DeliveryStaff.js';

// dotenv.config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/hospital-food-management')
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.error('MongoDB connection error:', err));

// // Routes
// app.use('/api/patients', patientRoutes);
// app.use('/api/meals', mealRoutes);
// app.use('/api/pantry', pantryRoutes);
// app.use('/api/delivery', deliveryRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// index.js
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import patientRoutes from './routes/patientRoutes.js';
import mealRoutes from './routes/mealRoutes.js';
import pantryRoutes from './routes/pantryRoutes.js';
import deliveryRoutes from './routes/deliveryRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/hospital-food-management', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/patients', patientRoutes);
app.use('/api/meals', mealRoutes);
app.use('/api/pantry', pantryRoutes);
app.use('/api/delivery', deliveryRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});