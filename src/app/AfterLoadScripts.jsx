"use client";
import { useEffect, useState } from "react";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

export default function AfterLoadScripts() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const onLoad = () => setTimeout(() => setIsReady(true), 5000);
    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }
    return () => window.removeEventListener("load", onLoad);
  }, []);

  if (!isReady) return null;

  return (
    <>
      {/* ✅ Google Tag Manager */}
      <GoogleTagManager gtmId="GTM-TFH5JWNF" />

      {/* ✅ Google Analytics - ONLY GA4 ID */}
      <GoogleAnalytics gaId="G-T8JYHWL639" />
      <GoogleAnalytics gaId="AW-11114809734" />
      {/* ✅ Manually trigger initial page view to ensure data hits GA4 */}
      <Script id="ga-pageview" strategy="afterInteractive">
        {`
          window.gtag && window.gtag('event', 'page_view', {
            page_location: window.location.href,
            page_path: window.location.pathname,
            page_title: document.title
          });
        `}
      </Script>


    </>
  );
}
