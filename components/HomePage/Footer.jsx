import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black py-16 text-white">
    <div className="container mx-auto">
      <div className="flex justify-center items-center">
        <p className="text-center text-2xl relative right-96">Doctor +</p>
        <p className="text-center text-smsf relative right-24">Thankyou for visiting my website, and i look forward <br /> to be 
        a part of your wellness journey. Let's thrive <br />together!</p>
      </div>
      <div className="flex justify-center items-center mb-4">
            <div className="mr-4 relative left-96 bottom-16">
              <i className="fas fa-phone-alt "></i> Phone: +1234567890
            </div>
            <div className='relative left-52 bottom-10'>
              <i className="fas fa-envelope"></i> Email: info@example.com
            </div>
          </div>
    </div>
    <div className="border-t border-white mb-4 w-full"></div>
          <div className="flex space-x-4 relative left-96 ">
            <a href="#" className=""> Copyright 2024. All rights are reserveds</a>
            <a href="#" className="underline">Privacy Policy</a>
            <a href="#" className="underline">Terms of Service</a>
            <a href="#" className="underline">Legal Info</a>
          </div>
  </footer>
  )
}

export default Footer
