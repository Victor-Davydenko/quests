import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';
import React from 'react';
import { dir } from 'i18next';
import initTranslations from '@/app/i18n';
import TranslationProvider from '@/components/TranslationProvider';
import Auth from '@/components/Auth';
import raleway from './font';
import i18nConfig from '../../../i18nConfig';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await initTranslations(locale, ['common']);
  return {
    title: t('title'),
    description: t('choose_your_next_quest'),
  };
}

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

const i18nNamespaces = ['home', 'auth', 'book', 'errors', 'common'];

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
        <body className={`${raleway.className} min-h-screen flex flex-col`}>
          <Header auth={<Auth locale={locale} />} />
          <main className='bg-page_bg flex-grow flex items-center justify-center'>{children}</main>
          <Toaster position='bottom-center' />
          <Footer />
        </body>
      </html>
    </TranslationProvider>
  );
}
