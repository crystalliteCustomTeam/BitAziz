//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "",
  description: "",
  //===== OG Tags =====
  openGraph: {
    title: '',
    description: '',
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