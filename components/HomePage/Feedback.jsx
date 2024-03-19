import React from 'react';
import Image from 'next/image';

const Feedback = () => {
  return (
    <>
<div className='flex flex-col items-center mt-10'>
    <h2 className='text-green-800 underline text-3xl relative right-96' >
     Customers Feedback
     </h2>
    <p className='text-gray-600 text-xl relative right-80'>Our users share stories of satisfaction, trust, <br /> and exceptional experiences. Explore now!</p>

    <div className='flex mt-10'>
    <div className='flex justify-center items-center w-40 h-40 border text-center bg-green-300 rounded-full text-black text-xl font-serif '>
      <Image
      alt='person'
          src='/person.png'
          height={250}
          width={250}
        />
      </div>

      <div className='flex justify-center items-center w-40 h-40 border text-center bg-green-300 rounded-full relative text-black text-xl font-serif mx-60'>
      <Image
      alt='person1'
          src='/person-2.png'
          height={200}
          width={200}
        />
      </div>

      <div className='flex justify-center items-center w-40 h-40 border text-center bg-green-300 rounded-full text-black text-xl font-serif'>
      <Image
      alt='person2'
          src='/person.png'
          height={230}
          width={230}
        />
      </div>
     
  </div> 
     <div className='flex mt-5 text-lg'>
      <h2 className=' text-black  '>Owen Evans</h2>
      <h2 className='text-black mx-72 '>Natalie Summers</h2>
      <h2 className=' text-black  '>Owen Evans</h2>
      </div>
      <div className="flex mb-16">
        <h5 className='text-sm' >Lorem ipsum dolor sit amet consectetur adipisicing elit.
      <br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </h5>
      
       <h5 className='text-sm mx-24'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
      <br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </h5>

      <h5 className='text-sm' >Lorem ipsum dolor sit amet consectetur adipisicing elit.
      <br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </h5>
      </div>
  </div>
    

   {/* <div className='flex flex-col items-center'>
    <h2 className='text-green-800 underline text-3xl relative right-96' style={shouldapplytop96 ? {top: '-115rem'} : {}}>
     Customers Feedback
     </h2>
    <p className='text-gray-600 text-xl relative right-80' style={shouldapplytop96 ? {top: '-115rem'} : {}}>Our users share stories of satisfaction, trust, <br /> and exceptional experiences. Explore now!</p>

    <div className='flex justify-center items-center w-40 h-40 border text-center bg-green-300 rounded-full relative text-black text-xl font-serif right-96' style={shouldapplytop96 ? {top: '-112rem'} : {}}>
      <Image
          src='/person.png'
          height={250}
          width={250}
        />
        <h2 className='relative text-black right-20 top-32'>Owen Evans</h2>
      </div>
      <h5 className='relative text-sm' style={shouldapplytop96 ? {top: '-104rem', left: '-26rem'} : {}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
      <br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </h5>


      <div className='flex justify-center items-center w-40 h-40 border text-center bg-green-300 rounded-full relative text-black text-xl font-serif left-96' style={shouldapplytop96 ? {top: '-126rem'} : {}}>
      <Image
          src='/person-2.png'
          height={200}
          width={200}
        />
        <h2 className='relative text-black right-20 top-32'>Natalie Summers</h2>
      </div>
      <h5 className='relative text-sm' style={shouldapplytop96 ? {top: '-117rem', left: '26rem'} : {}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
      <br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </h5>


      <div className='flex justify-center items-center w-40 h-40 border text-center bg-green-300 rounded-full relative text-black text-xl font-serif' style={shouldapplytop96 ? {top: '-140rem'} : {}}>
      <Image
          src='/person.png'
          height={230}
          width={230}
        />
         <h2 className='relative text-black right-20 top-32'>Owen Evans</h2>
      </div>
      <h5 className='relative text-sm' style={shouldapplytop96 ? {top: '-131rem', left: '1rem'} : {}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
      <br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </h5>
  </div>  */}
  </>
  )
}

export default Feedback
