//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Mobile App Development Company in Houston - BitsWits",
  description: "BitsWits is a leading app development company in Houston helping startups and entrepreneurs across 10+ industries build scalable, and feature-rich mobile apps.",
  //===== OG Tags =====
  openGraph: {
    title: 'Mobile App Development Company in Houston - BitsWits',
    description: 'BitsWits is a leading app development company in Houston helping startups and entrepreneurs across 10+ industries build scalable, and feature-rich mobile apps.',
    url: '/app-development-houston',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/app-development-houston' },
  //===== GEO Tags =====
  other: {
    "DC.title": "Mobile App Development Company in Houston",
    "geo.region": "US",
    "geo.position": "29.7372487; -95.4618603",
    "ICBM": " 29.7372487; -95.4618603",
    //==========
    "DC.title": "Mobile App Development Company in Houston",
    "geo.region": "US-TX",
    "geo.position": "29.7372487; -95.4618603",
    "ICBM": "29.7372487; -95.4618603",
    //==========
    "DC.title": "Mobile App Development Company in Houston",
    "geo.region": "US-TX",
    "geo.placename": "Houston",
    "geo.position": "29.7372487; -95.4618603",
    "ICBM": "29.7372487; -95.4618603",
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