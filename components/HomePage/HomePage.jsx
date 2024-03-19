import React from 'react';
import Navbar from './Navbar';
import HeadSection from './HeadSection';
import MiddleSection from './MiddleSection';
import Feedback from './Feedback';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeadSection />
      <MiddleSection />
      <Feedback />
      <Footer />
    </div>
  )
}

export default HomePage;
