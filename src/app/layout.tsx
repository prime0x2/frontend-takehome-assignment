import React from 'react';
import type { Metadata } from 'next';
import { Poppins, Raleway, Roboto } from 'next/font/google';

import Navbar from '@/components/Navbar';
import './globals.css';

interface RootLayoutProps {
  children: React.ReactNode;
}

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'],
});

const raleWay = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
});

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['300', '400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Web3 Data',
  description: 'The Web3 Data Studio',
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang='en'>
      <body
        suppressHydrationWarning
        className={`${poppins.variable} ${raleWay.variable} ${roboto.variable} bg-primary-background antialiased`}
      >
        <Navbar />

        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
