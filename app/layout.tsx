import React from 'react'
import type { Metadata } from 'next'

import './resources/styles/global.scss';

export const metadata: Metadata = {
  title: 'Kata',
  description: 'Created by Parham'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

  return (
      <html lang='en'>
          <body>{children}</body>
      </html>
  )

}
