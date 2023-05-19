import '../styles/globals.css'

import { Inter, Montserrat } from 'next/font/google';
 
const inter = Inter({
  variable: '--font-inter',
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ["latin"],
});

export const metadata = {
  title: 'Iconika | Gestionamos tu carrera profesional',
  themeColor: '#000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#fafafa]`}>
        {children}
      </body>
    </html>
  )
}
