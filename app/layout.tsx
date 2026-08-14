import type { Metadata } from 'next';
import './globals.css';
import { Satisfy, Noto_Sans } from 'next/font/google';
import StatCounter from '@/components/StatCounter';

// Heading font - Satisfy (cursive, elegant hand-written style)
const headingFont = Satisfy({
  variable: '--font-heading',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
});

// Body font - Noto Sans (clean, readable sans-serif)
const bodyFont = Noto_Sans({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'CheapFlightsSolution | Luxury Travel & Holiday Packages',
  description:
    'Book luxury holiday packages, flights, hotels and customized trips with CheapFlightsSolution.',
  keywords: [
    'Skyluxe Journey',
    'Cheap flights Solution',
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
        <StatCounter />
        {children}
      </body>
    </html>
  );
}