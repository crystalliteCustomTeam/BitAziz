
//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "",
  description: "",
  //===== OG Tags =====
  openGraph: {
    title: "",
    description: "",
    url: '/ai-agent-development-company',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/ai-agent-development-company' },
  robots: {
    index: false,
    follow: false,
  },
}


export default function RootLayout({ children }) {
  return (children)
}
