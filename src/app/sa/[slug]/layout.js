//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title:
    " بيتس ويتس - شركة تطوير تطبيقات الهواتف المحمولة في المملكة العربية السعودية ",
  description:
    "هل تبحث عن شركة رائدة في تطوير تطبيقات الجوال في المملكة العربية السعودية ؟ تقدم بيتس ويتس أفضل الخدمات بخبرة واسعة في تطوير تطبيقات الجوال.",
  //===== OG Tags =====
  openGraph: {
    title:
      " بيتس ويتس - شركة تطوير تطبيقات الهواتف المحمولة في المملكة العربية السعودية ",
    description:
      "هل تبحث عن شركة رائدة في تطوير تطبيقات الجوال في المملكة العربية السعودية ؟ تقدم بيتس ويتس أفضل الخدمات بخبرة واسعة في تطوير تطبيقات الجوال.",
    url: "/sa/تصميم-تطبيقات-الجوال-في-السعودية",
    siteName: "BitsWits",
    locale: "en_US",
    type: "website",
  },
  //===== Canonical =====
  alternates: { canonical: "/sa/تصميم-تطبيقات-الجوال-في-السعودية" },
  //===== GEO Tags =====

  //===== No-Index =====
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return children;
}
