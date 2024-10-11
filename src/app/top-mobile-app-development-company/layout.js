//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Top Mobile App Development Company | Top Mobile App Developers",
  description: "BitsWits, A top mobile app development company is your go-to destination for top mobile app developers who can help you transform your ideas into extraordinary mobile experiences.",
  //===== OG Tags =====
  openGraph: {
    title: 'Top Mobile App Development Company | Top Mobile App Developers',
    description: 'BitsWits, A top mobile app development company is your go-to destination for top mobile app developers who can help you transform your ideas into extraordinary mobile experiences.',
    url: '/mobile-application-development-services',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/mobile-application-development-services' },
  //===== GEO Tags =====
  other: {
    "DC.title": "Top Mobile App Development Company",
    "geo.region": "US-TX",
    "geo.placename": "Houston",
    "geo.position": "39.78373;-100.445882",
    "ICBM": "39.78373, -100.445882",
    //==========
    "DC.title": "Top Mobile App Development Company",
    "geo.region": "US",
    "geo.position": "39.78373;-100.445882",
    "ICBM": "39.78373, -100.445882",
  },
  //===== No-Index =====
  robots: {
    index: false,
    follow: false,
  },
}

export default function RootLayout({ children }) {
  return (children);
}