import './globals.css'
import { Space_Grotesk } from 'next/font/google'
import Script from 'next/script'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
})

export const metadata = {
  title: 'Aniket Raj',
  description:
    'Mostly friendly. Sometimes nerdy. Always curious. Currently doing a bit of everything at Devfolio and trying not to break anything important.',
  icons: {
    icon: '/favicon.ico', // Update path if your favicon is different
  },
  openGraph: {
    images: [
      {
        url: '/aniket-raj-profile.png', // Update path to your OG image
        width: 1200,
        height: 630,
        alt: 'Aniket Raj',
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable}`}>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-NY2R9N80RR"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NY2R9N80RR');
        `}
      </Script>
      <body className="font-body">{children}</body>
    </html>
  )
}
