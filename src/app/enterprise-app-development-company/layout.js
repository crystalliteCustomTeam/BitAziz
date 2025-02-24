//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Best Enterprise App Development Company in USA - Bitswits",
  description:
    "Looking for an Enterprise App Development Company? We deliver scalable, secure apps that drive business growth. Get a free consultation today!",
  //===== OG Tags =====
  openGraph: {
    title: "Best Enterprise App Development Company in USA - Bitswits",
    description:
      "Looking for an Enterprise App Development Company? We deliver scalable, secure apps that drive business growth. Get a free consultation today!",
    url: "/enterprise-app-development-company",
    siteName: "BitsWits",
    locale: "en_US",
    type: "website",
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: "/enterprise-app-development-company" },
  //===== GEO Tags =====
  other: {},
  //===== No-Index =====
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return children
}
