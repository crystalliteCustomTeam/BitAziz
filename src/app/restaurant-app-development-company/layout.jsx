//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Top Restaurant app development company - Bitswits",
  description:
    "BitsWits, a top restaurant app development company, builds apps with online ordering, reservations, and loyalty programs to grow your business effectively.",
  //===== OG Tags =====
  openGraph: {
    title: "Top Restaurant app development company - Bitswits",
    description:
      "BitsWits, a top restaurant app development company, builds apps with online ordering, reservations, and loyalty programs to grow your business effectively.",
    url: "/restaurant-app-development-company",
    siteName: "BitsWits",
    locale: "en_US",
    type: "website",
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: "/restaurant-app-development-company" },
  //===== GEO Tags =====
  other: {
    "DC.title": "Top Restaurant app development company - Bitswits",
    "geo.region": "US",
    "geo.placename": "Houston",
    "geo.position": "29.7372487; -95.4618603",
    ICBM: "29.7372487; -95.4618603",
  },
}

export default function RootLayout({ children }) {
  return children
}
