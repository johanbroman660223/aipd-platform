export const metadata = {
  title: "AIPD – Artificial Intelligence Police Department",
  description: "AIPD Official Platform"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  )
}
