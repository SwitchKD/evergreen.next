import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Navbar from './Components/Navbar/navbar.js'
import './global.css'

export const metadata = {
  title: 'EverGreen',
  description: 'Made by ryzxxn',
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
