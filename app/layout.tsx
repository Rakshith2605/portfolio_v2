import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio of Rakshith Dharmappa',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add favicon */}
        <link rel="icon" href="images/logo1.png" type="image/png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
