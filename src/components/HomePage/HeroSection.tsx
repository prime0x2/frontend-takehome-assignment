import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <div className='w-full overflow-x-hidden'>
      <div className='container mx-auto grid grid-cols-1 p-6 sm:p-10 md:grid-cols-2'>
        <div className='flex flex-col justify-center lg:min-h-[540px]'>
          <h1 className='font-poppins text-3xl font-bold text-[#555770] sm:text-5xl lg:text-6xl'>
            The Web3
            <br />
            Data Studio
          </h1>

          <p className='mb-5 mt-5 font-roboto text-base text-[#606060] sm:mb-10 sm:max-w-xl sm:text-2xl lg:text-3xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint
          </p>

          <div className='flex items-center gap-x-4 sm:gap-x-10'>
            <button className='h-10 w-full rounded-full border-2 border-secondary-background bg-secondary-background text-xs font-bold uppercase tracking-widest text-white shadow-cta-button transition-all duration-200 hover:border-white hover:bg-primary-background hover:text-black focus:outline-none focus:ring focus:ring-secondary-background focus:ring-offset-2 sm:h-12 sm:w-60 sm:text-sm'>
              Register Now
            </button>

            <button className='h-10 w-full rounded-full border-2 border-white bg-primary-background text-xs font-bold uppercase tracking-widest text-black shadow-cta-button transition-all duration-200 hover:border-secondary-background hover:bg-secondary-background hover:text-white focus:outline-none focus:ring focus:ring-secondary-background focus:ring-offset-2 sm:h-12 sm:w-60 sm:text-sm'>
              Get a Quote
            </button>
          </div>
        </div>

        <div className='relative left-1/2 mt-10 flex h-[300px] w-[300px] border-spacing-16 -translate-x-1/2 items-center justify-center rounded-full border border-[#EBECF0] shadow-hero-circle-outer before:absolute before:left-1/2 before:top-1/2 before:-z-10 before:h-[calc(100%-28px)] before:w-[calc(100%-28px)] before:-translate-x-1/2 before:-translate-y-1/2 before:transform before:rounded-full before:bg-primary-background before:shadow-hero-circle-inner before:content-[""] sm:h-[400px] sm:w-[400px] md:-translate-x-0 lg:h-[540px] lg:w-[540px] lg:-translate-x-14 2xl:translate-x-1/2'>
          <Image
            src='/images/hero-circle-flower.png'
            alt='Hero Circle Flower'
            width={0}
            height={0}
            sizes='100vw'
            className='absolute h-auto w-40 md:w-48 md:-translate-x-8 lg:w-60 lg:-translate-x-10 xl:-translate-x-20'
          />

          <div className='hero-child-circle-1 absolute z-10 h-[4.5rem] w-[4.5rem] overflow-hidden rounded-full border-2 border-white bg-primary-background p-4 shadow-hero-icon-circle sm:h-24 sm:w-24'>
            <Image
              src='/images/hero-icon-1.png'
              alt='Hero Icon 1'
              width={0}
              height={0}
              sizes='100vw'
              className='h-full w-full rotate-[-135deg] md:rotate-[-54deg]'
            />
          </div>

          <div className='hero-child-circle-2 absolute z-10 h-[4.5rem] w-[4.5rem] overflow-hidden rounded-full border-2 border-white bg-primary-background p-4 shadow-hero-icon-circle sm:h-24 sm:w-24'>
            <Image
              src='/images/hero-icon-2.png'
              alt='Hero Icon 2'
              width={0}
              height={0}
              sizes='100vw'
              className='h-full w-full rotate-[-225deg] md:rotate-[-18deg]'
            />
          </div>

          <div className='hero-child-circle-3 absolute z-10 h-[4.5rem] w-[4.5rem] overflow-hidden rounded-full border-2 border-white bg-primary-background p-4 shadow-hero-icon-circle sm:h-24 sm:w-24'>
            <Image
              src='/images/hero-icon-3.png'
              alt='Hero Icon 3'
              width={0}
              height={0}
              sizes='100vw'
              className='h-full w-full rotate-[-315deg] md:rotate-[18deg]'
            />
          </div>

          <div className='hero-child-circle-4 absolute z-10 h-[4.5rem] w-[4.5rem] overflow-hidden rounded-full border-2 border-white bg-primary-background p-4 shadow-hero-icon-circle sm:h-24 sm:w-24'>
            <Image
              src='/images/hero-icon-4.png'
              alt='Hero Icon 4'
              width={0}
              height={0}
              sizes='100vw'
              className='h-full w-full rotate-[-45deg] md:rotate-[54deg]'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
