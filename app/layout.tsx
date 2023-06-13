import { Navigation } from './components'
import './css/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Ma'money",
  description: 'Find your money anytime!',
}

export default function RootLayout({children,}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex'>
            <aside className="navigation-container-visible">
              <Navigation/>
            </aside>
            <div className="children-container">
              {children}
          </div>
        </div>
      </body>
    </html>
  )
}
