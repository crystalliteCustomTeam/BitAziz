//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Top Mobile Application Developers | Top mobile app developers",
  description: "From ideation to launch, our top mobile app developers provides end-to-end services that ensure your app is a success.",
  //===== OG Tags =====
  openGraph: {
    title: 'Top Mobile Application Developers | Top mobile app developers',
    description: 'From ideation to launch, our top mobile app developers provides end-to-end services that ensure your app is a success.',
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