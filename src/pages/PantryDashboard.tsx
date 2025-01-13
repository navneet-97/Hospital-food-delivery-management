import React, { useState, useEffect } from 'react';
import { ChefHat, Clock, CheckCircle, Users, AlertCircle } from 'lucide-react';

const PantryDashboard = () => {
  const [activeTab, setActiveTab] = useState('preparation');
  const [preparationTasks, setPreparationTasks] = useState([]);
  const [deliveryStaff, setDeliveryStaff] = useState([]);
  const [alerts, setAlerts] = useState([]);

  // Meal Preparation Panel
  const PreparationPanel = () => (
    <div className="space-y-4">
      <div className="flex justify-between mb-4">
        <h3 className="text-lg font-semibold">Meal Preparation Tasks</h3>
        <div className="flex space-x-2">
          <select className="rounded-md border-gray-300">
            <option>All Meals</option>
            <option>Morning</option>
            <option>Evening</option>
            <option>Night</option>
          </select>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Update Status
          </button>
        </div>
      </div>
      <div className="space-y-4">
        {/* Sample meal preparation tasks */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-md">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-semibold">Morning Meal - Room 302</h4>
              <p className="text-sm text-gray-600">Patient: John Doe</p>
              <div className="mt-2">
                <p className="text-sm font-medium">Special Instructions:</p>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  <li>Low sodium diet</li>
                  <li>No dairy products</li>
                </ul>
              </div>
              <div className="mt-2">
                <p className="text-sm font-medium">Ingredients:</p>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  <li>Oatmeal with fruits</li>
                  <li>Whole grain toast</li>
                  <li>Fresh orange juice</li>
                </ul>
              </div>
            </div>
            <div className="space-y-2">
              <select className="rounded-md border-gray-300 text-sm">
                <option>Pending</option>
                <option>Preparing</option>
                <option>Ready</option>
              </select>
              <button className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 text-sm">
                Mark Ready
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Delivery Staff Panel
  const DeliveryStaffPanel = () => (
    <div className="space-y-4">
      <div className="flex justify-between mb-4">
        <h3 className="text-lg font-semibold">Delivery Staff Management</h3>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Add Staff
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Sample delivery staff cards */}
        <div className="bg-white p-4 rounded-lg shadow border">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-semibold">Alex Wilson</h4>
              <p className="text-sm text-gray-600">ID: DL001</p>
              <p className="text-sm text-gray-600">Contact: +1234567890</p>
              <div className="mt-2">
                <p className="text-sm font-medium">Current Assignments:</p>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  <li>Room 302 - Morning Meal</li>
                  <li>Room 405 - Morning Meal</li>
                </ul>
              </div>
            </div>
            <span className="px-2 py-1 text-sm rounded-full bg-green-100 text-green-800">
              Available
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  // Meal Assignment Panel
  const MealAssignmentPanel = () => (
    <div className="space-y-4">
      <div className="flex justify-between mb-4">
        <h3 className="text-lg font-semibold">Meal Assignments</h3>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Assign Meals
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Meal Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delivery Staff</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Sample assignment row */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">302</td>
              <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
              <td className="px-6 py-4 whitespace-nowrap">Morning</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                  Ready for Delivery
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <select className="rounded-md border-gray-300 text-sm">
                  <option>Select Staff</option>
                  <option>Alex Wilson</option>
                  <option>Sarah Johnson</option>
                </select>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="text-blue-600 hover:text-blue-900">Assign</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Pantry Staff Dashboard</h1>
        <p className="mt-2 text-gray-600">Manage meal preparation and assignments</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <ChefHat className="h-8 w-8 text-yellow-600" />
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-gray-900">In Preparation</h2>
              <p className="text-2xl font-bold text-yellow-600">12</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <Clock className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-gray-900">Ready for Delivery</h2>
              <p className="text-2xl font-bold text-blue-600">8</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <Users className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-gray-900">Active Delivery Staff</h2>
              <p className="text-2xl font-bold text-green-600">5</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('preparation')}
              className={`py-4 px-6 text-sm font-medium ${
                activeTab === 'preparation'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Meal Preparation
            </button>
            <button
              onClick={() => setActiveTab('staff')}
              className={`py-4 px-6 text-sm font-medium ${
                activeTab === 'staff'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Delivery Staff
            </button>
            <button
              onClick={() => setActiveTab('assignments')}
              className={`py-4 px-6 text-sm font-medium ${
                activeTab === 'assignments'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Meal Assignments
            </button>
          </nav>
        </div>
        <div className="p-6">
          {activeTab === 'preparation' && <PreparationPanel />}
          {activeTab === 'staff' && <DeliveryStaffPanel />}
          {activeTab === 'assignments' && <MealAssignmentPanel />}
        </div>
      </div>
    </div>
  );
};

export default PantryDashboard;