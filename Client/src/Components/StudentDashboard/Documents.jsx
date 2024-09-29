import React from "react";

const UploadDocuments = () => {
  // Dummy data for demonstration
  const documents = {
    tenthMarksheet: {
      name: "10th_Marksheet.pdf",
      type: "pdf",
    },
    twelfthMarksheet: {
      name: "12th_Marksheet.pdf",
      type: "pdf",
    },
    domicileCertificate: {
      name: "Domicile_Certificate.pdf",
      type: "pdf",
    },
    polytechnicDiploma: {
      name: "Diploma_Certificate.pdf",
      type: "pdf",
    },
    incomeCertificate: {
      name: "Income_Certificate.pdf",
      type: "pdf",
    },
    casteCertificate: {
      name: "Caste_Certificate.pdf",
      type: "pdf",
    },
    pwdCertificate: {
      name: "PWD_Certificate.pdf",
      type: "pdf",
    },
    bankDetails: {
      name: "Bank_Details.pdf",
      type: "pdf",
    },
    profilePhoto: {
      name: "Profile_Photo.jpg",
      type: "image",
    },
  };

  return (
    <div className="bg-blue-50 p-8 rounded-lg shadow-lg mb-6">
      <h2 className="text-4xl font-bold text-indigo-800 mb-6 text-center">Upload Documents</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(documents).map(([label, { name, type }]) => (
          <div key={label} className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
            <div className="flex items-center">
              <div className={`w-10 h-10 flex items-center justify-center rounded-full ${type === "pdf" ? "bg-red-200" : "bg-blue-200"}`}>
                {type === "pdf" ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h10M7 12h10m-5 5h5" />
                  </svg>
                ) : (
                  <img src="https://via.placeholder.com/24" alt="Profile" className="rounded-full" />
                )}
              </div>
              <span className="ml-4 text-gray-700">{name}</span>
            </div>
            <button className="text-indigo-600 hover:text-indigo-800 font-semibold">Change</button>
            <button className="text-indigo-600 hover:text-indigo-800 font-semibold">View</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadDocuments;