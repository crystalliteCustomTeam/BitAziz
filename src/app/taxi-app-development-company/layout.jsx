//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Taxi Booking App Development Company - BitsWits",
  description: "BitsWits is a leading taxi app development company that builds taxi apps to boost fleet efficiency, reduce idle time, and increase bookings efficiently.",
  //===== OG Tags =====
  openGraph: {
    title: "Taxi Booking App Development Company - BitsWits",
    description: "BitsWits is a leading taxi app development company that builds taxi apps to boost fleet efficiency, reduce idle time, and increase bookings efficiently.",
    url: '/taxi-app-development-company',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/taxi-app-development-company' },
  //===== GEO Tags =====
  other: {
    "DC.title": "Taxi Booking App Development Company - BitsWits",
    "geo.region": "US",
    "geo.placename": "Houston",
    "geo.position": "29.7372487; -95.4618603",
    "ICBM": "29.7372487; -95.4618603",
  }
}


export default function RootLayout({ children }) {
  return (children)
}