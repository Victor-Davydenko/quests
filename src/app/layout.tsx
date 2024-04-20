import type { Metadata } from 'next';
import './globals.css';
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
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
