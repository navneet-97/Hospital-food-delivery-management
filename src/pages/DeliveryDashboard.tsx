import React, { useState, useEffect } from 'react';
import { Truck, MapPin, CheckSquare, Clock } from 'lucide-react';

const DeliveryDashboard = () => {
  const [activeDeliveries, setActiveDeliveries] = useState([]);
  const [completedDeliveries, setCompletedDeliveries] = useState([]);
  const [pendingDeliveries, setPendingDeliveries] = useState([]);

  interface Delivery {
    roomNumber: string;
    patientName: string;
    mealType: string;
    specialInstructions: string[];
    estimatedTime?: string;
  }

  const DeliveryCard = ({ delivery, status }: { delivery: Delivery; status: string }) => {
    interface DeliveryStatusColor {
      pending: string;
      'in-progress': string;
      delivered: string;
      [key: string]: string;
    }

    const getStatusColor = (status: keyof DeliveryStatusColor): string => {
      const statusColors: DeliveryStatusColor = {
      pending: 'blue',
      'in-progress': 'yellow',
      delivered: 'green',
      default: 'gray'
      };
      return statusColors[status] || statusColors.default;
    };

    const color = getStatusColor(status);

    return (
      <div className={`border-l-4 border-${color}-500 bg-${color}-50 p-4 rounded-r-md`}>
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-semibold">Room {delivery.roomNumber}</h4>
            <p className="text-sm text-gray-600">Patient: {delivery.patientName}</p>
            <p className="text-sm text-gray-600">Meal Type: {delivery.mealType}</p>
            <div className="mt-2">
              <p className="text-sm font-medium">Special Instructions:</p>
              <ul className="list-disc list-inside text-sm text-gray-600">
                {delivery.specialInstructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-2">
            <span className={`px-2 py-1 text-sm rounded-full bg-${color}-100 text-${color}-800`}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
            {status !== 'delivered' && (
              <button className={`block px-4 py-2 bg-${color}-500 text-white rounded-md hover:bg-${color}-600 text-sm`}>
                {status === 'pending' ? 'Start Delivery' : 'Mark Delivered'}
              </button>
            )}
          </div>
        </div>
        {delivery.estimatedTime && (
          <div className="mt-2 flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-1" />
            Estimated delivery: {delivery.estimatedTime}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Delivery Dashboard</h1>
        <p className="mt-2 text-gray-600">Track and manage meal deliveries</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <Clock className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-gray-900">Pending</h2>
              <p className="text-2xl font-bold text-blue-600">{pendingDeliveries.length || 5}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <MapPin className="h-8 w-8 text-yellow-600" />
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-gray-900">In Progress</h2>
              <p className="text-2xl font-bold text-yellow-600">{activeDeliveries.length || 3}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <CheckSquare className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-gray-900">Completed Today</h2>
              <p className="text-2xl font-bold text-green-600">{completedDeliveries.length || 28}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* Active Deliveries Section */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Active Deliveries</h2>
            <div className="space-y-4">
              <DeliveryCard
                delivery={{
                  roomNumber: "302",
                  patientName: "John Doe",
                  mealType: "Morning Meal",
                  specialInstructions: ["Low sodium diet", "Serve hot"],
                  estimatedTime: "8:45 AM"
                }}
                status="in-progress"
              />
            </div>
          </div>
        </div>

        {/* Pending Deliveries Section */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Pending Deliveries</h2>
            <div className="space-y-4">
              <DeliveryCard
                delivery={{
                  roomNumber: "405",
                  patientName: "Jane Smith",
                  mealType: "Evening Meal",
                  specialInstructions: ["Diabetic meal", "No sugar"],
                  estimatedTime: "5:30 PM"
                }}
                status="pending"
              />
            </div>
          </div>
        </div>

        {/* Delivery History Section */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Today's Completed Deliveries</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Meal</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">8:15 AM</td>
                    <td className="px-6 py-4 whitespace-nowrap">201</td>
                    <td className="px-6 py-4 whitespace-nowrap">Mike Johnson</td>
                    <td className="px-6 py-4 whitespace-nowrap">Morning Meal</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Delivered
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDashboard;