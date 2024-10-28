import React from 'react';
import HeroSection from '@/components/HomePage/HeroSection';
import SolutionSection from '@/components/HomePage/SolutionSection';
import Partners from '@/components/HomePage/Partners';
import Testimonials from '@/components/HomePage/Testimonials';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <SolutionSection />
      <Partners />
      <Testimonials />
    </>
  );
};

export default HomePage;
