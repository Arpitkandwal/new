'use client'
import React, { useState } from 'react';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Payments = () => {
    const router = useRouter();
  const [formData, setFormData] = useState({
    fullname: '',
    cardnumber: '',
    securitycode: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors ={};
    if(!formData.fullname) {
        newErrors.fullname = 'Name is Required';
    }
    if(formData.cardnumber.length !== 16) {
        newErrors.cardnumber = 'Card Number must be of 16 digit';
    }
    if(formData.securitycode.length !== 3) {
        newErrors.securitycode = 'Security Code is Required';
    }
    setErrors(newErrors);

    if(Object.keys(newErrors).length === 0) {
        router.push('/Success');
        console.log('hello')
    } else {
        console.log('Form has errors:', newErrors);
    }

  };
  return (
    <div>
      <div className='flex justify-left mt-10'>
        <Link href='/DoctorPage/Appointment'>
          <FaArrowAltCircleLeft className='ml-40 mt-2 text-3xl' />
        </Link>
        <h1 className='text-2xl font-bold font-serif ml-10 text-green-600'>Payment Method</h1>
      </div>
      <div className="min-w-screen min-h-screen  flex items-center justify-center px-5 pb-10 pt-16">
        <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700" style={{ maxWidth: '600px' }}>
          <div className="w-full pt-1 pb-5">
            <div className="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
              <Image
              src='/card1.png'
              alt='card1'
              height={50}
              width={50}
               />
            </div>
          </div>
          <div className="mb-10">
            <h1 className="text-center font-bold text-xl uppercase">Secure payment info</h1>
          </div>
          {/* Rest of your content */}
          <div className="mb-3 flex -mx-2">
            <div className="px-2">
                <label htmlFor="type1" className="flex items-center cursor-pointer">
                    <input type="radio" className="form-radio h-2 w-2 text-indigo-500" name="type" id="type1" checked />
                    <Image
                    src='/card.png'
                    alt='card'
                    height={200}
                    width={200}
                     />
                     {errors.fullname && <p className="text-red-500">{errors.fullname}</p>}
                </label>
            </div>
            <div className="px-2">
                <label htmlFor="type2" className="flex items-center cursor-pointer">
                    <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type2" />
                    <Image
                    src='/PayPalCard.png'
                    alt='paypal'
                    height={50}
                    width={50}
                     />

                </label>
            </div>
        </div>
        <div className="mb-3">
            <label htmlFor='fullname' className="font-bold text-sm mb-2 ml-1">Name on card</label>
            <div>
                <input type="text"
                value={formData.fullname}
                name='fullname'
                id='fullname'
                onChange={handleChange}
                 className="w-full px-3 py-2 mb-1 border  rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="John Smith" />
                  {errors.fullname && <p className='text-red-500'>{errors.fullname} </p> }
            </div>
        </div>
        <div className="mb-3">
            <label htmlFor='cardnumber' className="font-bold text-sm mb-2 ml-1">Card number</label>
            <div>
                <input
                 className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="0000 0000 0000 0000"
                   type="number"
                   value={formData.cardnumber}
                  onChange={handleChange}
                  name='cardnumber'
                  id='cardnumber'
                   />
                   {errors.cardnumber && <p className='text-red-500'>{errors.cardnumber} </p> }
            </div>
        </div>
        <div className="mb-3 -mx-2 flex items-end">
            <div className="px-2 w-1/2">
                <label className="font-bold text-sm mb-2 ml-1">Expiration date</label>
                <div>
                    <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                        <option value="01">01 - January</option>
                        <option value="02">02 - February</option>
                        <option value="03">03 - March</option>
                        <option value="04">04 - April</option>
                        <option value="05">05 - May</option>
                        <option value="06">06 - June</option>
                        <option value="07">07 - July</option>
                        <option value="08">08 - August</option>
                        <option value="09">09 - September</option>
                        <option value="10">10 - October</option>
                        <option value="11">11 - November</option>
                        <option value="12">12 - December</option>
                    </select>
                </div>
            </div>
            <div className="px-2 w-1/2">
                <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                </select>
            </div>
        </div>
        <div className="mb-10">
            <label htmlFor='securitycode' className="font-bold text-sm mb-2 ml-1">Security code</label>
            <div>
            <input
                  type="number"
                  name="securitycode"
                  id="securitycode"
                  autoComplete="given-name"
                  value={formData.securitycode}
                  onChange={handleChange}
                  className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                />
                  {errors.securitycode && <p className='text-red-500'>{errors.securitycode} </p> }
            </div>
            
        </div>
        <div>
            <button onClick={handleSubmit} className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"><i className="mdi mdi-lock-outline mr-1"></i> PAY NOW</button>
        </div>
    </div>
   </div>
  </div>
  )
}

export default Payments;
