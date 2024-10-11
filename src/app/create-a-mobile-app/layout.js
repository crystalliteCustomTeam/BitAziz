//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Create a Mobile App | Custom Solutions from Concept to Launch",
  description: "Create a Mobile App with Bitswits. Where Innovation Meets Excellence | Bitswits.co",
  //===== OG Tags =====
  openGraph: {
    title: 'Create a Mobile App | Custom Solutions from Concept to Launch',
    description: 'Create a Mobile App with Bitswits. Where Innovation Meets Excellence | Bitswits.co',
    url: '/mobile-application-development-services',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/mobile-application-development-services' },
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