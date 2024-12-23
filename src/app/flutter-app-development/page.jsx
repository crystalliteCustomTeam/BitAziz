import {
  BannerData,
  CuttingedgeContent,
  CuttingedgeList,
  AppIdeaContent,
  caseStudiesList,
  caseStudiesContent,
  ProcessContent,
  WhyChooseContent,
  WhyChooseList1,
  WhyChooseList2,
  ProcessTabs,
  TechnologiesContent,
  TechnologiesIcons,
  TestimonialContent,
  TestimonialSLIDES,
  RisksContent,
  OffersContent,
  OffersTabs,
  FuelingContent,
  FuelingList,
  CtaEstimatedContent,
  TechStackTabs,
  TechStackContent,
  IndustriesContent,
  IndustriesList,
  IdeaCtaContent,
  FaqsContent,
  FaqsList,
  BlogsContent,
  BlogsList,
} from "@/src/app/flutter-app-development/data/data"

import Achieved from "@/src/app/services/achieved"
import Banner from "@/src/app/services/banner"
import Cuttingedge from "@/src/app/services/cuttingedge"
import CaseStudySection from "@/src/app/services/casestudy"
import AppIdea from "@/src/app/services/appidea"
import Process from "@/src/app/services/process"
import Technologies from "@/src/app/services/technologies"
import Testimonial from "@/src/app/services/testimonial"
import WhyChoose from "@/src/app/services/whychoose"
import Risks from "@/src/app/services/risks"
import Offers from "@/src/app/services/offers"
import Fueling from "@/src/app/services/fueling"
import CtaEstimated from "@/src/app/services/cat"
import TechStack from "@/src/app/services/techstack"
import Industries from "@/src/app/services/industries"
import IdeaCta from "@/src/app/services/ideacta"
import Faqs from "@/src/app/services/faqs"
import Blogs from "@/src/app/services/blogs"

export default function Page() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What platforms does Flutter support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Flutter supports multiple platforms, including iOS, Android, web, and desktop (Windows, macOS, and Linux). Flutter app development enables developers to build cross-platform apps using a single codebase, reducing development time and ensuring consistent user experiences across devices.",
        },
      },
      {
        "@type": "Question",
        name: "Can existing apps integrate with Flutter?",
        acceptedAnswer: {
          "@type": "Answer",
          text: 'Yes, Flutter can be integrated into existing apps using its "Add-to-App" feature. Flutter for mobile app development allows developers to gradually incorporate Flutter modules into native applications, enhancing functionality without needing a complete rewrite.',
        },
      },
      {
        "@type": "Question",
        name: "How does Flutter ensure app performance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Flutter delivers high performance by using a single codebase for all platforms and compiling directly to native code. Its rendering engine, combined with efficient architecture, ensures smooth animations and fast execution.",
        },
      },
      {
        "@type": "Question",
        name: "Is Flutter suitable for enterprise-level apps?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Flutter is suitable for enterprise-level apps. It provides robust features, excellent performance, and the ability to create scalable and secure applications, making it a popular choice for businesses of all sizes.",
        },
      },
      {
        "@type": "Question",
        name: "Which company does Flutter belong to?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Flutter is an open-source framework developed and supported by Google.",
        },
      },
      {
        "@type": "Question",
        name: "How much does Flutter app builder cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The cost of building a Flutter app varies widely, typically ranging from $15,000 to $200,000, based on the project’s complexity and requirements. Simple Flutter apps usually cost between $15,000 and $60,000. More complex apps can range from $60,000 to $150,000, while highly advanced Flutter apps can cost anywhere from $150,000 to $300,000. As a leading Flutter application development company, BitsWits offers competitive pricing from $30,000 to $200,000 to build your game-changing app!",
        },
      },
      {
        "@type": "Question",
        name: "Is Flutter good for app development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Flutter is an excellent choice for app development. It offers numerous advantages, such as cost efficiency, rapid development, and a short time-to-market. Its ease of team organization makes it increasingly popular for new projects. Additionally, Flutter can seamlessly integrate with existing apps written in native languages, making it versatile for both new and ongoing projects.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to build a Flutter app?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The time it takes to build a Flutter app varies based on complexity. A simple Flutter app can typically be completed in about 2 months. Medium-complexity projects usually take around 4 months, while more complex apps may require 4 to 6 months of development. For example, creating a basic messaging app generally takes less time compared to more feature-rich applications.",
        },
      },
    ],
  }
  return (
    <>
      <Banner data={BannerData} />
      <Achieved />
      <Cuttingedge data={CuttingedgeContent} list={CuttingedgeList} />
      <CaseStudySection
        data={caseStudiesContent}
        caseStudies={caseStudiesList}
      />
      <AppIdea data={AppIdeaContent} />
      <WhyChoose
        data={WhyChooseContent}
        list1={WhyChooseList1}
        list2={WhyChooseList2}
      />
      <Process data={ProcessContent} tabs={ProcessTabs} />
      <Technologies data={TechnologiesContent} list={TechnologiesIcons} />
      <Testimonial data={TestimonialContent} list={TestimonialSLIDES} />
      <Risks data={RisksContent} />
      <Offers bg={true} data={OffersContent} tabs={OffersTabs} />
      <Fueling data={FuelingContent} list={FuelingList} />
      <CtaEstimated data={CtaEstimatedContent} />
      {/* <TechStack data={TechStackContent} tabs={TechStackTabs}/> */}
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
                name: "Flutter App Development Company",
                item: "https://www.bitswits.co/flutter-app-development",
              },
            ],
          }),
        }}
      />

      {/* Website Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            name: "Flutter App Development Company - BitsWits",
            url: "https://www.bitswits.co/flutter-app-development",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://www.bitswits.co/flutter-app-development/?s={search_term_string}",
              "query-input": "required name=search_term_string",
            },
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
            name: "Flutter App Development Company - BitsWits",
            alternateName: "BitsWits",
            url: "https://www.bitswits.co/flutter-app-development",
            logo: "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1920&q=75",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1 833 500-6007",
              contactType: "customer service",
              areaServed: "US",
              availableLanguage: "en",
            },
            sameAs: [
              "https://www.facebook.com/officialBitsWits",
              "https://twitter.com/BitsWits_",
              "https://www.instagram.com/officialBitsWits/",
              "https://www.youtube.com/@officialBitsWits",
              "https://www.linkedin.com/company/officialBitsWits",
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
            name: "Flutter App Development Company - BitsWits",
            image:
              "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75",
            url: "https://www.bitswits.co/flutter-app-development",
            telephone: "+1 833 500-6007",
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
              latitude: 29.7372487,
              longitude: -95.4618603,
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
              ],
              opens: "00:00",
              closes: "23:59",
            },
            sameAs: [
              "https://www.facebook.com/officialBitsWits",
              "https://twitter.com/BitsWits_",
              "https://www.instagram.com/officialBitsWits/",
              "https://www.youtube.com/@officialBitsWits",
              "https://www.linkedin.com/company/officialBitsWits",
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
            name: "Flutter App Development Company - BitsWits",
            image:
              "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75",
            url: "https://www.bitswits.co/flutter-app-development",
            description:
              "BitsWits empowers SMBs and entrepreneurs with mobile app development, delivering solutions across 10+ industries to drive business success and growth.",
            brand: {
              "@type": "Brand",
              name: "BitsWits",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "100",
            },
            review: {
              "@type": "Review",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "4.9",
                bestRating: "5",
              },
              author: {
                "@type": "Organization",
                name: "Clutch",
                url: "https://clutch.co/profile/bitswits",
              },
            },
          }),
        }}
      />
      {/* FAQs Schema  */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqData),
        }}
      />
    </>
  )
}
