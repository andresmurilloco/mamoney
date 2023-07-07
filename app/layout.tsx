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
      <head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      </head>
      <body className={inter.className}>
        <Navigation>
          {children}
        </Navigation>
      </body>
    </html>
  )
}
