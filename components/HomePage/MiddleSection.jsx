import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MiddleSection = () => {
  return (
    <>
    <div className='flex flex-col items-center mt-10'>
      <h1 className='relative text-green-700 underline text-3xl font-serif font-bold'>
        Various Specialist are here for you to take care of your Health
        </h1>
      <h2 className='relative text-gray-600 text-xl font-serif font-bold'>
        Doctors are available at any time to take care of your health
        </h2>
        <div className="flex justify-center mt-7">
  <div className='flex w-80 h-60 bg-yellow-100 border rounded-lg text-center text-white'>
    <Image className='relative left-28'
      src="/doctor.png"
      alt="Doctor"
      width={300}
      height={100}
    />
    <h2 className='relative right-64 text-black text-2xl font-serif top-5'>Specialist Oncologist</h2>
    <Link href="/DoctorPage"><button className='text-sm w-40 h-10 text-black bg-gray-200 border rounded-lg right-96 ml-8 top-32 relative px-5 py-0 hover:transform hover:-translate-y-1 hover:bg-green-700 hover:text-white transition duration-300'>Read More</button>
    </Link>
  </div>

  <div className='flex w-80 h-60 bg-blue-100 border rounded-lg text-white mx-28'>
    <Image className='relative left-28'
      src="/doctor.png"
      alt="Doctor"
      width={300}
      height={100}
    />
    <h2 className='relative right-64 text-black text-2xl font-serif top-5'>ENT Specialist</h2>
    <Link href="/DoctorPage"><button className='text-sm w-40 h-10 text-black bg-gray-200 border rounded-lg right-96 ml-8 top-32 relative px-5 py-0 hover:transform hover:-translate-y-1 hover:bg-green-700 hover:text-white transition duration-300'>Read More
    </button>
    </Link>
  </div>

  <div className='flex w-80 h-60 bg-pink-100 border rounded-lg text-white relative'>
    <Image className='relative left-28'
      src="/doctor.png"
      alt="Doctor"
      width={300}
      height={100}
    />
    <h2 className='relative right-64 text-black text-2xl font-serif top-5'>Specialist Endocrinologis</h2>
    <Link href="/DoctorPage"><button className='text-sm w-40 h-10 text-black bg-gray-200 border rounded-lg right-96 top-32 relative px-5 py-0 hover:transform hover:-translate-y-1 hover:bg-green-700 hover:text-white transition duration-300'>Read More
    </button>
    </Link>
  </div>
</div>
        <div className="flex justify-center mt-7 mb-7">
  <div className='flex w-80 h-60 bg-cyan-100 border rounded-lg text-center text-white'>
    <Image className='relative left-28'
      src="/doctor.png"
      alt="Doctor"
      width={300}
      height={100}
    />
    <h2 className='relative right-64 text-black text-2xl font-serif top-5'>Specialist Oncologist</h2>
    <Link href="/DoctorPage"><button className='text-sm w-40 h-10 text-black bg-gray-200 border rounded-lg right-96 ml-8 top-32 relative px-5 py-0 hover:transform hover:-translate-y-1 hover:bg-green-700 hover:text-white transition duration-300'>Read More
    </button>
    </Link>
  </div>

  <div className='flex w-80 h-60 bg-indigo-100 border rounded-lg text-white mx-28'>
    <Image className='relative left-28'
      src="/doctor.png"
      alt="Doctor"
      width={300}
      height={100}
    />
    <h2 className='relative right-64 text-black text-2xl font-serif top-5'>ENT Specialist</h2>
    <Link href="/DoctorPage"><button className='text-sm w-40 h-10 text-black bg-gray-200 border rounded-lg right-96 ml-8 top-32 relative px-5 py-0 hover:transform hover:-translate-y-1 hover:bg-green-700 hover:text-white transition duration-300'>Read More
    </button>
    </Link>
  </div>

  <div className='flex w-80 h-60 bg-red-100 border rounded-lg text-white relative'>
    <Image className='relative left-28'
      src="/doctor.png"
      alt="Doctor"
      width={300}
      height={100}
    />
    <h2 className='relative right-64 text-black text-2xl font-serif top-5'>Specialist Endocrinologis</h2>
    <Link href="/DoctorPage"> <button className='text-sm w-40 h-10 text-black bg-gray-200 border rounded-lg right-96 top-32 relative px-5 py-0 hover:transform hover:-translate-y-1 hover:bg-green-700 hover:text-white transition duration-300'>Read More
    </button>
    </Link>
  </div>
</div>
</div>

<div className='flex flex-col items-center mt-10'>
      <h1 className='relative text-green-700 underline text-3xl font-serif font-bold' >Our Top Rated Doctors</h1>
      <h2 className='relative text-gray-600 text-xl font-serif font-bold' >Top Rated doctors are available at any time for your help</h2>

      <div className='flex mt-7'>
      <div className='flex w-96 h-60 bg-violet-100 border rounded-lg text-center text-white '>
          <Image className='relative right-8'
              src="/doc-1.png"
              alt="Doctor"
              width={200}
              height={100}
            />
            <h2 className='text-black text-2xl relative right-12 top-10 font-sans'>Dr.Wanitha</h2>
            <Link href="/DoctorPage"> <button className='text-sm w-40 h-10 font-bold font-serif text-black bg-gray-200  border  rounded-lg right-36  top-32 relative px-5 py-0 hover:transform hover:-translate-y-1 hover:bg-green-700 hover:text-white transition duration-300'>
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
            <Link href="/DoctorPage"><button className='text-sm w-40 h-10 font-bold font-serif text-black bg-gray-200  border  rounded-lg right-36  top-32 relative px-5 py-0 hover:transform hover:-translate-y-1 hover:bg-green-700 hover:text-white transition duration-300'>
              Book
            </button>
          </Link>
      </div>

      </div>
      <div className='flex mt-7 mb-10'>
      <div className='flex w-96 h-60 bg-stone-100 border rounded-lg text-center text-white '>
          <Image className='relative right-8'
              src="/doc-1.png"
              alt="Doctor"
              width={200}
              height={100}
            />
            <h2 className='text-black text-2xl relative right-12 top-10 font-sans'>Dr.Wanitha</h2>
            <Link href="/DoctorPage"> <button className='text-sm w-40 h-10 font-bold font-serif text-black bg-gray-200  border  rounded-lg right-36  top-32 relative px-5 py-0 hover:transform hover:-translate-y-1 hover:bg-green-700 hover:text-white transition duration-300'>
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
            <Link href="/DoctorPage"><button className='text-sm w-40 h-10 font-bold font-serif text-black bg-gray-200  border  rounded-lg right-36  top-32 relative px-5 py-0 hover:transform hover:-translate-y-1 hover:bg-green-700 hover:text-white transition duration-300'>
              Book
            </button>
          </Link>
      </div>

      </div>

      </div>





    {/* <div className='flex flex-col items-center'>
      <h1 className='relative text-green-700 underline text-3xl font-serif font-bold' style={shouldapplytop96 ?  {top: "-56rem"} : {}}>Various Specialist are here for you to take care of your Health</h1>
      <h2 className='relative text-gray-600 text-xl font-serif font-bold' style={shouldapplytop96 ?  {top: "-55rem"} : {}}>Doctors are available at any time to take care of your health</h2>

      <div className='flex w-80 h-60 bg-green-500 border rounded-lg text-center text-white relative left-96'  style={shouldapplytop96 ?  {top: "-53rem"} : {}}>
          <Image className='relative left-28'
              src="/doctor.png"
              alt="Doctor"
              width={300}
              height={100}
            />
            <h2 className='relative right-64 text-black text-2xl font-serif top-5'>Specialist Oncologist</h2>
            <button className='text-sm w-40 h-10 text-black bg-gray-200  border  rounded-lg right-96 ml-8 top-32 relative px-5 py-0 hover:transform hover:-translate-y-1 hover:bg-green-700 hover:text-white transition duration-300'>Read More
            </button>
      </div>
      <div className='flex w-80 h-60 bg-green-500 border rounded-lg text-white relative right-96'  style={shouldapplytop96 ?  {top: "-68rem"} : {}}>
      <Image className='relative left-28'
              src="/doctor.png"
              alt="Doctor"
              width={300}
              height={100}
            />
            <h2 className='relative right-64 text-black text-2xl font-serif top-5'>ENT Specialist</h2>
            <button className='text-sm w-40 h-10 text-black bg-gray-200  border  rounded-lg right-96 ml-8  top-32 relative px-5 py-0 hover:transform hover:-translate-y-1 hover:bg-green-700 hover:text-white transition duration-300'>Read More
            </button>
      </div>
      <div className='flex w-80 h-60 bg-green-500 border rounded-lg text-white relative'  style={shouldapplytop96 ?  {top: "-83rem"} : {}}>
      <Image className='relative left-28'
              src="/doctor.png"
              alt="Doctor"
              width={300}
              height={100}
            />
            <h2 className='relative right-64 text-black text-2xl font-serif top-5'>Specialist Endocrinologis</h2>
            <button className='text-sm w-40 h-10 text-black bg-gray-200  border  rounded-lg right-96  top-32 relative px-5 py-0 hover:transform hover:-translate-y-1 hover:bg-green-700 hover:text-white transition duration-300'>Read More
            </button>
      </div>


      <div className='flex w-80 h-60 bg-green-500 border rounded-lg text-white relative left-96'  style={shouldapplytop96 ?  {top: "-80rem"} : {}}>
      <Image className='relative left-28'
              src="/doctor.png"
              alt="Doctor"
              width={300}
              height={100}
            />
            <h2 className='relative right-64 text-black text-2xl font-serif top-5'>Specialist Radiologist</h2>
            <button className='text-sm w-40 h-10 text-black bg-gray-200  border  rounded-lg right-96  top-32 relative px-5 py-0 hover:transform hover:-translate-y-1 hover:bg-green-700 hover:text-white transition duration-300'>Read More
            </button>
      </div>
      <div className='flex w-80 h-60 bg-green-500 border rounded-lg text-white relative right-96'  style={shouldapplytop96 ?  {top: "-95rem"} : {}}>
      <Image className='relative left-28'
              src="/doctor.png"
              alt="Doctor"
              width={300}
              height={100}
            />
            <h2 className='relative right-64 text-black text-2xl font-serif top-5'>Specialist Pulmonologist</h2>
            <button className='text-sm w-40 h-10 text-black bg-gray-200  border  rounded-lg right-96  top-32 relative px-5 py-0 hover:transform hover:-translate-y-1 hover:bg-green-700 hover:text-white transition duration-300'>Read More
            </button>
      </div>
      <div className='flex w-80 h-60 bg-green-500 border rounded-lg text-white relative'  style={shouldapplytop96 ?  {top: "-110rem"} : {}}>
      <Image className='relative left-28'
              src="/doctor.png"
              alt="Doctor"
              width={300}
              height={100}
            />
            <h2 className='relative right-64 text-black text-2xl font-serif top-5'>Specialist Veterinarian</h2>
            <button className='text-sm w-40 h-10 text-black bg-gray-200  border  rounded-lg right-96  top-32 relative px-5 py-0 hover:transform hover:-translate-y-1 hover:bg-green-700 hover:text-white transition duration-300'>Read More
            </button>
      </div>
    </div>


    <div className='flex flex-col items-center'>
      <h1 className='relative text-green-700 underline text-3xl font-serif font-bold' style={shouldapplytop96 ?  {top: "-100rem"} : {}}>Our Top Rated Doctors</h1>
      <h2 className='relative text-gray-600 text-xl font-serif font-bold' style={shouldapplytop96 ?  {top: "-99.8rem"} : {}}>Top Rated doctors are available at any time for your help</h2>

      <div className='flex w-96 h-60 bg-green-500 border rounded-lg text-center text-white relative left-64'  style={shouldapplytop96 ?  {top: "-97rem"} : {}}>
          <Image className='relative right-8'
              src="/doc-1.png"
              alt="Doctor"
              width={200}
              height={100}
            />
            <h2 className='text-black text-2xl relative right-12 top-10 font-sans'>Dr.Wanitha</h2>
            <button className='text-sm w-40 h-10 font-bold font-serif text-black bg-gray-200  border  rounded-lg right-36  top-32 relative px-5 py-0 hover:transform hover:-translate-y-1 hover:bg-green-700 hover:text-white transition duration-300'>
              Book
            </button>
      </div>
      <div className='flex w-96 h-60 bg-green-500 border rounded-lg text-white relative right-80'  style={shouldapplytop96 ?  {top: "-112rem"} : {}}>
      <Image className='relative right-8'
              src="/doc-1.png"
              alt="Doctor"
              width={200}
              height={100}
            />
            <h2 className='text-black text-2xl relative right-12 top-10 font-sans'>Dr.Wanitha</h2>
            <button className='text-sm w-40 h-10 font-bold font-serif text-black bg-gray-200  border  rounded-lg right-36  top-32 relative px-5 py-0 hover:transform hover:-translate-y-1 hover:bg-green-700 hover:text-white transition duration-300'>
              Book
            </button>
          
      </div>
      <div className='flex w-96 h-60 bg-green-500 border rounded-lg text-white relative left-64'  style={shouldapplytop96 ?  {top: "-110rem"} : {}}>
      <Image className='relative right-8'
              src="/doc-1.png"
              alt="Doctor"
              width={200}
              height={100}
            />
            <h2 className='text-black text-2xl relative right-12 top-10 font-sans'>Dr.Wanitha</h2>
            <button className='text-sm w-40 h-10 font-bold font-serif text-black bg-gray-200  border  rounded-lg right-36  top-32 relative px-5 py-0 hover:transform hover:-translate-y-1 hover:bg-green-700 hover:text-white transition duration-300'>
              Book
            </button>
      </div>
      <div className='flex w-96 h-60 bg-green-500 border rounded-lg text-white relative right-80'  style={shouldapplytop96 ?  {top: "-125rem"} : {}}>
      <Image className='relative right-8'
              src="/doc-1.png"
              alt="Doctor"
              width={200}
              height={100}
            />
            <h2 className='text-black text-2xl relative right-12 top-10 font-sans'>Dr.Wanitha</h2>
            <button className='text-sm w-40 h-10 font-bold font-serif text-black bg-gray-200  border  rounded-lg right-36  top-32 relative px-5 py-0 hover:transform hover:-translate-y-1 hover:bg-green-700 hover:text-white transition duration-300'>
              Book
            </button>
      </div>
    </div> */}
    </>
  )
}

export default MiddleSection;
