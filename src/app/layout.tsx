import '../styles/globals.css'

import { Inter } from 'next/font/google';
 
const inter = Inter({
  variable: '--font-inter',
  subsets: ["latin"],
});

export const metadata = {
  title: 'Icónika | Gestionamos tu carrera profesional',
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
