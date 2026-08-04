import type { Metadata } from 'next';
import './globals.css';
import { Inter, Plus_Jakarta_Sans, DM_Sans, Outfit } from 'next/font/google';

// Primary font - Clean, modern sans-serif (similar to Qatar Airways)
const headingFont = Outfit({
  variable: '--font-heading',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

// Secondary font - Clean body text
const bodyFont = DM_Sans({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

// Alternative: If you prefer Inter for body
// const bodyFont = Inter({
//   variable: '--font-body',
//   subsets: ['latin'],
//   display: 'swap',
// });

export const metadata: Metadata = {
  title: 'TicketToAfrica | Luxury Travel & Holiday Packages',
  description:
    'Book luxury holiday packages, flights, hotels and customized trips with TicketToAfrica.',
  keywords: [
    'Skyluxe Journey',
    'ticket to africa',
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