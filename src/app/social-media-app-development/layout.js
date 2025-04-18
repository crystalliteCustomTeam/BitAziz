//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Social Media App Development Company | Social Media App Developers",
  description: "Experience the epitome of social media innovation with our top-notch app development company, delivering exceptional results for businesses worldwide.",
  //===== OG Tags =====
  openGraph: {
    title: 'Social Media App Development Company | Social Media App Developers',
    description: 'Experience the epitome of social media innovation with our top-notch app development company, delivering exceptional results for businesses worldwide.',
    url: '/social-media-app-development-company',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/social-media-app-development-company' },
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