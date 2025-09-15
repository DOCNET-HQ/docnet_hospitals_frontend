import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ReduxProvider } from '@/components/providers/ReduxProvider'
import { ThemeProvider } from '@/components/theme/theme-provider'

import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DocNet Hospital Dashboard',
  description: 'Dashboard for hospital managers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReduxProvider>
            <main>{children}</main>
            <Toaster position="top-center" />
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
