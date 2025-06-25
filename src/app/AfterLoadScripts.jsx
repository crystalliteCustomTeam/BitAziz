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
    </>
  );
}
