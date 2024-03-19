import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeadSection = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex mt-16">
          <div className="ml-40">
            <h1 className="text-4xl text-green-700 text-left font-bold mb-6 ">
              Find your nearby doctor
              <br />
              & book your appointment
              <br />
              & get treatment fast
            </h1>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h1 className='text-green-700 text-center text-2xl font-serif'>Let's Find Your Perfect Doctor</h1>
              <label htmlFor="appointmentType" className="block text-sm font-medium text-gray-700 ml-10 mt-2">Appointment Type</label>
              <select name="appointmentType" id="appointmentType" className='ml-10 mt-2 w-56 py-2 pl-3 pr-10 border border-gray-300 rounded-md bg-white shadow-m'>
                <option value="All">All Type</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Physician">Physician</option>
                <option value="Surgeon">Surgeon</option>
              </select>
              <label htmlFor="patientName" className="block text-sm font-medium text-gray-700 ml-10 mt-2">Patient Name</label>
              <input type="text" placeholder='Enter Patient Name' className='ml-10 mt-2 w-56 py-2 pl-3 pr-10 border border-gray-300 rounded-md bg-white shadow-m' />
              <div className='mt-5 ml-20'>
                <Link href="/DoctorPage">
         <button className='text-md bg-green-600 text-white rounded-lg  px-7 py-3 hover:transform hover:-translate-y-1 hover:bg-green-700 hover:text-white transition duration-300'>
        Book Now
        </button>
        </Link>
              </div>
            </div>
          </div>
          <div className="flex relative justify-center items-center ml-40">
            <div className="absolute inset-0 flex justify-center items-center ml-8">
              <svg id="visual" viewBox="0 0 960 540" width="960" height="540" version="1.1"><rect x="0" y="0" width="960" height="540" fill="#FFFFFF"></rect><g transform="translate(491.267974972801 252.9826348850867)"><path d="M114.3 -193.9C169.6 -166.1 250.7 -178.8 311.9 -153.2C373.1 -127.7 414.6 -63.8 393.3 -12.3C372.1 39.3 288.3 78.7 233.9 116.2C179.6 153.7 154.8 189.4 120.7 236.8C86.7 284.1 43.3 343.1 4.6 335.1C-34.2 327.2 -68.3 252.4 -120.3 215.4C-172.3 178.4 -242 179.2 -303.7 149.6C-365.3 120 -418.9 60 -421.4 -1.4C-423.8 -62.8 -375.2 -125.7 -317.2 -161.8C-259.3 -197.8 -192.2 -207.2 -137.7 -235.4C-83.3 -263.7 -41.7 -310.8 -6.1 -300.3C29.5 -289.8 59.1 -221.6 114.3 -193.9" fill="#009473"></path></g>
            </svg>
          </div>
          <div className="relative flex justify-center items-center ">
            <Image
              src="/doctor.png"
              alt="Doctor"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>

      {/* Wrapping circle div's with Rectangle div */}
      <div className="flex relative  top-10 justify-center rounded-lg items-center w-1/2 h-20 bg-gradient-to-l from-blue-500 to-green-700 text-white  text-xl font-serif">
      Easy Steps to book your Appointment
      </div>
      <div className="flex justify-center rounded-lg items-center w-full max-w-screen-lg h-40 bg-gradient-to-l from-green-500 to-green-900 mb-40">
      <div className="flex justify-between">
      <div className="flex flex-col-reverse justify-center items-center w-60 h-60 border text-center bg-white rounded-full text-black text-xl font-serif mt-52">
  <h2 className='flex justify-center items-center'>Easy Way to make payment in multiple gateway.</h2>
  <div className='flex justify-center items-center w-10 h-10 border text-center bg-green-700 rounded-full text-white mt-1'>1</div>
</div>

<div className="flex flex-col-reverse justify-center items-center w-60 h-60 border text-center bg-white rounded-full text-black text-xl font-serif mx-28 mt-52">
  <h2 className='flex justify-center items-center'><br /> Select The location <br /> and Search nearby <br /> doctor.</h2>
  <div className='flex justify-center items-center w-10 h-10 border text-center bg-green-700 rounded-full text-white mt-1'>2</div>
</div>

<div className="flex flex-col-reverse justify-center items-center w-60 h-60 border text-center bg-white rounded-full text-black text-xl font-serif mt-52">
  <h2 className='flex justify-center items-center'> Schedule and Book <br />your date and time <br />for appointment</h2>
  <div className='flex justify-center items-center w-10 h-10 border text-center bg-green-700 rounded-full text-white'>3</div>
</div>

</div>

</div>

  <div className='flex justify-center items-center mb-10 ml-40'>
    <Image
    alt='doc'
    src='/doc-1.png'
    width={300}
    height={300}
    />
  <div className='text-green-700 text-center font-bold ml-60'>
       <h1 className='text-3xl mr-8'>
       Experienced doctor analyse the patient <br />
       </h1>
       <div className="flex flex-col">
       <h1 className='text-3xl mb-5 mr-32'>giving them a Proper Treatment</h1>
       <h5 className='relative right-52 text-gray-500'>Doctor Availability</h5>
      <h5 className='relative right-48 text-gray-500'>Treatment & Consulting</h5>
      <h5 className='relative right-52 text-gray-500'>Top Specialist Doctor</h5>
      <h5 className='relative right-44 text-gray-500'>Apply Coupon for Treatment</h5>
       </div>
       <Link href="/DoctorPage">
         <button className='mr-96 mt-5 text-md bg-green-600 text-white rounded-lg px-6 py-3 hover:transform hover:-translate-y-1 hover:bg-green-700 hover:text-white transition duration-300'>
        Book Appointment
        </button>
        </Link>
        </div>
        </div>

    {/* <div className='flex justify-center items-center w-10 h-10 border text-center bg-green-700 rounded-full relative right-96 text-white' style={shouldApplyTop96 ? { top: '-47.5rem'} : {}} >1</div>
    <div className='flex justify-center items-center w-10 h-10 border text-center bg-green-700 rounded-full relative  text-white' style={shouldApplyTop96 ? { top: '-50.5rem'} : {}} >2</div>
    <div className='flex justify-center items-center w-10 h-10 border text-center bg-green-700 rounded-full relative left-96 text-white' style={shouldApplyTop96 ? { top: '-53rem'} : {}} >3</div>

    <div className="flex justify-center rounded-lg items-center w-96 h-20 bg-gradient-to-l from-blue-500 to-green-700 text-white text-xl font-serif relative" style={shouldApplyTop96 ? { bottom: '64rem'} : {}}>
      Easy Steps to book your Appointment
      </div>
      <div className="flex relative justify-center items-center ml-40">
     <div className="relative flex justify-center items-center right-96" style={shouldApplyTop96 ? { bottom: '48rem'} : {}} >
            <Image
              src="/doc-1.png"
              alt="Doctor"
              width={300}
              height={300}
            />
          </div>
          </div>
       </div>
       <div className='left-60 text-green-700 text-center font-bold relative' style={shouldApplyTop96 ? { bottom: '68rem'} : {}}>
       <h1 className='text-3xl mr-8'>
       Experienced doctor analyse the patient <br />
       </h1>
       <h1 className='text-3xl mb-5 mr-32'>giving them a Proper Treatment</h1>
       <h5 className='relative right-52 text-gray-500'>Doctor Availability</h5>
       <h5 className='relative text-gray-500' style={shouldApplyTop96 ? { right: '11.8rem'} : {}}>Treatment & Consulting</h5>
       <h5 className='relative text-gray-500' style={shouldApplyTop96 ? { right: '12.5rem'} : {}}>Top Specialist Doctor</h5>
       <h5 className='relative text-gray-500' style={shouldApplyTop96 ? { right: '10.8rem'} : {}}>Apply Coupon for Treatment</h5>

       <button className='mr-96 mt-5 text-md bg-green-600 text-white rounded-lg px-6 py-3 hover:transform hover:-translate-y-1 hover:bg-green-700 hover:text-white transition duration-300'>
        Book Appointment
        </button> */}
       </div>
    </>
  )
}

export default HeadSection;
