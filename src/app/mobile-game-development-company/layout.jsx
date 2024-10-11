//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "Mobile Game App Development Company - BitsWits",
    description: "BitsWits is a leading mobile game app development company that uses the latest technology to help users create top-ranking game apps across 30+ genres.",
    //===== OG Tags =====
    openGraph: {
        title: "Mobile Game App Development Company - BitsWits",
        description: "BitsWits is a leading mobile game app development company that uses the latest technology to help users create top-ranking game apps across 30+ genres.",
        url: '/mobile-game-development-company',
        siteName: 'BitsWits',
        locale: 'en_US',
        type: 'website',
        images: "/public/images/icons/footerlogo.png",
    },
    //===== Canonical =====
    alternates: { canonical: '/mobile-game-development-company' },
    //===== GEO Tags =====
    other: {
        "DC.title": "Mobile Game App Development Company - BitsWits",
        "geo.region": "US",
        "geo.placename": "Houston",
        "geo.position": "29.7372487; -95.4618603",
        "ICBM": "29.7372487; -95.4618603",
    }

}


export default function RootLayout({ children }) {
    return (children);
}