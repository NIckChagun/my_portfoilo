import type { Metadata, Viewport } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira-code" });

export const metadata: Metadata = {
  title: 'Warunyu Jantree | Full Stack Developer',
  description: 'Full Stack Developer with 2+ years of experience specializing in e-commerce systems and internal corporate software development.',
}

export const viewport: Viewport = {
  themeColor: '#0f172a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${firaCode.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
