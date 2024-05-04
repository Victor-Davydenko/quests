import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';
import React from 'react';
import raleway from './font';

export const metadata: Metadata = {
  title: 'Escape room',
  description: 'Choose your next quest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='uk'>
      <body className={`${raleway.className} min-h-screen flex`}>
        <Header />
        <main className='bg-page_bg flex-grow flex items-center justify-center'>{children}</main>
        <Toaster position='bottom-center' />
        <Footer />
      </body>
    </html>
  );
}
