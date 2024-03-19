import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Final = () => {
  return (
    <div className='flex flex-col  items-center justify-center mt-20 mb-40'>
      <div className='mb-8'>
        <Image  
          src='/yes.jpg'
          alt='yes'
          height={200}
          width={200}
        />
      </div>
      <h1 className='text-4xl text-green-600 font-bold font-serif'>
        Your Appointment Booked Successfully.
      </h1>
      <Link href='/'>
      <button className='border text-white px-6 py-2 bg-green-600 rounded-lg mt-10 hover:transform hover:-translate-y-1 hover:bg-green-700 hover:text-white transition duration-300'>Back to Home</button>
      </Link>
    </div>
  );
}

export default Final;
