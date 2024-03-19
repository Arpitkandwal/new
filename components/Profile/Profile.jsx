"use client"
import React, { useState } from 'react';
import Navbar from '../HomePage/Navbar';
import Footer from '../HomePage/Footer';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
import { FaMale, FaBirthdayCake, FaPhone, FaMapMarkerAlt, FaTint } from "react-icons/fa";

const Profile = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Navbar />
      <div className='flex justify-left mt-10'>
        <Link href = '/'>
        <FaArrowAltCircleLeft className='ml-40 mt-2 text-3xl' />
        </Link>
        <h1 className='text-3xl font-bold font-serif ml-10 text-green-600'>User Profile</h1>
      </div>

      <div className="flex items-center mb-10">
        <div className='flex justify-center ml-60 items-center w-40 h-40 border text-center bg-green-300 rounded-full text-black text-xl font-serif '>
          <Image
            alt='person'
            src='/person.png'
            height={250}
            width={250}
          />
        </div>
        <div className="relative top-10 mt-40 mb-5 right-36">
          <h3 className='text-md text-black font-bold'>Adam</h3>
          <h3 className='text-md text-black font-bold'>28 years old</h3>
        </div>

        <div className="ml-60">
          <div className="flex relative rounded-lg items-center w-96 h-10 bg-gradient-to-l from-blue-500 to-green-700 text-white text-xl font-serif mb-4">
          <Link href='/Profile/Appointment'>  <span  className='ml-5'> Appointment  <FaArrowAltCircleRight className='ml-72 ' /></span>
          </Link>
          </div>
          <div className="flex relative rounded-lg items-center w-96 h-10 bg-gradient-to-l from-blue-500 to-green-700 text-white text-xl font-serif mb-4">
            <span className='ml-5'> Saved Doctors</span>
            <FaArrowAltCircleRight className='ml-40' />
          </div>
          <div className="flex relative rounded-lg items-center w-96 h-10 bg-gradient-to-l from-blue-500 to-green-700 text-white text-xl font-serif mb-4">
            <span className='ml-5'> Patient Health History</span> <FaArrowAltCircleRight className='ml-20' />
          </div>
          <button onClick={() => setShowModal(true)} className='border ml-28 mt-10 bg-green-700 text-white rounded-lg px-6 py-2'>Update Setting</button>
        </div>

        {/* Modal */}
        {showModal && (
          <div className='fixed inset-0 flex justify-center items-center z-50 bg-white bg-opacity-75'>
          <div className='bg-white rounded-lg shadow-md p-8 w-1/2'>
            <button onClick={() => {
              setShowModal(!showModal)
            }} className='text-2xl border bg-red-500 px-3 text-white'>X</button>
            <h2 className='font-bold'>Personal Information:</h2>
            <div className="grid grid-cols-1 gap-y-6">
              <div className='flex gap-4'>
                <div className="w-1/2">
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                    First name
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    placeholder='First Name'
                    autoComplete="given-name"
                    className="block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900 ">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    placeholder='Last Name'
                    autoComplete="family-name"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className='flex gap-4'>
                <div className="w-1/2">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder='example@gmail.com'
                    autoComplete="email"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                    Phone No.
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder='92XXXXXX'
                    autoComplete="tel"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="bio" className="block text-sm font-medium leading-6 text-gray-900">
                  Bio
                </label>
                <textarea
                  name="bio"
                  id="bio"
                  placeholder='Bio'
                  autoComplete="bio"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                />
              </div>
              <button className='bg-green-600 px-5 py-2 border text-white font-bold text-2xl' onClick={() => {
          setShowModal(!showModal)
        }}>Update</button>
            </div>
          </div>
        </div>
        )}
      </div>


      <div className='ml-72 flex flex-col mb-20'>
    <div className='flex items-center'>
    <FaMale className='mr-2'  />
    <h3 className='font-bold text-xl'>Gender</h3>
  <span className='ml-4 text-md text-gray-500'>Male</span>
  </div>
  
  <div className='flex items-center mt-3'>
    <FaBirthdayCake className='mr-2' />
    <h3 className='font-bold text-xl'>DOB</h3>
  <span className='ml-6 text-md text-gray-500'>20/01/1996</span>
  </div>
  
  <div className='flex items-center mt-3'>
    <FaPhone className='mr-2' />
    <h3 className='font-bold text-xl'>Phone No</h3>
  <span className='ml-6 text-md text-gray-500'>9876543251</span>
  </div>
  
  <div className='flex items-center mt-3'>
    <FaMapMarkerAlt className='mr-2' />
    <h3 className='font-bold text-xl'>Address</h3>
  <span className='ml-6 text-md text-gray-500'>Delhi, India</span>
  </div>
  
  <div className='flex items-center mt-3'>
    <FaTint className='mr-2' />
    <h3 className='font-bold text-xl'>Blood Group</h3>
  <span className='ml-6 text-md text-gray-500'>B</span>
  </div>
</div>
      <Footer />
    </div>
  )
}

export default Profile;
