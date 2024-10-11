//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Mobile Application Development Services | Apps Development Services",
  description: "Ignite your brand's success with our unparalleled mobile application development services, delivering transformative apps that propel your business to new heights.",
  //===== OG Tags =====
  openGraph: {
    title: 'Mobile Application Development Services | Apps Development Services',
    description: "Ignite your brand's success with our unparalleled mobile application development services, delivering transformative apps that propel your business to new heights.",
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