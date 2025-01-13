// services/api.ts
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const api = {
  // Patient endpoints
  createPatient: async (patientData: any) => {
    return await axios.post('/api/patients', patientData);
  },
  getPatients: async () => {
    return await axios.get('/api/patients');
  },

  // Meal endpoints
  async createMeal(mealData: any) {
    const response = await axios.post(`${API_URL}/meals`, mealData);
    return response.data;
  },
  
  async getMeals() {
    const response = await axios.get(`${API_URL}/meals`);
    return response.data;
  },

  // Pantry staff endpoints
  async getPantryStaff() {
    const response = await axios.get(`${API_URL}/pantry`);
    return response.data;
  },

  async assignMealToPantryStaff(staffId: string, mealId: string) {
    const response = await axios.post(`${API_URL}/pantry/${staffId}/assign`, { mealId });
    return response.data;
  },

  // Delivery staff endpoints
  async getDeliveryStaff() {
    const response = await axios.get(`${API_URL}/delivery`);
    return response.data;
  },

  async assignDelivery(staffId: string, mealId: string) {
    const response = await axios.post(`${API_URL}/delivery/${staffId}/assign`, { mealId });
    return response.data;
  }
};