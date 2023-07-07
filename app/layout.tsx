import './css/globals.css'
import Navigation  from './menu'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Ma'money - In progress ⚠",
  description: 'Find your money anytime!',
}

export default function RootLayout({children,}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation>
          {children}
        </Navigation>
      </body>
    </html>
  )
}
