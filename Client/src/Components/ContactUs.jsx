import React, { useState } from "react";
import innerSlide from '../assets/contactUs.jpg';
// import axios from "axios";
// import { toast } from "react-toastify";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    query: ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
    else if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = "Mobile number should be 10 digits";
    if (!formData.query.trim()) newErrors.query = "Query is required";
    else if (formData.query.trim().split(/\s+/).length > 150) newErrors.query = "Query should not exceed 150 words";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (validateForm()) {
    //   try {
    //     const response = await axios.post(`${process.env.REACT_APP_PUBLIC_SERVER_URI}/contact-us`, formData);
    //     alert(response.data.message);
    //     setFormData({ name: "", email: "", mobile: "", query: "" });
    //   } catch (error) {
    //     // alert("An error occurred. Please try again.");
    //     toast.error("An error occurred. Please try again.")
    //   }
    // }
  };

  return (
    <>
      <section className="relative">
        <img src={innerSlide} alt="" className="w-full h-auto" />
      </section>

      <section className=" bg-gray-100">
        <div className="container mx-auto p-40 py-10">
          <div className="bg-yellow-50 shadow-md rounded-lg p-6 ">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Name input */}
                <div className="form-group">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
                </div>

                {/* Email input */}
                <div className="form-group">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
                </div>

                {/* Mobile input */}
                <div className="form-group">
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                  <input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                  {errors.mobile && <span className="text-red-500 text-xs">{errors.mobile}</span>}
                </div>

                {/* Query input */}
                <div className="form-group col-span-3">
                  <label htmlFor="query" className="block text-sm font-medium text-gray-700">Query</label>
                  <textarea
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
                    name="query"
                    value={formData.query}
                    onChange={handleChange}
                  ></textarea>
                  {errors.query && <span className="text-red-500 text-xs">{errors.query}</span>}
                </div>

                {/* Submit button */}
                <div className="col-span-3">
                  <button type="submit" className="mt-4 w-20 ml-[540px] bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
