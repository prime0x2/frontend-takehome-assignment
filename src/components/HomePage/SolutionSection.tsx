'use client';

import React from 'react';
import GlowCards from '../GlowCards';

const SolutionSection: React.FC = () => {
  return (
    <div className='my-20 w-full'>
      <div className='container mx-auto rounded-3xl md:rounded-[3rem]' id='solution-container'>
        <div className='container-inner rounded-[calc(1.5rem-1px)] p-6 md:rounded-[calc(3rem-1px)] md:p-14'>
          <h1 className='pb-14 text-center font-raleway text-2xl font-semibold text-[#003966] lg:text-3xl'>
            Enabling real-time Data Business
          </h1>

          <GlowCards />
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;
