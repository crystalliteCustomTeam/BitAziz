import {
  BannerData,
  IndustryServiceContent,
  IndustryServiceList,
  IndustryCtaContent,
  IndustrySliderContent,
  IndustrySliderList,
  ExpertiseContent,
  ExpertiseList1,
  ExpertiseList2,
  TechnologiesContent,
  TechnologiesIcons,
  ProcessContent,
  ProcessTabs,
  WhyChooseContent,
  WhyChooseList1,
  WhyChooseList2,
  OffersContent,
  OffersTabs,
  TestimonialContent,
  TestimonialSLIDES,
  FuelingContent1,
  FuelingList1,
  FuelingContent2,
  FuelingList2,
  TechStackTabs,
  TechStackContent,
  IndustriesContent,
  IndustriesList,
  IdeaCtaContent,
  FaqsContent,
  FaqsList,
  BlogsContent,
  BlogsList,
} from "@/src/app/restaurant-app-development-company/data/data"

import Banner from "@/src/app/industry/banner"
import WhyChoose from "@/src/app/services/whychoose"
import Process from "@/src/app/services/process"
import Technologies from "@/src/app/services/technologies"
import Testimonial from "@/src/app/services/testimonial"
import Offers from "@/src/app/services/offers"
import Fueling from "@/src/app/services/fueling"
import TechStack from "@/src/app/services/techstack"
import Industries from "@/src/app/services/industries"
import IdeaCta from "@/src/app/services/ideacta"
import Faqs from "@/src/app/services/faqs"
import Blogs from "@/src/app/services/blogs"

import IndustryService from "@/src/app/industry/industryservice"
import IndustryCta from "@/src/app/industry/industrycta"
import IndustrySlider from "@/src/app/industry/industryslider"
import Expertise from "@/src/app/industry/expertise"

export default function Page() {


  return (
    <>
      <Banner data={BannerData} />
      <IndustryService
        data={IndustryServiceContent}
        list={IndustryServiceList}
      />
      <IndustryCta data={IndustryCtaContent} />
      <IndustrySlider data={IndustrySliderContent} list={IndustrySliderList} />
      <Expertise
        data={ExpertiseContent}
        list1={ExpertiseList1}
        list2={ExpertiseList2}
      />
      <Technologies data={TechnologiesContent} list={TechnologiesIcons} />
      <Process data={ProcessContent} tabs={ProcessTabs} />
      <WhyChoose
        data={WhyChooseContent}
        list1={WhyChooseList1}
        list2={WhyChooseList2}
      />
      {/* <Offers bg={true} data={OffersContent} tabs={OffersTabs} /> */}
      {/* <Fueling data={FuelingContent1} list={FuelingList1} bgWhite={true} /> */}
      <Testimonial data={TestimonialContent} list={TestimonialSLIDES} />
      {/* <Fueling data={FuelingContent2} list={FuelingList2} /> */}
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
                name: "Restaurant App Development",
                item: "https://www.bitswits.co/restaurant-app-development-company",
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
            name: "Restaurant App Development Company - BitsWits",
            alternateName: "BitsWits",
            url: "https://www.bitswits.co/restaurant-app-development-company",
            logo: "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1920&q=75",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1 833 500-6007",
              contactType: "sales",
              contactOption: "TollFree",
              areaServed: "US",
              availableLanguage: "en",
            },
            sameAs: [
              "https://www.facebook.com/officialBitsWits",
              "https://twitter.com/BitsWits_/",
              "https://www.instagram.com/officialBitsWits/",
              "https://www.linkedin.com/company/officialBitsWits",
              "https://www.bitswits.co",
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
            name: "Restaurant App Development Company - BitsWits",
            image:
              "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75",
            "@id": "https://www.bitswits.co/restaurant-app-development-company",
            url: "https://www.bitswits.co/restaurant-app-development-company",
            telephone: "+1 833 500-6007",
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
              "https://www.bitswits.co",
            ],
          }),
        }}
      />

      {/* Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Restaurant App Development Services",
            "image": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75",
            "description": "BitsWits is a leading restaurant app development company that specializes in creating savory solutions with freshly cooked codes tailored to the unique needs of your dining business.",
            "brand": {
              "@type": "Brand",
              "name": "BitsWits"
            },
            "offers": {
              "@type": "AggregateOffer",
              "url": "https://www.bitswits.co/restaurant-app-development-company",
              "priceCurrency": "USD",
              "lowPrice": "10000",
              "highPrice": "30000",
              "offerCount": "1000"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "bestRating": "5",
              "worstRating": "4.7",
              "ratingCount": "279"
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
                "name": "What features should a restaurant app include?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A great restaurant app should include features such as online ordering, table reservations, menu browsing, push notifications for offers, loyalty programs, real-time order tracking, and payment gateway integration for a seamless customer experience."
                }
              },
              {
                "@type": "Question",
                "name": "How much does it cost to develop a restaurant app?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The cost of developing a restaurant app depends on factors like app complexity, features, design requirements, and platform (iOS, Android, or both). On average, the cost can range from $10,000 to $50,000 or more."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to build a restaurant app?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The development timeline for a restaurant app typically ranges from 3 to 6 months, depending on the app’s features, design, and complexity. Custom features may extend this timeframe."
                }
              },
              {
                "@type": "Question",
                "name": "Can you integrate the app with third-party delivery services like Uber Eats or DoorDash?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we can integrate third-party delivery services and APIs into your restaurant app, allowing customers to choose their preferred delivery partner seamlessly."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer post-launch support and maintenance for the app?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely! We provide post-launch support, regular updates, bug fixes, and maintenance services to ensure your app runs smoothly and stays up-to-date with the latest trends and technologies."
                }
              }
            ]
          })
        }}
      />
    </>
  )
}
