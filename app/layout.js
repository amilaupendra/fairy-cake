import { Nunito, Playfair_Display } from 'next/font/google';
import './globals.css';
import '@/styles/animations.css';
import Providers from './providers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-body'
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading'
});

export const metadata = {
  title: 'Fairy Cakes | Handmade Cakes in Perth',
  description:
    'Fairy Cakes creates handmade custom cakes in Perth for birthdays, weddings, and every sweet moment.',
  openGraph: {
    title: 'Fairy Cakes | Handmade Cakes in Perth',
    description:
      'Discover handcrafted cakes made with love in Perth. Order birthday, wedding, and custom cakes from Fairy Cakes.',
    type: 'website',
    url: 'https://fairycakes.example.com',
    siteName: 'Fairy Cakes'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${nunito.variable} ${playfair.variable} bg-gradient-to-b from-yellow-50 via-white to-green-50 text-stone-800 dark:bg-stone-900 dark:text-stone-100`}
      >
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
