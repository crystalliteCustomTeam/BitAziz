
import {
  BannerData, IndustryServiceContent, IndustryServiceList,
  IndustryCtaContent, IndustrySliderContent, IndustrySliderList,
  ExpertiseContent, ExpertiseList1, ExpertiseList2,
  TechnologiesContent, TechnologiesIcons,
  ProcessContent, ProcessTabs, WhyChooseContent,
  WhyChooseList1, WhyChooseList2, OffersContent,
  OffersTabs, TestimonialContent, TestimonialSLIDES,
  FuelingContent1, FuelingList1, FuelingContent2,
  FuelingList2, TechStackTabs,
  TechStackContent, IndustriesContent, IndustriesList,
  IdeaCtaContent, FaqsContent, FaqsList, BlogsContent,
  BlogsList
} from "@/src/app/music-app-development-company/data/data";

import Banner from "@/src/app/industry/banner";
import WhyChoose from "@/src/app/services/whychoose";
import Process from "@/src/app/services/process";
import Technologies from "@/src/app/services/technologies";
import Testimonial from "@/src/app/services/testimonial";
import Offers from "@/src/app/services/offers";
import Fueling from "@/src/app/services/fueling";
import TechStack from "@/src/app/services/techstack";
import Industries from "@/src/app/services/industries";
import IdeaCta from "@/src/app/services/ideacta";
import Faqs from "@/src/app/services/faqs";
import Blogs from "@/src/app/services/blogs";

import IndustryService from "@/src/app/industry/industryservice";
import IndustryCta from "@/src/app/industry/industrycta";
import IndustrySlider from "@/src/app/industry/industryslider";
import Expertise from "@/src/app/industry/expertise";


export default function Page() {

  return (
    <>
      <Banner data={BannerData} />
      <IndustryService data={IndustryServiceContent} list={IndustryServiceList} />
      <IndustryCta data={IndustryCtaContent} />
      <IndustrySlider data={IndustrySliderContent} list={IndustrySliderList} />
      <Expertise data={ExpertiseContent} list1={ExpertiseList1} list2={ExpertiseList2} />
      <Technologies data={TechnologiesContent} list={TechnologiesIcons} />
      <Process data={ProcessContent} tabs={ProcessTabs} />
      <WhyChoose data={WhyChooseContent} list1={WhyChooseList1} list2={WhyChooseList2} />
      <Offers bg={true} data={OffersContent} tabs={OffersTabs} />
      <Fueling data={FuelingContent1} list={FuelingList1} bgWhite={true} />
      <Testimonial data={TestimonialContent} list={TestimonialSLIDES} />
      <Fueling data={FuelingContent2} list={FuelingList2} />
      <TechStack data={TechStackContent} tabs={TechStackTabs} />
      <Industries data={IndustriesContent} list={IndustriesList} />
      <IdeaCta data={IdeaCtaContent} />
      <Faqs data={FaqsContent} list={FaqsList} />
      <Blogs data={BlogsContent} list={BlogsList} />
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.bitswits.co/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "music app development company",
                "item": "https://www.bitswits.co/music-app-development-company"
              }
            ]
          })
        }}
      />

      {/* Website Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "music app development company - BitsWits",
            "url": "https://www.bitswits.co/music-app-development-company",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "{search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "music app development company - BitsWits",
            "alternateName": "BitsWits",
            "url": "https://www.bitswits.co/music-app-development-company",
            "logo": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1920&q=75",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1 833 500-6007",
              "contactType": "customer service",
              "areaServed": "US",
              "availableLanguage": "en"
            },
            "sameAs": [
              "https://www.facebook.com/officialBitsWits",
              "https://twitter.com/BitsWits_/",
              "https://www.instagram.com/officialBitsWits/",
              "https://www.youtube.com/@officialBitsWits",
              "https://www.linkedin.com/company/officialBitsWits"
            ]
          })
        }}
      />

      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "music app development company - BitsWits",
            "image": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75",
            "@id": "",
            "url": "https://www.bitswits.co/music-app-development-company",
            "telephone": "+1 833 500-6007",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "2800 Post Oak Blvd STE 4100",
              "addressLocality": "Houston",
              "addressRegion": "TX",
              "postalCode": "77056",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 29.7372487,
              "longitude": -95.4618603
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            },
            "sameAs": [
              "https://www.facebook.com/officialBitsWits",
              "https://twitter.com/BitsWits_/",
              "https://www.instagram.com/officialBitsWits/",
              "https://www.youtube.com/@officialBitsWits",
              "https://www.linkedin.com/company/officialBitsWits"
            ]
          })
        }}
      />

      {/* Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "music app development company - BitsWits",
            "image": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75",
            "url": "https://www.bitswits.co/music-app-development-company",
            "description": "Expert music app development company delivering custom solutions for streaming, offline playback, user playlists, and seamless audio experiences.",
            "brand": {
              "@type": "Brand",
              "name": "BitsWits"
            },
            "review": {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "4.9",
                "bestRating": "5"
              },
              "author": {
                "@type": "Organization",
                "name": "Clutch",
                "url": "https://clutch.co/profile/bitswits"
              }
            }
          })
        }}
      />
      {/* FAQPage Schema */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much time does it take to develop a music streaming app?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Clients who have acquired our music streaming app development services were able to launch final app within 4 to 12 weeks. Moreover, depending upon your needs for custom music app development, this time band will certainly increase."
                }
              },
              {
                "@type": "Question",
                "name": "How will you ensure the security of my music app?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "At BitsWits we build solid music app development solutions using robust security mechanisms. We use HTTPS for secure and safe data transmission, conduct regular code and security audits for sensitive data, and performance. Plus, we’re continuously testing layers of security for user authentication, storage and data transmission."
                }
              },
              {
                "@type": "Question",
                "name": "How can I track the progress of my music streaming app development project?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We as your music streaming app development company ensure to maintain transparency in all our interactions. You are kept at the center of all dealings, and are updated on the progress of your music app project through periodic meetings with project managers. You can also reach out to the project team voluntarily to get status updates"
                }
              },
              {
                "@type": "Question",
                "name": "Why should I choose BitsWits for my music streaming app project?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "BitsWits is a renowned music mobile app development company. Having completed 100+ projects in the app development domain, we’ve secured 4.5+ ratings across platforms like Clutch, Trust Pilot and others. This is what makes us a top choice among brands in the music industry."
                }
              }
            ]
          })
        }}
      />


    </>
  );
}

