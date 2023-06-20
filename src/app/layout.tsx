import Footer from '~/components/Footer';
import '../styles/globals.css'

import { Inter } from 'next/font/google';

const inter = Inter({
  variable: '--font-inter',
  subsets: ["latin"],
});

export const metadata = {
  title: 'Iconika | Gestionamos tu carrera profesional',
  themeColor: '#000',

  icons: {
    icon: {
      url: "/favicon.jpg",
      type: 'image/jpeg',
    },
    shortcut: {
      url: "/favicon.jpg",
      type: 'image/jpeg',
    },
    apple: [
      {
        url: "/favicon.jng",
        sizes: "64x64",
      }
    ],
  },
  viewport: {
    width: 'device-width',
  },

  openGraph: {
    title: 'Iconika',
    description: 'Gestionamos tu carrera profesional en OnlyFans.',
    url: 'https://iconika.com.ar',
    siteName: 'Iconika',
    images: [
      {
        // !
        url: 'https://iconika.com.ar/social-media-card.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'es-AR',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Iconika',
    description: 'Gestionamos tu carrera profesional en OnlyFans.',
    images: {
      // !
      url: 'https://iconika.com.ar/social-media-card.png'
    },
  },

  authors: [{ name: 'bmariano', url: 'https://bmariano.me' }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#fafafa]`}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
