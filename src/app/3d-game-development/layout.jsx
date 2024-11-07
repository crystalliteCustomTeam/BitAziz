//===== Meta Data =====
export const metadata = {
    //===== Meta Tags =====
    title: "Top 3D Game Development Company | BitsWits",
    description: "Hire the top 1% 3D game developers in USA to create immersive games with our 3D game development company, offering end-to-end services to ambitious clients!",
    //===== OG Tags =====
    openGraph: {
        title: "Top 3D Game Development Company | BitsWits",
        description: "Hire the top 1% 3D game developers in USA to create immersive games with our 3D game development company, offering end-to-end services to ambitious clients!",
        url: '/3d-game-development-company',
        siteName: 'BitsWits',
        locale: 'en_US',
        type: 'website',
        images: "/public/images/icons/footerlogo.png",
    },
    //===== Canonical =====
    alternates: { canonical: '/3d-game-development-company' },
    //===== No-Index =====
    robots: {
        index: false,
        follow: false,
    },
}


export default function RootLayout({ children }) {
    return (children);
}