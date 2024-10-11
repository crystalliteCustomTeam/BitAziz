//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "The Professional Mobile App Development Company NewYork - BitsWits.",
  description: "From iOS to Android and beyond BitsWits is a team of highly skilled and experienced mobile app developers who specialize in creating innovative mobile solutions.",
  //===== OG Tags =====
  openGraph: {
    title: 'The Professional Mobile App Development Company NewYork - BitsWits.',
    description: 'From iOS to Android and beyond BitsWits is a team of highly skilled and experienced mobile app developers who specialize in creating innovative mobile solutions.',
    url: '/app-development-company-new-york',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/app-development-company-new-york' },
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