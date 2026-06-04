import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prompt Variable Sanitizer — Prevent Prompt Injection',
  description: 'Validate and sanitize variables before inserting into AI prompts. Stop injection attacks before they happen.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a3a1868a-7e1f-4604-90ca-92612fb52d4a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
