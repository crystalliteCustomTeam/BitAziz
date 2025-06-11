//===== Meta Data =====
export const metadata = {
  title: "2D Game Development Company | 2D Game Developers",
  description:
    "Take your gaming experience to the next level with our award-winning 2D game developers! We craft innovative games with superior graphics, sounds, and controls.",
  openGraph: {
    title: "2D Game Development Company | 2D Game Developers",
    description:
      "Take your gaming experience to the next level with our award-winning 2D game developers! We craft innovative games with superior graphics, sounds, and controls.",
    url: "https://www.bitswits.co/2d-game-development-company",
    siteName: "BitsWits",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.bitswits.co/images/icons/footerlogo.png",
        width: 800,
        height: 600,
        alt: "BitsWits Logo",
      },
    ],
  },
  alternates: {
    canonical: "https://www.bitswits.co/2d-game-development-company",
  },
  other: {
    "DC.title": "2D Game Development Company",
    "geo.region": "US-TX",
    "geo.placename": "Houston",
    "geo.position": "39.78373;-100.445882",
    ICBM: "39.78373, -100.445882",
  },
};

export default function RootLayout({ children }) {
  return children;
}
