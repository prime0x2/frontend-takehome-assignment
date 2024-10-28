import Image from 'next/image';
import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <div className='relative my-40 w-full lg:my-60'>
      <h1 className='flex flex-col items-center gap-y-3 font-raleway text-4xl font-semibold md:text-5xl'>
        Testimonials
        <span className='relative -z-10 block h-3 w-56 rounded-full bg-[#BBBBBB] before:absolute before:left-1/2 before:top-1/2 before:z-10 before:h-full before:w-44 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-[#858585] after:absolute after:left-1/2 after:top-1/2 after:z-20 after:h-full after:w-28 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-[#3D3D3E]' />
      </h1>

      <div className='mt-20 flex flex-col items-center justify-center gap-x-10 gap-y-10 p-5 md:flex-row lg:gap-x-20'>
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className='w-[300px] rounded-3xl p-10 shadow-cta-button'>
            <div className='flex h-16 w-16 items-center justify-center rounded-full border-2 border-white bg-primary-background p-3 shadow-hero-icon-circle'>
              <Image
                src='/images/person.png'
                alt='Partner Logo'
                width={0}
                height={0}
                sizes='100vw'
                className='h-full w-full'
              />
            </div>

            <p className='mt-5 font-roboto text-sm lg:text-base'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi
              epudiandae raesentium optio, eaque rerum!
            </p>

            <h3 className='mt-2 flex items-center font-raleway text-lg font-semibold'>
              <span className='mr-1 inline-block h-[2px] w-6 bg-black' /> John Doe
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
