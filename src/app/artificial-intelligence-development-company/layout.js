//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Artificial Intelligence Development Company | AI Developers",
  description: "Embrace the future of technology with our Artificial Intelligence development company, delivering intelligent solutions to drive your business forward.",
  //===== OG Tags =====
  openGraph: {
    title: 'Artificial Intelligence Development Company | AI Developers',
    description: 'Embrace the future of technology with our Artificial Intelligence development company, delivering intelligent solutions to drive your business forward.',
    url: '/ai-development-company',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/ai-development-company' },
  //===== GEO Tags =====
  other: {
    "DC.title": "Artificial Intelligence Development Company",
    "geo.region": "US-TX",
    "geo.placename": "Houston",
    "geo.position": "39.78373;-100.445882",
    "ICBM": "39.78373, -100.445882",
    //==========
    "DC.title": "Artificial Intelligence Development Company",
    "geo.region": "US",
    "geo.position": "39.78373;-100.445882",
    "ICBM": "39.78373, -100.445882",
  },
  robots: "noindex, nofollow"
}

export default function RootLayout({ children }) {
  return (children);
}