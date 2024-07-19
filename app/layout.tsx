import Footer from '@/components/Footer'
import Header from '@/components/Header'
import config from '@/lib/config'
import type {Metadata, Viewport} from 'next'
import './globals.css'
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '700'], // Specify the font weights you need
  style: ['normal', 'italic'], // Specify styles if needed
  subsets: ['latin'], // Specify subsets if needed
  display: 'swap', // Optional: controls how font is displayed
});

/**
 * Setup metadata.
 *
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/metadata
 */
export const metadata: Metadata = {
  metadataBase: new URL(config.siteUrl),
  title: `${config.siteName} - ${config.siteDescription}`,
  description: config.siteDescription
}

/**
 * Setup viewport.
 *
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-viewport
 */
export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#18181b'
}

/**
 * Root layout component.
 *
 * @see https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
 */
export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  )
}
