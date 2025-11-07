// app/layout.tsx
import './global.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wonderland - Partagez vos voyages',
  description: 'Plateforme de partage d\'expériences de voyage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}