
//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "Author Page | BitsWits",
    description: "",
    //===== OG Tags =====
    openGraph: {
        title: "Author Page | BitsWits",
        description: "",
        url: '/isabella-harris',
        siteName: 'BitsWits',
        locale: 'en_US',
        type: 'website',
        images: "/public/images/icons/footerlogo.png",
    },
    //===== Canonical =====
    alternates: { canonical: '/isabella-harris' },
      //===== No-Index =====
  robots: {
    index: false,
    follow: false,
}
}


export default function RootLayout({ children }) {
    return (children)
}
