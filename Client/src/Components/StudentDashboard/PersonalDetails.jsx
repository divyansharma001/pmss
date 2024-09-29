import React from "react";

const PersonalDetails = () => {
  // Dummy data for demonstration
  const personalDetails = {
    fullName: "Rahul Sharma",
    email: "rahul11@gmail.com",
    fatherName: "Rajesh Sharma",
    motherName: "Suman Sharma",
    phone: "123-456-7890",
    dob: "2000-01-01",
    address: "123 Main St, City, State, 12345",
    city: "Noida",
    state: "Uttar Pradesh",
    pincode: "201301",
    country: "India",
    gender: "Male",
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-50 p-8 rounded-lg shadow-lg mb-6">
      <h2 className="text-4xl font-bold text-blue-800 mb-6 text-center">Personal Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <label className="block font-semibold mb-1">Full Name</label>
          <input
            type="text"
            value={personalDetails.fullName}
            readOnly
            placeholder="Enter your full name as per 12th"
            className="w-full p-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            value={personalDetails.email}
            readOnly
            placeholder="Enter your email"
            className="w-full p-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <label className="block font-semibold mb-1">Father's Name</label>
          <input
            type="text"
            value={personalDetails.fatherName}
            readOnly
            placeholder="Enter Father's name as per 12th"
            className="w-full p-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <label className="block font-semibold mb-1">Mother's Name</label>
          <input
            type="text"
            value={personalDetails.motherName}
            readOnly
            placeholder="Enter Mother's Name as per 12th"
            className="w-full p-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <label className="block font-semibold mb-1">Phone Number</label>
          <input
            type="tel"
            value={personalDetails.phone}
            readOnly
            placeholder="Enter your phone number"
            className="w-full p-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <label className="block font-semibold mb-1">Date of Birth</label>
          <input
            type="date"
            value={personalDetails.dob}
            readOnly
            className="w-full p-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md col-span-2">
          <label className="block font-semibold mb-1">Address</label>
          <input
            type="text"
            value={personalDetails.address}
            readOnly
            placeholder="Enter your address"
            className="w-full p-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <label className="block font-semibold mb-1">City</label>
          <input
            type="text"
            value={personalDetails.city}
            readOnly
            placeholder="Enter your city"
            className="w-full p-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <label className="block font-semibold mb-1">State</label>
          <input
            type="text"
            value={personalDetails.state}
            readOnly
            placeholder="Enter your state"
            className="w-full p-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <label className="block font-semibold mb-1">Pincode</label>
          <input
            type="text"
            value={personalDetails.pincode}
            readOnly
            placeholder="Enter your pincode"
            className="w-full p-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <label className="block font-semibold mb-1">Country</label>
          <input
            type="text"
            value={personalDetails.country}
            readOnly
            placeholder="Enter your country"
            className="w-full p-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md col-span-2">
          <label className="block font-semibold mb-1">Gender</label>
          <select
            value={personalDetails.gender}
            readOnly
            className="w-full p-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;