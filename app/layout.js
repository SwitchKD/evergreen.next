import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './Components/Navbar/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Evergreen',
  description: 'Buy and Sell plants',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
