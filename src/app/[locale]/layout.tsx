import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';
import React from 'react';
import { dir } from 'i18next';
import initTranslations from '@/app/i18n';
import TranslationProvider from '@/components/TranslationProvider';
import raleway from './font';
import i18nConfig from '../../../i18nConfig';

export const metadata: Metadata = {
  title: 'Escape room',
  description: 'Choose your next quest',
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

const i18nNamespaces = ['home', 'auth', 'book'];

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string }
}>) {
  const { resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationProvider locale={locale} resources={resources} namespaces={i18nNamespaces}>
      <html lang={locale} dir={dir(locale)}>
        <body className={`${raleway.className} min-h-screen flex`}>
          <Header locale={locale} />
          <main className='bg-page_bg flex-grow flex items-center justify-center'>{children}</main>
          <Toaster position='bottom-center' />
          <Footer />
        </body>
      </html>
    </TranslationProvider>
  );
}
