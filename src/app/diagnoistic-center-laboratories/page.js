"use client";
import React from 'react'
import {diagnosticimg} from '../../elements/images'; // Adjust the import path as necessary
import Image from 'next/image';

const DiagnosticCenterLaboratories = () => {
  return (
    <div className=''>
      <div className='w-full flex '>
        <div className='w-1/2'>
          <Image
          src={diagnosticimg?.diagnosticImage}
          alt='not found diagnostic-center-laboratories image'
          className='w-full h-screen object-cover'
          width={500}
          height={500}
          />
        </div>
        <div className='w-full md:w-1/2 flex justify-center items-center min-h-screen'>
          <form className=' p-4  w-[80%] mx-auto '>
            <div className="w-full flex flex-col gap-4 ">
              <label className="text-lg font-semibold text-[var(--greyP)]">Diagnoistic Center & Laboratories Feature</label>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="text-sm  text-[var(--greyP)]">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter First Name"
                    className="border border-[var(--greyP)]  focus:outline-none focus:border-[var(--lightBlue)] p-4 rounded w-full"
                  /></div>
                <div className="flex-1">
                  <label className="text-sm  text-[var(--greyP)]">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Enter Last Name"
                    className="border border-[var(--greyP)]  focus:outline-none focus:border-[var(--lightBlue)] p-4 rounded w-full"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm  text-[var(--greyP)]">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  className="border border-[var(--greyP)]  focus:outline-none focus:border-[var(--lightBlue)] p-4 rounded w-full"
                />
              </div>
              <div>
                <label className="text-sm  text-[var(--greyP)]">Contact No.</label>
                <input
                  type="tel"
                  name="contactNo"
                  placeholder="Enter Contact Number"
                  className="border border-[var(--greyP)]  focus:outline-none focus:border-[var(--lightBlue)] p-4 rounded w-full"
                />
              </div>


              <button
                type="submit"
                className="bg-[var(--lightBlue)] hover:bg-[var(--lightBlue)] text-white p-4 rounded cursor-pointer transition-colors duration-300 w-full"
              >
                Submit
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default DiagnosticCenterLaboratories