//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Top Mobile App Development Services | BitsWits",
  description: "BitsWits delivers best mobile app development services with the top app developers, offering customized solutions across industries for impactful results!",
  //===== OG Tags =====
  openGraph: {
    title: "Top Mobile App Development Services | BitsWits",
    description: "BitsWits delivers best mobile app development services with the top app developers, offering customized solutions across industries for impactful results!",
    url: '/lp/mobile-application-development-services',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/lp/mobile-application-development-services' },

  //===== No-Index =====
  robots: {
    index: false,
    follow: false,
  },
}


export default function RootLayout({ children }) {
  return (children);
}
