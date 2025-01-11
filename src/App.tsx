import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AdminDashboard from './pages/AdminDashboard';
import PantryDashboard from './pages/PantryDashboard';
import DeliveryDashboard from './pages/DeliveryDashboard';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/pantry" element={<PantryDashboard />} />
          <Route path="/delivery" element={<DeliveryDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;