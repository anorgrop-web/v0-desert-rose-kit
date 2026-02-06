import React from "react"
import type { Metadata, Viewport } from 'next'
import { Poppins, Open_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins"
});

const openSans = Open_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans"
});

export const metadata: Metadata = {
  title: 'Kit de Germinação de Rosas do Deserto | Jardim da Cida',
  description: 'Embeleze sua casa com cores vibrantes e únicas: conheça o Kit de Germinação de Rosas do Deserto. Sementes, bandeja germinadora, fertilizante e manual completo.',
  keywords: 'rosas do deserto, adenium, germinação, sementes, kit de plantio, jardim da cida',
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#2d8f47',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3RTZ6Z4X7M"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3RTZ6Z4X7M');
          `}
        </Script>
      </head>
      <body className={`${poppins.variable} ${openSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
