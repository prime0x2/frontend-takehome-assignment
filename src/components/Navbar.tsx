'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Platform',
    href: '/platform',
  },
  {
    name: 'News & Events',
    href: '/news-events',
  },
  {
    name: 'About Us',
    href: '/about',
  },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className='p-4 lg:p-0'>
      <div className='container relative mx-auto box-content flex h-10 items-center justify-center rounded-full border-2 border-white bg-[#E9EAF1] shadow-navbar-container md:h-14 lg:mt-10 lg:h-20'>
        <Link href='/' className='left-0 top-0 h-10 w-10 flex-shrink-0 md:h-14 md:w-14 lg:absolute lg:h-20 lg:w-20'>
          <Image
            priority
            src='/logo.png'
            alt='Web3 Data Studio'
            width={0}
            height={0}
            sizes='100vw'
            className='mx-auto h-full w-full'
          />
        </Link>

        <nav className='flex h-full w-full items-center justify-end gap-x-1 pr-1 lg:justify-center lg:gap-x-4'>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`rounded-full px-2 py-2 font-roboto text-xs font-bold text-gray-800 outline-none transition-all duration-200 ease-in-out hover:text-gray-900 hover:shadow-navbar-link focus-visible:ring focus-visible:ring-secondary-background focus-visible:ring-offset-2 md:px-4 md:text-sm ${pathname === item.href ? 'shadow-navbar-link' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button className='right-5 ml-4 mr-0 hidden h-10 w-60 rounded-full border-2 border-secondary-background bg-secondary-background text-xs font-bold uppercase tracking-widest text-white shadow-cta-button transition-all duration-200 hover:border-white hover:bg-primary-background hover:text-black focus-visible:outline-none focus-visible:ring focus-visible:ring-secondary-background focus-visible:ring-offset-2 sm:inline-block md:mr-2 lg:absolute lg:ml-0 lg:mr-0 lg:h-12 lg:text-sm'>
          Register Now
        </button>
      </div>
    </div>
  );
};

export default Navbar;
