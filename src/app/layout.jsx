import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ConditionalHeader from "./ConditionalHeader";
import ConditionalFooter from "./ConditionalFooter";
import AfterLoadScripts from "./AfterLoadScripts";

export const metadata = {
  metadataBase: new URL("https://www.bitswits.co/"),
  title: "Expert Mobile App Development Company | BitsWits",
  description:
    "BitsWits empowers SMBs and entrepreneurs with mobile app development, delivering solutions across 10+ industries to drive business success and growth.",
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
  alternates: { canonical: "/" },
  verification: {
    other: {
      "google-site-verification": ["Qt-497Wghx553U3hqDw6wV8NvilpVp8WK4_5W3rf_a0"],
      "dmca-site-verification": ["Z05ObW9WMWo4VTlQL0VpdEJuTzU0UT090"],
      "msvalidate.01": ["A21040CE08685574268E4A1F724E0FFD"],
    },
  },
  robots: {
    index: true,
    follow: true,
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
      </head>
      <body>
        <ConditionalHeader />
        {children}
        <ConditionalFooter />
        <AfterLoadScripts />
      </body>
    </html>
  );
}
