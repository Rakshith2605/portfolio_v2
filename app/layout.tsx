import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rakshith Dharmappa | Portfolio',
  description: 'Portfolio of Rakshith Dharmappa, Data Scientist and HPC Engineer',
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
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        
        {/* Viewport meta tag for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Additional meta tags for SEO and social media sharing */}
        <meta name="author" content="Rakshith Dharmappa" />
        <meta property="og:title" content="Rakshith Dharmappa | Portfolio" />
        <meta property="og:description" content="Portfolio of Rakshith Dharmappa, Data Scientist and HPC Engineer" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rakshith.info/" />
        <meta property="og:image" content="https://rakshith.info//og-image.jpg" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
