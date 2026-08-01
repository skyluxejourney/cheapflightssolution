import type { Metadata } from 'next';
import './globals.css';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';

const headingFont = Plus_Jakarta_Sans({
  variable: '--font-heading',
  subsets: ['latin'],
  display: 'swap',
});

const bodyFont = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Skyluxe Journey | Luxury Travel & Holiday Packages',
  description:
    'Book luxury holiday packages, flights, hotels and customized trips with Skyluxe Journey.',
  keywords: [
    'Skyluxe Journey',
    'travel agency',
    'holiday packages',
    'flights',
    'hotels',
    'Dubai package',
    'Bali package',
    'Maldives package',
  ],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-gray-900 flex flex-col">
        {children}
      </body>
    </html>
  );
}