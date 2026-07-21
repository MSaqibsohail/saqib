import type { Metadata, Viewport } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeContext';
import LoadingScreen from '@/components/LoadingScreen';
import ScrollToTop from '@/components/ScrollToTop';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Muhammad Saqib Sohail | Flutter Developer & Computer Science Student',
  description: 'Portfolio of Muhammad Saqib Sohail, Computer Science Student and Flutter Developer specializing in building premium cross-platform mobile apps, machine learning models, and Azure cloud integrations.',
  keywords: [
    'Muhammad Saqib Sohail',
    'Flutter Developer',
    'Computer Science Student',
    'Mobile App Developer',
    'Cross-Platform App Developer',
    'HemaPredict',
    'Blood Bank Network',
    'Azure Cloud Development',
    'Machine Learning Project Developer'
  ],
  authors: [{ name: 'Muhammad Saqib Sohail' }],
  creator: 'Muhammad Saqib Sohail',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://saqib-sohail.vercel.app',
    title: 'Muhammad Saqib Sohail | Flutter Developer & CS Student Portfolio',
    description: 'Explore the projects, skills, cloud timeline, and academic work of Muhammad Saqib Sohail, featuring machine learning systems, .NET MVC cloud apps, and custom Flutter mobile interfaces.',
    siteName: 'Saqib Sohail Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Saqib Sohail | Flutter Developer Portfolio',
    description: 'Portfolio of Muhammad Saqib Sohail, showing ML deployments, Flutter apps, and database designs.',
  },
};

export const viewport: Viewport = {
  themeColor: '#0F172A',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth dark`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased bg-[#FAF9F6] dark:bg-[#0F172A] text-slate-800 dark:text-slate-100 transition-colors duration-300">
        <ThemeProvider>
          <LoadingScreen />
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
