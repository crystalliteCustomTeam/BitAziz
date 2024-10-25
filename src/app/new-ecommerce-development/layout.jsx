//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "",
  description: "",
  //===== OG Tags =====
  openGraph: {
    title: '',
    description: '',
    url: '/new-ecommerce-development',
    siteName: '',
    locale: 'en_US',
    type: 'website',
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/new-ecommerce-development' },
  //===== GEO Tags =====
  other: {},
 
}

export default function RootLayout({ children }) {
  return (children);
}