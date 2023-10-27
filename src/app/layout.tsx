import type { Metadata } from 'next'

import '../styles/global.css'

export const metadata: Metadata = {
  title: 'Cardappio',
  description: 'cardappio app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
