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
} from "@/src/app/android-app-development-company/data/data"

import Banner from "@/src/app/services/banner"
import Achieved from "@/src/app/services/achieved"
import Cuttingedge from "@/src/app/services/cuttingedge"
import CaseStudySection from "@/src/app/services/casestudy"
import AppIdea from "@/src/app/services/appidea"
import WhyChoose from "@/src/app/services/whychoose"
import Process from "@/src/app/services/process"
import Technologies from "@/src/app/services/technologies"
import Testimonial from "@/src/app/services/testimonial"
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
        name: "What programming languages are used in Android app development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Android app development primarily uses Java and Kotlin. Java, a long-established language, provides robust functionality, while Kotlin, a newer language endorsed by Google, offers modern features and concise syntax. A skilled Android app development team will utilize these languages effectively to build responsive and high-performance apps tailored to your needs.",
        },
      },
      {
        "@type": "Question",
        name: "Can you launch an Android app for free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Launching an Android app involves costs such as development, Google Play Store fees, and potential marketing expenses. Although development is not free, partnering with an experienced Android app development company can optimize resource use and manage costs efficiently.",
        },
      },
      {
        "@type": "Question",
        name: "Why hire an Android app development company?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hiring a specialized Android app development company provides access to experienced developers who understand the platform’s specifics. They offer custom solutions to meet business needs and handle ongoing support and updates. This approach often leads to a more efficient development process and a higher-quality final product.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to develop an Android app?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The development timeline for an Android app varies based on complexity, features, and design. Basic apps might take 3-6 months, while more complex apps could take up to a year. Working with a proficient Android app development team can help streamline the process and meet deadlines effectively.",
        },
      },
      {
        "@type": "Question",
        name: "What should I consider when choosing an Android app development company?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "When selecting an Android app development company, review their portfolio, client feedback, and industry expertise. Look for a team that provides comprehensive services, including design, development, testing, and support. Clear communication and a solid understanding of your project goals are crucial for a successful partnership.",
        },
      },
      {
        "@type": "Question",
        name: "How much does Android app development cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The cost of Android app development depends on the app’s complexity, features, and design. Basic apps typically range from $10,000 to $50,000, while advanced apps can exceed $100,000. Discuss your budget and requirements with a reliable development company to get an accurate cost estimate.",
        },
      },
      {
        "@type": "Question",
        name: "What features make Android apps successful?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Successful Android apps feature user-friendly interfaces, efficient navigation, high performance, and strong security. Incorporating advanced technologies like AI and AR can further enhance user experience. A professional Android app development team can help integrate these features effectively.",
        },
      },
      {
        "@type": "Question",
        name: "How do I maintain and update my Android app after launch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Post-launch maintenance involves regular updates, bug fixes, and performance enhancements. Choose an Android app development company that offers ongoing support to address issues, update the app for new Android versions, and add new features as needed to keep the app functional and relevant.",
        },
      },
      {
        "@type": "Question",
        name: "How do I ensure my Android app stands out in the market?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To make your Android app stand out, focus on a unique value proposition, exceptional user experience, and effective marketing strategies. Incorporate feedback from user testing to refine the app and use data-driven insights to make improvements. Partnering with a skilled app development company can also help you achieve a competitive edge.",
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
      {/* <TechStack data={TechStackContent} tabs={TechStackTabs} /> */}
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
                name: "Android App Development Company",
                item: "https://www.bitswits.co/android-app-development-company",
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
            name: "Leading Android App Development Company - BitsWits",
            url: "https://www.bitswits.co/android-app-development-company",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://www.bitswits.co/android-app-development-company?search_term_string={search_term_string}", // Updated target URL
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
            name: "Leading Android App Development Company - BitsWits",
            alternateName: "BitsWits",
            url: "https://www.bitswits.co/android-app-development-company",
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
              "https://twitter.com/BitsWits_/",
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
            name: "Leading Android App Development Company - BitsWits",
            image:
              "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75",
            "@id":
              "https://www.bitswits.co/android-app-development-company#business",
            url: "https://www.bitswits.co/android-app-development-company",
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
              "https://twitter.com/BitsWits_/",
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
            name: "Leading Android App Development Company - BitsWits",
            image:
              "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75",
            url: "https://www.bitswits.co/android-app-development-company",
            description:
              "BitsWits is a premier Android app development company that makes user-friendly and premium android apps for all types of businesses.",
            brand: {
              "@type": "Brand",
              name: "BitsWits",
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
