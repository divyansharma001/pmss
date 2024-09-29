import React from "react";

const EducationalDetails = () => {
  // Dummy data for demonstration
  const educationalDetails = {
    rollNumber: "123456",
    yearOfPassing: "2022",
    board: "CBSE",
    cuetRegistration: "CUET123456",
    academicAchievements: "Top 10% in Class 12, Science Olympiad Winner",
    neetRegistration: "NEET123456",
    jeeRegistration: "JEE123456",

    domicile: "Yes",
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-50 p-8 rounded-lg shadow-lg mb-6">
      <h2 className="text-4xl font-bold text-blue-800 mb-6 text-center">Educational Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <label className="block font-semibold mb-1">12th Roll Number</label>
          <input
            type="text"
            value={educationalDetails.rollNumber}
            readOnly
            placeholder="Enter your 12th roll number"
            className="w-full p-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <label className="block font-semibold mb-1">Year of Passing</label>
          <input
            type="text"
            value={educationalDetails.yearOfPassing}
            readOnly
            placeholder="Enter year of passing"
            className="w-full p-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <label className="block font-semibold mb-1">Board</label>
          <input
            type="text"
            value={educationalDetails.board}
            readOnly
            placeholder="Enter your Board (JKBOSE or CBSE)"
            className="w-full p-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <label className="block font-semibold mb-1">Registered for CUET? If yes:</label>
          <input
            type="text"
            value={educationalDetails.cuetRegistration}
            readOnly
            placeholder="Enter your CUET registration number"
            className="w-full p-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <label className="block font-semibold mb-1">Academic Achievements</label>
          <input
            type="text"
            value={educationalDetails.academicAchievements}
            readOnly
            placeholder="List your academic achievements"
            className="w-full p-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <label className="block font-semibold mb-1">Registered for NEET? If yes:</label>
          <input
            type="text"
            value={educationalDetails.neetRegistration}
            readOnly
            placeholder="Enter your NEET registration number"
            className="w-full p-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <label className="block font-semibold mb-1">Registered for JEE? If yes:</label>
          <input
            type="text"
            value={educationalDetails.jeeRegistration}
            readOnly
            placeholder="Enter your JEE registration number"
            className="w-full p-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md col-span-2">
          <label className="block font-semibold mb-1">Is domicile of J&K or Ladakh?</label>
          <input
            type="text"
            value={educationalDetails.domicile}
            readOnly
            placeholder="Yes/No"
            className="w-full p-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default EducationalDetails;