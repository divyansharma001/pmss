import React, { useState } from "react";
import { Upload } from "lucide-react";
import { Link } from "react-router-dom";

const StudentForm = () => {
  const [step, setStep] = useState(1);
  const [imagePreview, setImagePreview] = useState(null);
  const totalSteps = 5;

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const CheckpointProgress = () => {
    return (
      <div className="flex justify-between mb-8 relative">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 -z-10" />
        {[...Array(totalSteps)].map((_, index) => (
          <div key={index} className="text-center relative z-10">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-1 ${
                index + 1 <= step
                  ? "bg-blue-500 text-white"
                  : "bg-white border-2 border-gray-300 text-gray-500"
              }`}
            >
              {index + 1}
            </div>
            <div className="text-xs text-gray-600">Step {index + 1}</div>
          </div>
        ))}
      </div>
    );
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-6">
              Personal Details
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block font-semibold mb-1">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name as per 12th"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-semibold mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="name" className="block font-semibold mb-1">
                  Father's Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter Father's name as per 12th"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-semibold mb-1">
                  Mother's Name
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter Mother's Name as per 12th"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block font-semibold mb-1">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="dob" className="block font-semibold mb-1">
                  Date of Birth
                </label>
                <input
                  id="dob"
                  type="date"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="address" className="block font-semibold mb-1">
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  placeholder="Enter your address"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="city" className="block font-semibold mb-1">
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder="Enter your city"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="state" className="block font-semibold mb-1">
                  State
                </label>
                <input
                  id="state"
                  type="text"
                  placeholder="Enter your state"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="zip" className="block font-semibold mb-1">
                  Pincode
                </label>
                <input
                  id="zip"
                  type="text"
                  placeholder="Enter your pincode"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="country" className="block font-semibold mb-1">
                  Country
                </label>
                <input
                  id="country"
                  type="text"
                  placeholder="Enter your country"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="gender" className="block font-semibold mb-1">
                  Gender
                </label>
                <select id="gender" className="w-full p-2 border rounded">
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-6">
              Educational Details
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="school" className="block font-semibold mb-1">
                  12th Roll Number
                </label>
                <input
                  id="school"
                  type="text"
                  placeholder="Enter your 12th roll number"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="grade" className="block font-semibold mb-1">
                  Year of Passing
                </label>
                <input
                  id="grade"
                  type="text"
                  placeholder="Enter year of passing"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="gpa" className="block font-semibold mb-1">
                  Board
                </label>
                <input
                  id="gpa"
                  type="text"
                  placeholder="Enter your Board (JKBOSE or CBSE)"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="major" className="block font-semibold mb-1">
                  Registered for CUET? If yes:
                </label>
                <input
                  id="major"
                  type="text"
                  placeholder="Enter your CUET registration number"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="achievements"
                  className="block font-semibold mb-1"
                >
                  Academic Achievements
                </label>
                <textarea
                  id="achievements"
                  placeholder="List your academic achievements"
                  className="w-full p-2 border rounded"
                  rows="4"
                ></textarea>
              </div>
              <div>
                <label htmlFor="sat" className="block font-semibold mb-1">
                  Registered for NEET? If yes:
                </label>
                <input
                  id="sat"
                  type="text"
                  placeholder="Enter your NEET registration number"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="act" className="block font-semibold mb-1">
                  Registered for JEE? If yes:
                </label>
                <input
                  id="act"
                  type="text"
                  placeholder="Enter your JEE registration number"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="col-span-2">
                <label className="flex items-center">
                  <input id="honors" type="checkbox" className="mr-2" />
                  <span>Is domicile of J&K or Ladakh?</span>
                </label>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-6">
              Upload Documents
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="transcript"
                  className="block font-semibold mb-1"
                >
                  10th Marksheet
                </label>
                <input
                  id="transcript"
                  type="file"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="id" className="block font-semibold mb-1">
                  12th Marksheet
                </label>
                <input
                  id="id"
                  type="file"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label
                  htmlFor="recommendation"
                  className="block font-semibold mb-1"
                >
                  Certificate of domicile of the State of Jammu & Kashmir
                </label>
                <input
                  id="recommendation"
                  type="file"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="essay" className="block font-semibold mb-1">
                  Polytechnic Diploma Certificate (for Diploma candidates)
                </label>
                <input
                  id="essay"
                  type="file"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label
                  htmlFor="recommendation"
                  className="block font-semibold mb-1"
                >
                  Income Certificate
                </label>
                <input
                  id="recommendation"
                  type="file"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="essay" className="block font-semibold mb-1">
                  Caste Certificate (SC/ST/SEBC), if applicable?
                </label>
                <input
                  id="essay"
                  type="file"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="essay" className="block font-semibold mb-1">
                  Polytechnic Diploma Certificate (for Diploma candidates)
                </label>
                <input
                  id="essay"
                  type="file"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label
                  htmlFor="recommendation"
                  className="block font-semibold mb-1"
                >
                  Pwd Certificate (for Persons with Disabilities (PwD))
                </label>
                <input
                  id="recommendation"
                  type="file"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="essay" className="block font-semibold mb-1">
                  Bank Details
                </label>
                <input
                  id="essay"
                  type="file"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="photo" className="block font-semibold mb-1">
                  Profile Photo
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                  <input
                    id="photo"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <label
                    htmlFor="photo"
                    className="cursor-pointer block text-center"
                  >
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="Profile Preview"
                        className="max-w-full h-auto mx-auto"
                      />
                    ) : (
                      <div className="flex flex-col items-center">
                        <Upload size={48} className="text-gray-400 mb-2" />
                        <span className="text-gray-500">
                          Click to upload photo
                        </span>
                      </div>
                    )}
                  </label>
                </div>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-6">
              Choice Filling
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="first-choice"
                  className="block font-semibold mb-1"
                >
                  First Choice
                </label>
                <select id="first-choice" className="w-full p-2 border rounded">
                  <option value="">Select institute choice</option>
                  <option value="cs">
                    Guru Gobind Singh Indraprastha University - [GGSIPU], New
                    Delhi
                  </option>
                  <option value="engineering">
                    Indraprastha Institute of Information Technology - [ITD],
                    New Delhi
                  </option>
                  <option value="business">Amity University, Noid</option>
                  <option value="arts">
                    Jaypee Institute of Information Technology University -
                    [JIIT], Noida
                  </option>
                  <option value="cs">
                    J.C. Bose University Of Science And Technology, YMCA,
                    Faridabad
                  </option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="second-choice"
                  className="block font-semibold mb-1"
                >
                  First Choice
                </label>
                <select
                  id="second-choice"
                  className="w-full p-2 border rounded"
                >
                  <option value="">Select course choice</option>
                  <option value="cs">Computer Science Engineering</option>
                  <option value="engineering">Information Technology</option>
                  <option value="business">
                    Electronics and Communication Engineering
                  </option>
                  <option value="arts">
                    Electrical and Electronics Engineering
                  </option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="first-choice"
                  className="block font-semibold mb-1"
                >
                  Second Choice
                </label>
                <select id="first-choice" className="w-full p-2 border rounded">
                  <option value="">Select institute choice</option>
                  <option value="cs">
                    Guru Gobind Singh Indraprastha University - [GGSIPU], New
                    Delhi
                  </option>
                  <option value="engineering">
                    Indraprastha Institute of Information Technology - [ITD],
                    New Delhi
                  </option>
                  <option value="business">Amity University, Noid</option>
                  <option value="arts">
                    Jaypee Institute of Information Technology University -
                    [JIIT], Noida
                  </option>
                  <option value="cs">
                    J.C. Bose University Of Science And Technology, YMCA,
                    Faridabad
                  </option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="second-choice"
                  className="block font-semibold mb-1"
                >
                  Second Choice
                </label>
                <select
                  id="second-choice"
                  className="w-full p-2 border rounded"
                >
                  <option value="">Select course choice</option>
                  <option value="cs">Computer Science Engineering</option>
                  <option value="engineering">Information Technology</option>
                  <option value="business">
                    Electronics and Communication Engineering
                  </option>
                  <option value="arts">
                    Electrical and Electronics Engineering
                  </option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="first-choice"
                  className="block font-semibold mb-1"
                >
                  Third Choice
                </label>
                <select id="first-choice" className="w-full p-2 border rounded">
                  <option value="">Select institute choice</option>
                  <option value="cs">
                    Guru Gobind Singh Indraprastha University - [GGSIPU], New
                    Delhi
                  </option>
                  <option value="engineering">
                    Indraprastha Institute of Information Technology - [ITD],
                    New Delhi
                  </option>
                  <option value="business">Amity University, Noid</option>
                  <option value="arts">
                    Jaypee Institute of Information Technology University -
                    [JIIT], Noida
                  </option>
                  <option value="cs">
                    J.C. Bose University Of Science And Technology, YMCA,
                    Faridabad
                  </option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="second-choice"
                  className="block font-semibold mb-1"
                >
                  Third Choice
                </label>
                <select
                  id="second-choice"
                  className="w-full p-2 border rounded"
                >
                  <option value="">Select course choice</option>
                  <option value="cs">Computer Science Engineering</option>
                  <option value="engineering">Information Technology</option>
                  <option value="business">
                    Electronics and Communication Engineering
                  </option>
                  <option value="arts">
                    Electrical and Electronics Engineering
                  </option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="first-choice"
                  className="block font-semibold mb-1"
                >
                  Fourth Choice
                </label>
                <select id="first-choice" className="w-full p-2 border rounded">
                  <option value="">Select institute choice</option>
                  <option value="cs">
                    Guru Gobind Singh Indraprastha University - [GGSIPU], New
                    Delhi
                  </option>
                  <option value="engineering">
                    Indraprastha Institute of Information Technology - [ITD],
                    New Delhi
                  </option>
                  <option value="business">Amity University, Noid</option>
                  <option value="arts">
                    Jaypee Institute of Information Technology University -
                    [JIIT], Noida
                  </option>
                  <option value="cs">
                    J.C. Bose University Of Science And Technology, YMCA,
                    Faridabad
                  </option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="second-choice"
                  className="block font-semibold mb-1"
                >
                  Fourth choice
                </label>
                <select
                  id="second-choice"
                  className="w-full p-2 border rounded"
                >
                  <option value="">Select your course choice</option>
                  <option value="cs">Computer Science</option>
                  <option value="engineering">Engineering</option>
                  <option value="business">Business</option>
                  <option value="arts">Arts</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="third-choice"
                  className="block font-semibold mb-1"
                >
                  Fifth Choice
                </label>
                <select id="third-choice" className="w-full p-2 border rounded">
                  <option value="">Select institute choice</option>
                  <option value="cs">
                    Guru Gobind Singh Indraprastha University - [GGSIPU], New
                    Delhi
                  </option>
                  <option value="engineering">
                    Indraprastha Institute of Information Technology - [ITD],
                    New Delhi
                  </option>
                  <option value="business">Amity University, Noid</option>
                  <option value="arts">
                    Jaypee Institute of Information Technology University -
                    [JIIT], Noida
                  </option>
                  <option value="cs">
                    J.C. Bose University Of Science And Technology, YMCA,
                    Faridabad
                  </option>
                </select>
              </div>
              <div>
                <label htmlFor="campus" className="block font-semibold mb-1">
                  Fifth Choice
                </label>
                <select id="campus" className="w-full p-2 border rounded">
                  <option value="">Select course choice</option>
                  <option value="cs">Computer Science Engineering</option>
                  <option value="engineering">Information Technology</option>
                  <option value="business">
                    Electronics and Communication Engineering
                  </option>
                  <option value="arts">
                    Electrical and Electronics Engineering
                  </option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="start-date"
                  className="block font-semibold mb-1"
                >
                  Preferred Start Date
                </label>
                <input
                  id="start-date"
                  type="date"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="flex items-center">
                  <input id="scholarship" type="checkbox" className="mr-2" />
                  <span>Interested in Scholarship Opportunities</span>
                </label>
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-6">
              Review and Submit
            </h2>
            <p className="text-center mb-4">
              Please review your information before submitting.
            </p>
            <div className="bg-gray-100 p-4 rounded mb-6">
              <p>Personal Details: Completed</p>
              <p>Educational Details: Completed</p>
              <p>Documents: Uploaded</p>
              <p>Choices: Selected</p>
            </div>
            <div className="mb-6">
              <label className="flex items-center">
                <input id="terms" type="checkbox" className="mr-2" />
                <span>I agree to the terms and conditions</span>
              </label>
            </div>
            <button className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300">
              Submit Application
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
      <CheckpointProgress />
      {renderStep()}
      <div className="flex justify-between mt-6">
        <button
          onClick={prevStep}
          disabled={step === 1}
          className={`py-2 px-4 rounded ${
            step === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          } transition duration-300`}
        >
          Previous
        </button>
        <button
          onClick={nextStep}
          disabled={step === totalSteps}
          className={`py-2 px-4 rounded ${
            step === totalSteps
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          } transition duration-300`}
        >
          {step === totalSteps ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default StudentForm;
