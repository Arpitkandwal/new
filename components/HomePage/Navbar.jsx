"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-green-700 to-green-900 p-4 flex justify-between items-center sticky top-0 z-10 ">
      <div>
        <Link href="/" className="text-white text-lg font-bold ml-20">
            Doctor +
        </Link>
      </div>

      <div className="flex items-center mr-48">
        <input
          type="text"
          placeholder="Search Doctor"
          className="px-4 py-2 rounded-l-md focus:outline-none"
        />
        <button className="px-4 py-2 bg-white text-green-500 rounded-r-md font-bold ">
          Search
        </button>
        <ul className="flex space-x-4 ml-8">
          <li>
            <Link href="/" className='text-white underline'>Home
            </Link>
          </li>
          <li>
            <Link href="/" className="text-white">Services
              
            </Link>
          </li>

          <li>
            <Link href="/" className="text-white">About Us
            </Link>
          </li>
          <div className="flex items-center">
        <Link href='/Profile'>
          <Image
          src='/profile.png'
          width={40}
          height={40}
           />
           </Link>
          </div>
          {/* <li>
            <Link href="/" className="text-white">Register
            </Link>
          </li> */}
        </ul>
        {/* <div>
          <Link href="/">
            <button className='bg-white ml-5 rounded-md px-3 py-1'>Login</button>
            </Link>
        </div> */}
      </div>
    </nav>

  )
}

export default Navbar;
