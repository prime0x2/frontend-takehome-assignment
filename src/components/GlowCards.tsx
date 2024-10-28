'use client';

import React from 'react';

const Cards: React.FC = () => {
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cardsElement = document.getElementById('cards') as HTMLElement;
      if (!cardsElement) return;

      for (const card of cardsElement.getElementsByClassName('card') as HTMLCollectionOf<HTMLElement>) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      }
    };

    const cardsElement = document.getElementById('cards') as HTMLElement;
    if (cardsElement) {
      cardsElement.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (cardsElement) {
        cardsElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div id='cards'>
      <div className='grid-item bg-transparent'>
        <div className='card mr-auto w-full lg:w-[48%]'>
          <div className='card-border'></div>

          <div className='card-content'>
            <h3 className='mb-4 font-raleway text-xl font-semibold md:text-2xl'>Ingestion</h3>
            <p className='font-roboto text-base font-normal'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi
              epudiandae raesentium optio, eaque rerum!
            </p>
          </div>
        </div>
      </div>

      <div className='grid-item bg-transparent'>
        <div className='card ml-auto w-full lg:w-[48%]'>
          <div className='card-border'></div>

          <div className='card-content'>
            <h3 className='mb-4 font-raleway text-xl font-semibold md:text-2xl'>Transformation</h3>
            <p className='font-roboto text-base font-normal'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi
              epudiandae raesentium optio, eaque rerum!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
