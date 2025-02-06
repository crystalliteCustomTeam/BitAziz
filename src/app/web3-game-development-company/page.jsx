import Blogs from "@/src/app/services/blogs"
import Faqs from "@/src/app/services/faqs"
import Fueling from "@/src/app/services/fueling"
import IdeaCta from "@/src/app/services/ideacta"

import Offers from "@/src/app/services/offers"
import Process from "@/src/app/services/process"
import TechStack from "@/src/app/services/techstack"
import Testimonial from "@/src/app/services/testimonial"
import WhyChoose from "@/src/app/services/whychoose"
import Activity from "@/src/app/web3-game-development-company/activity"
import Banner from "@/src/app/web3-game-development-company/banner"
import ContentSec from "@/src/app/web3-game-development-company/contentsec"
import GameCta from "@/src/app/web3-game-development-company/gamecta"
import ContentSecLG from "@/src/app/web3-game-development-company/largecontent"
import Projectdiscuss from "@/src/app/web3-game-development-company/projectdiscuss"
import Services from "@/src/app/web3-game-development-company/services"

import {
  BannerData,
  ProjectdiscussContent,
  ServicesContent,
  ServicesList,
  GameCtaContent,
  ContentSecContent,
  ContentSecLGContent,
  ProcessContent,
  WhyChooseContent,
  WhyChooseList1,
  WhyChooseList2,
  ProcessTabs,
  TestimonialContent,
  TestimonialSLIDES,
  OffersContent,
  OffersTabs,
  FuelingContent,
  FuelingList,
  TechStackTabs,
  TechStackContent,
  IdeaCtaContent,
  FaqsContent,
  FaqsList,
  BlogsContent,
  BlogsList,
} from "@/src/app/web3-game-development-company/data/data"

export default function Home() {
  return (
    <>
      <Banner data={BannerData} />
      <Activity />
      <Projectdiscuss data={ProjectdiscussContent} />
      <Services data={ServicesContent} list={ServicesList} />
      <Testimonial data={TestimonialContent} list={TestimonialSLIDES} />
      <GameCta data={GameCtaContent} />
      <ContentSec data={ContentSecContent} />
      <Process data={ProcessContent} tabs={ProcessTabs} />
      <WhyChoose
        data={WhyChooseContent}
        list1={WhyChooseList1}
        list2={WhyChooseList2}
      />
      <Offers bg={true} data={OffersContent} tabs={OffersTabs} />
      <ContentSecLG data={ContentSecLGContent} />
      <IdeaCta data={IdeaCtaContent} />
      {/* <TechStack data={TechStackContent} tabs={TechStackTabs} /> */}
      <Fueling data={FuelingContent} list={FuelingList} />
      <Faqs data={FaqsContent} list={FaqsList} />
      <Blogs data={BlogsContent} list={BlogsList} />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.bitswits.co/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Web3 Game Development Company",
                item: "https://www.bitswits.co/web3-game-development-company",
              },
            ],
          }),
        }}
      />

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Web3 Game Development Company - BitsWits",
            alternateName: "BitsWits",
            url: "https://www.bitswits.co/web3-game-development-company",
            logo: "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1920&q=75",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "18335006007",
              contactType: "customer service",
              contactOption: "TollFree",
              areaServed: "US",
              availableLanguage: "en",
            },
            sameAs: [
              "https://www.facebook.com/officialbitswits/",
              "https://twitter.com/BitsWits_/",
              "https://www.instagram.com/officialBitsWits/",
              "https://www.linkedin.com/company/officialbitswits",
              "https://www.bitswits.co/",
            ],
          }),
        }}
      />

      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Web3 Game Development Company - BitsWits",
            image:
              "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75",
            "@id": "https://www.bitswits.co/web3-game-development-company",
            url: "https://www.bitswits.co/web3-game-development-company",
            telephone: "+1 833 500 6007",
            priceRange: "12,000",
            address: {
              "@type": "PostalAddress",
              streetAddress: "2800 Post Oak Blvd STE 4100",
              addressLocality: "Houston",
              addressRegion: "TX",
              postalCode: "77056",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 29.7373358,
              longitude: -95.4616468,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "00:00",
              closes: "23:59",
            },
            sameAs: [
              "https://www.facebook.com/officialBitsWits",
              "https://twitter.com/BitsWits_/",
              "https://www.instagram.com/officialBitsWits/",
              "https://www.linkedin.com/company/officialBitsWits",
              "https://www.bitswits.co/",
            ],
          }),
        }}
      />
    </>
  )
}
