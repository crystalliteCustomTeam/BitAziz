import dynamic from "next/dynamic";
import "bootstrap/dist/css/bootstrap.min.css";
// import ConditionalLayout from "@/src/app/ConditionalLayout"
// const Scripts = dynamic(() => import("@/src/app/Scripts"))
import ConditionalHeader from "./ConditionalHeader";
import ConditionalFooter from "./ConditionalFooter";
import AfterLoadScripts from "./AfterLoadScripts";
import Script from "next/script";

//===== Meta Data =====
export const metadata = {
  metadataBase: new URL("https://www.bitswits.co/"),
  //===== Meta Tags =====
  title: "Expert Mobile App Development Company | BitsWits",
  description:
    "BitsWits empowers SMBs and entrepreneurs with mobile app development, delivering solutions across 10+ industries to drive business success and growth.",
  //===== OG Tags =====
  openGraph: {
    title: "Expert Mobile App Development Company | BitsWits",
    description:
      "BitsWits empowers SMBs and entrepreneurs with mobile app development, delivering solutions across 10+ industries to drive business success and growth.",
    url: "/",
    siteName: "BitsWits",
    locale: "en_US",
    type: "website",
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: "/" },
  //===== GEO Tags =====

  //===== Google Varification =====
  verification: {
    other: {
      "google-site-verification": [
        "Qt-497Wghx553U3hqDw6wV8NvilpVp8WK4_5W3rf_a0",
      ],
      "dmca-site-verification": ["Z05ObW9WMWo4VTlQL0VpdEJuTzU0UT090"],
      "msvalidate.01": ["A21040CE08685574268E4A1F724E0FFD"],
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
      "max-snippet": -1,
      "max-video-preview": -1,
      "max-image-preview": "large",
    },
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon.ico"
          sizes="48x48"
          type="image/x-icon"
        />

        {/* GTM Script in Head */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TFH5JWNF');
            `,
          }}
        />
      </head>

      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TFH5JWNF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <ConditionalHeader />
        {children}
        <ConditionalFooter />
        <AfterLoadScripts />
      </body>
    </html>
  );
}
