import React from 'react';
import { FiSearch } from 'react-icons/fi';
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

// Dummy data for charts
const genderData = [
  { name: 'Male', value: 750000 },
  { name: 'Female', value: 500000 }
];

const COLORS = ['#0088FE', '#FF69B4'];

const fundData = [
  { name: 'Q1', allocated: 300000, disbursed: 250000 },
  { name: 'Q2', allocated: 350000, disbursed: 300000 },
  { name: 'Q3', allocated: 400000, disbursed: 350000 },
  { name: 'Q4', allocated: 200000, disbursed: 100000 },
];

const AdminDashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Dashboard Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-600">Manage student scholarships and monitor application status.</p>
      </header>

      {/* Overview Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Total Applications */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-lg font-bold">Total Applications</h2>
          <p className="text-4xl mt-4">1,024</p>
          <span className="text-gray-600">50 pending actions</span>
        </div>

        {/* Approved Applications */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-lg font-bold">Approved Applications</h2>
          <p className="text-4xl mt-4">750</p>
          <span className="text-gray-600">10 awaiting review</span>
        </div>

        {/* Rejected Applications */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-lg font-bold">Rejected Applications</h2>
          <p className="text-4xl mt-4">120</p>
          <span className="text-gray-600">5 under reconsideration</span>
        </div>
      </section>

      {/* Recent Activities */}
      <section className="bg-white p-6 shadow-md rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
        <ul className="space-y-3">
          <li className="flex justify-between">
            <span>Approved 50 applications for Q4 Scholarship</span>
            <span className="text-gray-500">Today, 10:30 AM</span>
          </li>
          <li className="flex justify-between">
            <span>Rejected 10 incomplete applications</span>
            <span className="text-gray-500">Yesterday, 4:45 PM</span>
          </li>
          <li className="flex justify-between">
            <span>Uploaded new fund allocation report</span>
            <span className="text-gray-500">2 days ago</span>
          </li>
        </ul>
      </section>

      {/* Search and Manage Students */}
      <section className="bg-white p-6 shadow-md rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">Manage Student Applications</h2>
        <div className="flex items-center space-x-4 mb-4">
          <input
            type="text"
            placeholder="Search by name or ID"
            className="p-2 border border-gray-300 rounded-md w-full"
          />
          <button className="bg-blue-600 text-white p-2 rounded-md">
            <FiSearch />
          </button>
        </div>
        {/* Example Student Entries */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded-md p-4 bg-gray-50">
            <h3 className="font-semibold">Ayesha Khan</h3>
            <p className="text-gray-600">Application ID: JK-00123</p>
            <p className="text-gray-600">District: Srinagar</p>
            <div className="mt-2">
              <button className="bg-green-500 text-white px-4 py-2 rounded-md mr-2">Approve</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md">Reject</button>
            </div>
          </div>
          <div className="border rounded-md p-4 bg-gray-50">
            <h3 className="font-semibold">Rahul Verma</h3>
            <p className="text-gray-600">Application ID: JK-00124</p>
            <p className="text-gray-600">District: Jammu</p>
            <div className="mt-2">
              <button className="bg-green-500 text-white px-4 py-2 rounded-md mr-2">Approve</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md">Reject</button>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Fund Distribution */}
      <section className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Scholarship Fund Distribution</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Gender-Based Fund Distribution Pie Chart */}
          <div>
            <h3 className="text-lg font-bold mb-4">Fund Distribution by Gender</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={genderData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {genderData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Fund Allocation and Disbursement Bar Chart */}
          <div>
            <h3 className="text-lg font-bold mb-4">Fund Allocation vs. Disbursement</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={fundData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="allocated" fill="#82ca9d" />
                <Bar dataKey="disbursed" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Admin Announcements */}
      <section className="bg-white p-6 shadow-md rounded-lg mt-8">
        <h2 className="text-xl font-semibold mb-4">Admin Announcements</h2>
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <h3 className="font-bold">New STEM Scholarship Program</h3>
          <p className="text-gray-600">Posted on Sept 9, 2024</p>
          <p className="mt-2">
            A new STEM scholarship program for students in Jammu & Kashmir is live. Ensure students are informed and submit their applications before the deadline.
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="font-bold">Reminder: Scholarship Review Deadline</h3>
          <p className="text-gray-600">Posted on Sept 7, 2024</p>
          <p className="mt-2">
            The deadline for reviewing Q4 scholarship applications is approaching. Complete reviews by Sept 15, 2024.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
