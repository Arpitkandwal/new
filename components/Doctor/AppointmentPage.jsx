"use client"
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const AppointmentPage = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        comments: ''
      });
    
      const [errors, setErrors] = useState({});
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};
        if (!formData.firstName) {
          newErrors.firstName = 'First name is required';
        }
        if (!formData.lastName) {
          newErrors.lastName = 'Last name is required';
        }
        if (!formData.email) {
          newErrors.email = 'Email address is required';
        }
        if (formData.phone.length !== 10) {
          newErrors.phone = 'Phone number must be of 10 digits';
        }
        if (!formData.comments) {
          newErrors.comments = 'Comments are required';
        }
        setErrors(newErrors);

        // If there are no errors, proceed with form submission
        if (Object.keys(newErrors).length === 0) {
            router.push('/DoctorPage/Payment')
        }
      };
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-4xl font-semibold font-serif text-green-600 mb-5 mt-10'>Book Your Appointment</h1>
      <p className='text-gray-500 text-xl font-serif font-bold mb-5 '>Great Doctors if you need your family member to get effective immediate <br /> 
        <span className='ml-20'>
            assistance, emergency
            treatment or a simple consultation.</span>
        </p>

        <div className="border w-1/2 px-5 py-5 border-gray-900/10 pb-12 mb-10 rounded-lg">
          <h2 className="font-semibold leading-7 text-white text-xl justify-center flex border bg-green-600">Book Your Appointment</h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  autoComplete="given-name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  autoComplete="family-name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="email" className="block text-sm font-medium leading-7 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Department
              </label>
              <div className="mt-2">
                <select
                  id="department"
                  name="department"
                  autoComplete="department"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Neurologist</option>
                  <option>Physician</option>
                  <option>Dermatologist</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Phone No.
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  autoComplete="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.phone && <p className="text-red-500">{errors.phone}</p>}
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Comments
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="comments"
                  id="comments"
                  autoComplete="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.comments && <p className="text-red-500">{errors.comments}</p>}
              </div>
            </div>
          </div>

          <div className='sm:col-span-4 justify-center flex'>
              <button onClick={handleSubmit} className="text-md bg-green-600 text-white rounded-lg mt-5 px-6 py-3 hover:transform hover:-translate-y-1 hover:bg-green-700 hover:text-white transition duration-300">Book Appointment</button>
          </div>
        </div>
        </div>
  );
}

export default AppointmentPage;
