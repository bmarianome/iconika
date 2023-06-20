import Footer from '~/components/Footer';
import '../styles/globals.css'

import { Inter } from 'next/font/google';
import Link from 'next/link';

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
      <body className={`${inter.className} bg-[#fafafa] relative`}>
        {children}

        <Link href='/turnos' className="fixed hover:-translate-y-1 bottom-6 lg:bottom-12 right-6 lg:right-12 bg-black z-50 rounded-full p-3 group duration-200 shadow-2xl">
          <svg className="w-7 lg:w-8 h-7 lg:h-8 fill-[#fafafa] group-hover:scale-105 duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.512 32.483">
            <path className="cls-1" d="M0,32.483c.9-2.7,1.681-5.118,2.524-7.511a2.1,2.1,0,0,0-.13-1.82A15.891,15.891,0,0,1,17.229.013,16.066,16.066,0,0,1,32.469,14.7a15.861,15.861,0,0,1-12.98,16.867A16.094,16.094,0,0,1,9.74,30.323a3.055,3.055,0,0,0-1.914-.118c-2.21.6-4.386,1.329-6.578,2C.927,32.3.59,32.353,0,32.483Zm4.472-4.294C5.9,27.749,7.1,27.406,8.276,27a1.945,1.945,0,0,1,1.814.17,12.558,12.558,0,0,0,8.383,1.63A13,13,0,1,0,5.514,22.725,1.928,1.928,0,0,1,5.7,24.62C5.272,25.717,4.928,26.846,4.472,28.189Z" /><path className="cls-1" d="M20.184,24.006A29.232,29.232,0,0,1,16.69,22.65a15.493,15.493,0,0,1-8.052-9.714A4.143,4.143,0,0,1,9.884,8.805,1.912,1.912,0,0,1,13.3,9.49a10.466,10.466,0,0,0,.483,1.308,2.384,2.384,0,0,1-.523,3.264,1.287,1.287,0,0,0-.045,1.188,10.663,10.663,0,0,0,4.4,4.287,1.249,1.249,0,0,0,1.774-.318c1.363-1.52,1.389-1.5,3.233-.5.315.17.632.337.946.509,1.485.813,1.684,2.064.539,3.367A5.121,5.121,0,0,1,20.184,24.006Z" />
          </svg>
        </Link>

        <Footer />
      </body>
    </html>
  )
}
