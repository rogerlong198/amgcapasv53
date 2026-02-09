import React from "react"
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import './globals.css'

const _poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '600', '700'], variable: '--font-poppins' })

export const metadata: Metadata = {
  title: 'AMG Capas - Capas de Bancos Premium',
  description: 'Capas de Bancos Premium para Bancos Dianteiros e Traseiros + Cabeceiras. Frete gratis para todo o Brasil.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
