//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "BitsWits",
  description: "Apps that simplify your life, one click at a time, BitsWits is your go-to destination for top mobile app developers who can help you bring your ideas to life.",
  //===== OG Tags =====
  openGraph: {
    title: 'BitsWits',
    description: 'Apps that simplify your life, one click at a time, BitsWits is your go-to destination for top mobile app developers who can help you bring your ideas to life.',
    url: '/real-estate-app-development-case-study',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/real-estate-app-development-case-study' },
  //===== GEO Tags =====
  other: {},
  //===== No-Index =====
  robots: {
    index: false,
    follow: false,
  },
}

export default function RootLayout({ children }) {
  return (children);
}