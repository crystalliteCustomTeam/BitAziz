import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ConditionalHeader from "./ConditionalHeader";
import ConditionalFooter from "./ConditionalFooter";
import AfterLoadScripts from "./AfterLoadScripts";
import Script from "next/script";

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
        {/* ✅ LiveChat */}
        <Script id="livechat-script" strategy="afterInteractive">
          {`
          window.__lc = window.__lc || {};
          window.__lc.license = 19210674;
          window.__lc.integration_name = "manual_onboarding";
          window.__lc.product_name = "livechat";
          (function(n,t,c){
            function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}
            var e={_q:[],_h:null,_v:"2.0",
              on:function(){i(["on",c.call(arguments)])},
              once:function(){i(["once",c.call(arguments)])},
              off:function(){i(["off",c.call(arguments)])},
              get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");
              return i(["get",c.call(arguments)])},
              call:function(){i(["call",c.call(arguments)])},
              init:function(){
                var n=t.createElement("script");
                n.async=!0;
                n.type="text/javascript";
                n.src="https://cdn.livechatinc.com/tracking.js";
                t.head.appendChild(n)
              }};
              !n.__lc.asyncInit && e.init();
              n.LiveChatWidget = n.LiveChatWidget || e
          })(window,document,[].slice);
        `}
        </Script>
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
