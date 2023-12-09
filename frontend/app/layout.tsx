import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Steam Clone',
  description: 'Klon Steam grupy 6',
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/steam-icon.png",
        href: "/steam-icon.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/steam-icon.png",
        href: "/steam-icon.png",
      },
    ],
  },
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