//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "BitsWits",
  description: "Apps that simplify your life, one click at a time, BitsWits is your go-to destination for top mobile app developers who can help you bring your ideas to life.",
  //===== OG Tags =====
  openGraph: {
    title: 'BitsWits',
    description: 'Apps that simplify your life, one click at a time, BitsWits is your go-to destination for top mobile app developers who can help you bring your ideas to life.',
    url: '/healthcare-app-development-case-study',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/healthcare-app-development-case-study' },
  //===== No-Index =====
  robots: {
    index: false,
    follow: false,
  },
  //===== GEO Tags =====
  other: {},
}

export default function RootLayout({ children }) {
  return (children);
}