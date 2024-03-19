"use client"
import React, { useState } from 'react'
import Navbar from '../HomePage/Navbar'
import Footer from '../HomePage/Footer'
import Image from 'next/image'
import Link from 'next/link'

const Doctors = () => {

    const [showmore, setShowMore] = useState(false);
    const [hidebutton, setHideButton] = useState(false);
    const handleClick = () => {
        setShowMore(!showmore);
        setHideButton(!hidebutton);
    }
  return (
    <>
    <div>
      <Navbar />
      <div className='flex flex-col  items-center mb-20'>
        <h1 className='text-3xl font-serif mt-10 text-green-700  font-bold'>Our Doctors</h1>
        <p className='text-gray-600 text-xl font-serif font-bold '>Great Doctors if you need your family member to get effective immediate <br /> 
        <span className='ml-20'>
            assistance, emergency
            treatment or a simple consultation.</span>
        </p>
      </div>
      
      <div className='flex '>
        <div className='px-4 text-white  border rounded-lg bg-green-600 ml-72 font-bold font-serif'>All</div>
        <div className='px-4 text-gray-600   font-bold font-serif  border rounded-lg bg-white ml-20'>Neurologist</div>
        <div className='px-4 text-gray-600   font-bold font-serif  border rounded-lg bg-white ml-20'>Cardiologist</div>
        <div className='px-4 text-gray-600   font-bold font-serif  border rounded-lg bg-white ml-20'>Dermatologist</div>
      </div>

      <div className='flex mt-10 items-center'>
      <div className='flex ml-72 w-96 ml h-60 bg-violet-100 border rounded-lg text-center text-white '>
          <Image className='relative right-8'
              src="/doc-1.png"
              alt="Doctor"
              width={200}
              height={100}
            />
            <h2 className='text-black text-2xl relative right-12 top-10 font-sans'>Dr.Wanitha</h2>
            <Link href="/DoctorPage/Appointment"> <button className='text-sm w-40 h-10 font-bold font-serif text-black bg-gray-200  border  rounded-lg right-36  top-32 relative px-5 py-0 hover:transform hover:-translate-y-1 hover:bg-green-700 hover:text-white transition duration-300'>
              Book
            </button>
            </Link>
      </div>
      <div className='flex w-96 h-60 bg-slate-100 border rounded-lg text-white ml-40'>
      <Image className='relative right-8'
              src="/doc-1.png"
              alt="Doctor"
              width={200}
              height={100}
            />
            <h2 className='text-black text-2xl relative right-12 top-10 font-sans'>Dr.Wanitha</h2>
            <Link href="/DoctorPage/Appointment"><button className='text-sm w-40 h-10 font-bold font-serif text-black bg-gray-200  border  rounded-lg right-36  top-32 relative px-5 py-0 hover:transform hover:-translate-y-1 hover:bg-green-700 hover:text-white transition duration-300'>
              Book
            </button>
          </Link>
      </div>

      </div>
      <div className='flex mt-7 mb-10'>
      <div className='flex w-96 ml-72 h-60 bg-stone-100 border rounded-lg text-center text-white '>
          <Image className='relative right-8'
              src="/doc-1.png"
              alt="Doctor"
              width={200}
              height={100}
            />
            <h2 className='text-black text-2xl relative right-12 top-10 font-sans'>Dr.Wanitha</h2>
            <Link href="/DoctorPage/Appointment"> <button className='text-sm w-40 h-10 font-bold font-serif text-black bg-gray-200  border  rounded-lg right-36  top-32 relative px-5 py-0 hover:transform hover:-translate-y-1 hover:bg-green-700 hover:text-white transition duration-300'>
              Book
            </button>
            </Link>
      </div>
      <div className='flex w-96 h-60 bg-orange-100 border rounded-lg text-white ml-40'>
      <Image className='relative right-8'
              src="/doc-1.png"
              alt="Doctor"
              width={200}
              height={100}
            />
            <h2 className='text-black text-2xl relative right-12 top-10 font-sans'>Dr.Wanitha</h2>
            <Link href="/DoctorPage/Appointment"><button className='text-sm w-40 h-10 font-bold font-serif text-black bg-gray-200  border  rounded-lg right-36  top-32 relative px-5 py-0 hover:transform hover:-translate-y-1 hover:bg-green-700 hover:text-white transition duration-300'>
              Book
            </button>
          </Link>
      </div>
      </div>

      {showmore && (
      <div className='flex mt-7 mb-10'>
      <div className='flex w-96 ml-72 h-60 bg-stone-100 border rounded-lg text-center text-white '>
          <Image className='relative right-8'
              src="/doc-1.png"
              alt="Doctor"
              width={200}
              height={100}
            />
            <h2 className='text-black text-2xl relative right-12 top-10 font-sans'>Dr.Wanitha</h2>
            <Link href="/DoctorPage/Appointment"> <button className='text-sm w-40 h-10 font-bold font-serif text-black bg-gray-200  border  rounded-lg right-36  top-32 relative px-5 py-0 hover:transform hover:-translate-y-1 hover:bg-green-700 hover:text-white transition duration-300'>
              Book
            </button>
            </Link>
      </div>
      <div className='flex w-96 h-60 bg-orange-100 border rounded-lg text-white ml-40'>
      <Image className='relative right-8'
              src="/doc-1.png"
              alt="Doctor"
              width={200}
              height={100}
            />
            <h2 className='text-black text-2xl relative right-12 top-10 font-sans'>Dr.Wanitha</h2>
            <Link href="/DoctorPage/Appointment"><button className='text-sm w-40 h-10 font-bold font-serif text-black bg-gray-200  border  rounded-lg right-36  top-32 relative px-5 py-0 hover:transform hover:-translate-y-1 hover:bg-green-700 hover:text-white transition duration-300'>
              Book
            </button>
          </Link>
      </div>
      </div>
   )}

     {showmore && (
     <div className='flex mt-7 mb-10'>
      <div className='flex w-96 ml-72 h-60 bg-stone-100 border rounded-lg text-center text-white '>
          <Image className='relative right-8'
              src="/doc-1.png"
              alt="Doctor"
              width={200}
              height={100}
            />
            <h2 className='text-black text-2xl relative right-12 top-10 font-sans'>Dr.Wanitha</h2>
            <Link href="/DoctorPage/Appointment"> <button className='text-sm w-40 h-10 font-bold font-serif text-black bg-gray-200  border  rounded-lg right-36  top-32 relative px-5 py-0 hover:transform hover:-translate-y-1 hover:bg-green-700 hover:text-white transition duration-300'>
              Book
            </button>
            </Link>
      </div>
      <div className='flex w-96 h-60 bg-orange-100 border rounded-lg text-white ml-40'>
      <Image className='relative right-8'
              src="/doc-1.png"
              alt="Doctor"
              width={200}
              height={100}
            />
            <h2 className='text-black text-2xl relative right-12 top-10 font-sans'>Dr.Wanitha</h2>
            <Link href="/DoctorPage/Appointment"><button className='text-sm w-40 h-10 font-bold font-serif text-black bg-gray-200  border  rounded-lg right-36  top-32 relative px-5 py-0 hover:transform hover:-translate-y-1 hover:bg-green-700 hover:text-white transition duration-300'>
              Book
            </button>
          </Link>
      </div>
      </div>
  )}
  <div className='flex justify-center items-center mb-10'>

{/* {setHideButton && } */}
<button onClick={handleClick} className='border py-2 px-6 bg-gray-300 hover:transform hover:-translate-y-1 hover:bg-slate-700 hover:text-black transition duration-300'>
    {showmore ? 'See Less' : 'See More' } 
</button>
</div>
      <Footer />
      </div>
    </>
  )
}

export default Doctors;
