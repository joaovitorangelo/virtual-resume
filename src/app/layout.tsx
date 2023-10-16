import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '../styles/main.sass'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'João Vitor',
  description: 'This is my virtual resume!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
