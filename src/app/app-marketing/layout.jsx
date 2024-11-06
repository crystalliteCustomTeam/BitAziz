//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: 'App Marketing Services - BitsWits',
  description: 'Bitswits offers top-notch mobile app marketing services to boost your app’s visibility and drive downloads.We specializes in ASO, user acquisition, and retention strategies to maximize engagement',
  //===== OG Tags =====
  openGraph: {
    title: 'App Marketing Services - BitsWits',
    description: 'Bitswits offers top-notch mobile app marketing services to boost your app’s visibility and drive downloads.We specializes in ASO, user acquisition, and retention strategies to maximize engagement',
    url: '/app-marketing',
    siteName: '',
    locale: 'en_US',
    type: 'website',
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/app-marketing' },
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