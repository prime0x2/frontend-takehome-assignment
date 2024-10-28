import Image from 'next/image';
import React from 'react';

const Partners: React.FC = () => {
  return (
    <div className='relative mt-40 w-full'>
      <Image
        src='/images/shape.png'
        alt='Shape'
        width={0}
        height={0}
        sizes='100vw'
        className='pointer-events-none absolute left-0 top-20 -z-10 h-auto w-auto md:top-0'
      />

      <h1 className='flex flex-col items-center gap-y-3 font-raleway text-4xl font-semibold md:text-5xl'>
        Our Partners
        <span className='relative -z-10 block h-3 w-56 rounded-full bg-[#BBBBBB] before:absolute before:left-1/2 before:top-1/2 before:z-10 before:h-full before:w-44 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-[#858585] after:absolute after:left-1/2 after:top-1/2 after:z-20 after:h-full after:w-28 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-[#3D3D3E]' />
      </h1>

      <div className='mt-10 flex w-full flex-col items-center justify-center gap-x-14 gap-y-10 md:flex-row md:p-5 lg:gap-x-[100px]'>
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className='flex h-36 w-56 items-center justify-center rounded-3xl border border-white bg-primary-background p-4 shadow-cta-button'
          >
            <Image
              src='/images/intel.png'
              alt='Partner Logo'
              width={0}
              height={0}
              sizes='100vw'
              className='h-auto w-full'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
