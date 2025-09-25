
//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "",
    description: "",
    //===== OG Tags =====
    openGraph: {
        title: "",
        description: "",
        url: '/booking',
        siteName: 'BitsWits',
        locale: 'en_US',
        type: 'website',
        images: "/public/images/icons/footerlogo.png",
    },
    //===== Canonical =====
    alternates: { canonical: '/booking' },
    robots: {
        index: false,
        follow: false,
    },
}


export default function RootLayout({ children }) {
    return (children)
}
