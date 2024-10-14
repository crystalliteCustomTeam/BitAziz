export const metadata = {
  //===== Meta Tags =====
  title: "App Developers in Miami - BitsWits",
  description: " BitsWits is a top-rated mobile app development company in Miami. Our expert app developers can provide custom mobile app solutions for your business.",
  //===== OG Tags =====
  openGraph: {
    title: 'App Developers in Miami - BitsWits',
    description: ' BitsWits is a top-rated mobile app development company in Miami. Our expert app developers can provide custom mobile app solutions for your business.',
    url: '/mobile-app-development-company-miami',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/mobile-app-development-company-miami' },
  //===== GEO Tags =====
  other: {
    "DC.title": "App Developers in Miami",
    "geo.region": "US",
    "geo.position": "25.7671623, -80.1859032",
    "ICBM": " 25.7671623, -80.1859032",
    //==========
    "DC.title": "App Developers in Miami",
    "geo.region": "US",
    "geo.position": "25.7671623, -80.1859032",
    "ICBM": "25.7671623, -80.1859032",
    //==========
    "DC.title": "App Developers in Miami",
    "geo.region": "US",
    "geo.placename": "",
    "geo.position": "25.7671623, -80.1859032",
    "ICBM": "25.7671623, -80.1859032",
  },
  //===== No-Index =====
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-snippet': -1,
      'max-video-preview': -1,
      'max-image-preview': 'large',
    },
  },
}

export default function RootLayout({ children }) {
  return (children);
}