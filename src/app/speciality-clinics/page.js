"use client";
import React, { useState } from 'react';
import { logo } from '../../elements/images';
import { CiCircleCheck } from "react-icons/ci";
import Image from 'next/image';
import axios from 'axios';
import { toast } from 'react-toastify';

const SpecialityClinics = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    clinicName: '',
    email: '',
    mobileNumber: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "email" ? value.toLowerCase() : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, clinicName, email, mobileNumber } = formData;

    if (!firstName || !lastName || !email || !mobileNumber || !clinicName) {
      toast.error("All fields are required.");
      return;
    }

    const reqBody = {
      name: `${firstName} ${lastName}`.trim(),
      mobileNumber,
      email,
      clinicName,
    };

    try {
      const response = await axios.post(
        `https://6d7d5268aaf1.ngrok-free.app/api/auth/register`,
        reqBody,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      if (response && response.status === 200) {
        toast.success("Registration successful!");
        setFormData({
          firstName: '',
          lastName: '',
          clinicName: '',
          email: '',
          mobileNumber: ''
        });
      } else {
        toast.error("Registration failed. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    }
  };

  const features = [
    "Get listed on India’s first Reproductive Health platform",
    "Accept online booking in one dashboard",
    "Receive bookings of procedures related to reproductive health.",
    "Increase revenue through virtual consultations",
    "Assign flexible doctor time slots - online or in-person.",
    "Manage patient records & consultations easily",
    
  ];

  return (
   <>
    <title>Aarsh ReproHealth</title>
    <div className="w-full bg-white">
      <div className="flex flex-col md:flex-row">
        {/* Left Side */}
        <div className="w-full md:w-1/2 bg-gray-50  p-8 flex flex-col justify-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <Image
              src={logo.logoImage}
              alt="logo"
              width={180}
              height={40}
              className="mb-6"
            />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Join Our Panel of Trusted Specialist Clinic
            </h1>
            <p className="text-gray-600 text-base">
              
 Become a part of Aarsh ReproHealth's Experts' Network to connect with patients, grow your presence and make a difference in people's lives.
            </p>

            <div>
              <h3 className="text-lg font-semibold text-[#056873] uppercase mb-2">Why Join Us ?</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm text-gray-700">
                    <div className='w-[5%]'>
                      <CiCircleCheck className="text-[var(--lightBlue)] text-xl mr-2 mt-1" />
                    </div>
                    <div className='w-[90%]'>{feature}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 flex justify-center items-center bg-gradient-to-br from-[#54efff] to-[#056873] py-12">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg rounded-lg space-y-6"
          >
            <h2 className="text-2xl font-semibold text-[#056873] text-center">
              Specialist Clinic Registration Form
            </h2>
            <p className="text-[#fff] text-base">
              
                            Fill out the form to connect with patients, grow your practice, and be part of Aarsh ReproHealth’s expert network.

</p>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:ring-2 focus:ring-[#54efff] outline-none"
                  placeholder="Enter First Name"
                  required
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:ring-2 focus:ring-[#54efff] outline-none"
                  placeholder="Enter Last Name"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Clinic Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="clinicName"
                value={formData.clinicName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded border border-gray-300 focus:ring-2 focus:ring-[#54efff] outline-none"
                placeholder="Enter Clinic Name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded border border-gray-300 focus:ring-2 focus:ring-[#54efff] outline-none"
                placeholder="Enter Email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number <span className="text-red-500">*</span></label>
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded border border-gray-300 focus:ring-2 focus:ring-[#54efff] outline-none"
                placeholder="Enter Mobile Number"
                required
                 maxLength={12}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#e67ba2] hover:bg-[#056873] text-white font-semibold py-3 rounded transition duration-300"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default SpecialityClinics;
