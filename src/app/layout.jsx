import dynamic from "next/dynamic";
import 'bootstrap/dist/css/bootstrap.min.css';
import ConditionalLayout from "@/src/app/ConditionalLayout";
const Scripts = dynamic(() => import('@/src/app/Scripts'));

//===== Meta Data =====
export const metadata = {
  metadataBase: new URL("https://www.bitswits.co/"),
  //===== Meta Tags =====
  title: "Expert Mobile App Development Company | BitsWits",
  description: "BitsWits empowers SMBs and entrepreneurs with mobile app development, delivering solutions across 10+ industries to drive business success and growth.",
  //===== OG Tags =====
  openGraph: {
    title: "Expert Mobile App Development Company | BitsWits",
    description: "BitsWits empowers SMBs and entrepreneurs with mobile app development, delivering solutions across 10+ industries to drive business success and growth.",
    url: '/',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/' },
  //===== GEO Tags =====

  //===== Google Varification =====
  verification: {
    other: {
      "google-site-verification": ['SmxcKXGGsgrbCrMZIVszj-NI6nBPPcqGMXls0ciQq2w'],
      "dmca-site-verification": ['Z05ObW9WMWo4VTlQL0VpdEJuTzU0UT090'],
      "msvalidate.01": ['A21040CE08685574268E4A1F724E0FFD'],
    },
  },
  //===== No-Index =====
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-snippet': -1,
      'max-video-preview': -1,
      'max-image-preview': 'large',
    },
  },
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="48x48" type="image/x-icon" />
      <Scripts />
      <body>
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}
