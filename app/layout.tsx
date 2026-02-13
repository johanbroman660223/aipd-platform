import './globals.css'

export const metadata = {
  title: 'AIPD Platform',
  description: 'AI project platform',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  )
}
