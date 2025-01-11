// import React, { useState } from 'react';
// import { Users, Utensils, Clock } from 'lucide-react';

// const AdminDashboard = () => {
//   const [activeTab, setActiveTab] = useState('patients');

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-6">
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-gray-900">Hospital Food Manager Dashboard</h1>
//         <p className="mt-2 text-gray-600">Manage patients, meals, and track deliveries</p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//         <div className="bg-white rounded-lg shadow p-6">
//           <div className="flex items-center">
//             <Users className="h-8 w-8 text-blue-600" />
//             <div className="ml-4">
//               <h2 className="text-lg font-semibold text-gray-900">Total Patients</h2>
//               <p className="text-2xl font-bold text-blue-600">124</p>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-lg shadow p-6">
//           <div className="flex items-center">
//             <Utensils className="h-8 w-8 text-green-600" />
//             <div className="ml-4">
//               <h2 className="text-lg font-semibold text-gray-900">Meals Prepared Today</h2>
//               <p className="text-2xl font-bold text-green-600">287</p>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-lg shadow p-6">
//           <div className="flex items-center">
//             <Clock className="h-8 w-8 text-purple-600" />
//             <div className="ml-4">
//               <h2 className="text-lg font-semibold text-gray-900">Pending Deliveries</h2>
//               <p className="text-2xl font-bold text-purple-600">18</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white rounded-lg shadow">
//         <div className="border-b border-gray-200">
//           <nav className="flex -mb-px">
//             <button
//               onClick={() => setActiveTab('patients')}
//               className={`py-4 px-6 text-sm font-medium ${
//                 activeTab === 'patients'
//                   ? 'border-b-2 border-blue-500 text-blue-600'
//                   : 'text-gray-500 hover:text-gray-700'
//               }`}
//             >
//               Patients
//             </button>
//             <button
//               onClick={() => setActiveTab('meals')}
//               className={`py-4 px-6 text-sm font-medium ${
//                 activeTab === 'meals'
//                   ? 'border-b-2 border-blue-500 text-blue-600'
//                   : 'text-gray-500 hover:text-gray-700'
//               }`}
//             >
//               Meal Plans
//             </button>
//             <button
//               onClick={() => setActiveTab('deliveries')}
//               className={`py-4 px-6 text-sm font-medium ${
//                 activeTab === 'deliveries'
//                   ? 'border-b-2 border-blue-500 text-blue-600'
//                   : 'text-gray-500 hover:text-gray-700'
//               }`}
//             >
//               Deliveries
//             </button>
//           </nav>
//         </div>
//         <div className="p-6">
//           {/* Content will be added based on active tab */}
//           <p className="text-gray-500">Select a tab to view details</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;


import React, { useState, useEffect } from 'react';
import { Users, Utensils, Clock, AlertCircle } from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('patients');
  const [patients, setPatients] = useState([]);
  const [meals, setMeals] = useState([]);
  const [deliveries, setDeliveries] = useState([]);
  const [alerts, setAlerts] = useState<{ message: string }[]>([]);

  // Patient management panel
  const PatientPanel = () => (
    <div className="space-y-4">
      <div className="flex justify-between mb-4">
        <h3 className="text-lg font-semibold">Patient List</h3>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Add New Patient
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dietary Restrictions</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Sample patient row */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
              <td className="px-6 py-4 whitespace-nowrap">302</td>
              <td className="px-6 py-4 whitespace-nowrap">Low sodium</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button className="text-blue-600 hover:text-blue-900">Edit</button>
                {" | "}
                <button className="text-blue-600 hover:text-blue-900">View Meals</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  // Meal plans panel
  const MealPlansPanel = () => (
    <div className="space-y-4">
      <div className="flex justify-between mb-4">
        <h3 className="text-lg font-semibold">Meal Plans</h3>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Create Meal Plan
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Morning Meals */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h4 className="font-semibold text-lg mb-2">Morning Meals</h4>
          <div className="space-y-2">
            {/* Sample meal card */}
            <div className="border p-2 rounded">
              <p className="font-medium">Room 302 - John Doe</p>
              <p className="text-sm text-gray-600">Status: Preparing</p>
              <p className="text-sm text-gray-600">Instructions: Low sodium</p>
            </div>
          </div>
        </div>

        {/* Evening Meals */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h4 className="font-semibold text-lg mb-2">Evening Meals</h4>
          <div className="space-y-2">
            {/* Sample meal card */}
            <div className="border p-2 rounded">
              <p className="font-medium">Room 405 - Jane Smith</p>
              <p className="text-sm text-gray-600">Status: Ready</p>
              <p className="text-sm text-gray-600">Instructions: Diabetic meal</p>
            </div>
          </div>
        </div>

        {/* Night Meals */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h4 className="font-semibold text-lg mb-2">Night Meals</h4>
          <div className="space-y-2">
            {/* Sample meal card */}
            <div className="border p-2 rounded">
              <p className="font-medium">Room 201 - Mike Johnson</p>
              <p className="text-sm text-gray-600">Status: Pending</p>
              <p className="text-sm text-gray-600">Instructions: Pureed food</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Deliveries panel
  const DeliveriesPanel = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">Delivery Tracking</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Meal Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delivery Staff</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Sample delivery row */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
              <td className="px-6 py-4 whitespace-nowrap">302</td>
              <td className="px-6 py-4 whitespace-nowrap">Morning</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                  In Progress
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">Alex Wilson</td>
              <td className="px-6 py-4 whitespace-nowrap">08:30 AM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  // Alerts section
  const AlertsSection = () => (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-4">Alerts</h3>
      <div className="space-y-2">
        {alerts.map((alert, index) => (
          <div key={index} className="flex items-center bg-red-50 p-4 rounded-md">
            <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
            <span className="text-red-700">{alert.message}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Hospital Food Manager Dashboard</h1>
        <p className="mt-2 text-gray-600">Manage patients, meals, and track deliveries</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <Users className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-gray-900">Total Patients</h2>
              <p className="text-2xl font-bold text-blue-600">{patients.length || 124}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <Utensils className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-gray-900">Meals Prepared Today</h2>
              <p className="text-2xl font-bold text-green-600">{meals.length || 287}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <Clock className="h-8 w-8 text-purple-600" />
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-gray-900">Pending Deliveries</h2>
              <p className="text-2xl font-bold text-purple-600">{deliveries.length || 18}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('patients')}
              className={`py-4 px-6 text-sm font-medium ${
                activeTab === 'patients'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Patients
            </button>
            <button
              onClick={() => setActiveTab('meals')}
              className={`py-4 px-6 text-sm font-medium ${
                activeTab === 'meals'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Meal Plans
            </button>
            <button
              onClick={() => setActiveTab('deliveries')}
              className={`py-4 px-6 text-sm font-medium ${
                activeTab === 'deliveries'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Deliveries
            </button>
          </nav>
        </div>
        <div className="p-6">
          {activeTab === 'patients' && <PatientPanel />}
          {activeTab === 'meals' && <MealPlansPanel />}
          {activeTab === 'deliveries' && <DeliveriesPanel />}
        </div>
      </div>

      <AlertsSection />
    </div>
  );
};

export default AdminDashboard;