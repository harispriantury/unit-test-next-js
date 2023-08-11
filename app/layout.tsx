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
  icons: '/islam2.png',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=windows-1256"></meta>
      </Head>
      <body className='min-h-screen min-w-screen'>
        <div className='px-2 md:px-4 lg:px-20 xl:px-32 2xl:px-60'>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
