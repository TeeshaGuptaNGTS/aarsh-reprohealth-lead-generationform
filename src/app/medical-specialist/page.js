
import React from 'react'
import { logo } from '../../elements/images'; // Adjust the import path as necessary
import Image from 'next/image';
import { CiCircleCheck } from "react-icons/ci";


const Doctor = () => {

  const features = [
    "Expand your reach beyond local geography",
    "Set your own consultation timings",
    "Zero marketing cost to acquire patients",
    "Easy appointment and patient record management",
    "Secure and private online & in-person video consultations",
    "Our team will get back to you to assist you.",
  ];
  const styles = {
    backgroundImage: "linear-gradient(65.64deg, #54efff 4.33%, #056873 105.21%)"
  }
  

  return (
    <div className=''>
      <div className='w-full flex '>
        <div className='w-1/2 flex  flex-col items-center justify-center min-h-screen '>
          <div className='w-[90%] mx-auto '>
            <div className='text-left '>

            <div className='mb-14'>
                  <Image
                src={logo.logoImage}
                alt="logo"
                width={180}
                height={40}
                className="w-[180px] lg:w-[250px]"
              />
            </div>
              <h1 className="heading">Join Our Panel of Trusted Medical Experts</h1>
              <p className=' text-[var(--greyP)] mt-2 w-[80%]'>Fill out the form to connect with patients, grow your practice, and be part of Aarsh ReproHealth’s expert network.</p>
            </div>

            <h3 className='uppercase mt-4'>Why join us?</h3>
            <ul>
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 listing">
                  <CiCircleCheck className="text-[var(--lightBlue)] text-xl" />
                  {feature}
                </li>
              ))}
            </ul>


          </div>
        </div>
        <div className='w-full md:w-1/2 flex justify-center items-center min-h-screen ' style={styles}>
          <form className=' p-4  w-[90%] mx-auto text-white'>
            <div className="w-full flex flex-col gap-4 ">
              <label className="text-[34px] font-semibold w-[90%] ">Medical Specialist Registration Form</label>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="text-[19px]  ">First Name <span className='text-red-500'>*</span></label>
                  <input
                    required
                    type="text"
                    name="firstName"
                    placeholder="Enter First Name"
                    className="mt-2 border border-[var(--White)] bg-[var(--White)] text-[var(--greyP)] focus:outline-none focus:border-[var(--lightBlue)] p-4 rounded w-full"
                  />
                </div>
                <div className="flex-1">
                  <label className="text-[19px]  ">Last Name <span className='text-red-500'>*</span></label>
                  <input
                    required
                    type="text"
                    name="lastName"
                    placeholder="Enter Last Name"
                    className="mt-2 border border-[var(--White)] bg-[var(--White)] text-[var(--greyP)] focus:outline-none focus:border-[var(--lightBlue)] p-4 rounded w-full"
                  />
                </div>
              </div>
              <div>
                <label className="text-[19px]  ">Email <span className='text-red-500'>*</span></label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  className="mt-2 border border-[var(--White)] bg-[var(--White)] text-[var(--greyP)] focus:outline-none focus:border-[var(--lightBlue)] p-4 rounded w-full"
                />
              </div>
              <div>
                <label className="text-[19px]  ">Contact No. <span className='text-red-500'>*</span></label>
                <input
                  required
                  type="tel"
                  name="contactNo"
                  placeholder="Enter Contact Number"
                  className="mt-2 border border-[var(--White)] bg-[var(--White)] text-[var(--greyP)]  focus:outline-none focus:border-[var(--lightBlue)] p-4 rounded w-full"
                />
              </div>
              <button
                type="submit"
                className="mt-4 bg-[#e67ba2] font-[500]  text-[18px] hover:bg-[var(--lightBlue)] text-white p-4 rounded cursor-pointer transition-colors duration-300 w-full"
              >
                Register 
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Doctor