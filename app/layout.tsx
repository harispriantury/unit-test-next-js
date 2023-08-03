import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { Navbar } from './components/Navbar'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quran App |',
  description: 'Aplikasi Quran Bahasa Indoneisa',
  icons: '/islam2.png'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='min-h-screen'>
        <div className='lg:px-40 md:px-60'>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
