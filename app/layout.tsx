// app/layout.tsx
import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Satisfy, Noto_Sans } from 'next/font/google';
import StatCounter from '@/components/StatCounter';
import { COMPANY, META } from './constants';

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
  metadataBase: new URL(`https://${COMPANY.domain}`),
  
  title: {
    default: `${COMPANY.name} | Cheap Flights & Travel Deals Worldwide`,
    template: `%s | ${COMPANY.name}`,
  },
  
  description: 'Find cheap flights, exclusive travel deals, and affordable holiday packages with CheapFlightsSolution. Book your next adventure today with the best prices guaranteed.',
  
  keywords: [
    COMPANY.name,
    'cheap flights',
    'travel deals',
    'budget travel',
    'affordable flights',
    'flight deals',
    'discount airfare',
    'cheap travel',
    'last minute flights',
    'cheap airline tickets',
    'budget airlines',
    'travel agency',
    'holiday packages',
    'flight booking',
  ],
  
  authors: [{ name: COMPANY.name }],
  
  openGraph: {
    title: `${COMPANY.name} | Cheap Flights & Travel Deals Worldwide`,
    description: 'Find cheap flights, exclusive travel deals, and affordable holiday packages with CheapFlightsSolution. Book your next adventure today!',
    url: `https://${COMPANY.domain}`,
    siteName: COMPANY.name,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${COMPANY.name} - Cheap Flights & Travel Deals`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY.name} | Cheap Flights & Travel Deals Worldwide`,
    description: 'Find cheap flights, exclusive travel deals, and affordable holiday packages with CheapFlightsSolution.',
    images: ['/og-image.jpg'],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  alternates: {
    canonical: `https://${COMPANY.domain}`,
  },
  
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ffffff',
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