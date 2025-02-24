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
} from "@/src/app/logistics-software-development/data/data"

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
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does it take to develop logistics software?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The timeline for logistics software development depends on the project’s scope, complexity, and features. Generally, a basic logistics solution may take 3-6 months, while more complex, customized solutions may require 9-12 months, including testing, integration, and deployment.",
        },
      },
      {
        "@type": "Question",
        name: "How much does logistics software development cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The cost of logistics application development varies based on the complexity, required features, and integrations. Typically, small-scale projects start at $20,000, while larger, enterprise-level solutions can exceed $100,000. We provide custom quotes tailored to your business needs after discussing the project requirements.",
        },
      },
      {
        "@type": "Question",
        name: "Do you sign an NDA for logistics software development projects?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, as a trusted logistics software development company, we sign a Non-Disclosure Agreement (NDA) to protect your sensitive information and project details. This ensures complete confidentiality throughout the development process, safeguarding your business ideas and proprietary information.",
        },
      },
      {
        "@type": "Question",
        name: "What industries can benefit from logistics software development services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Logistics software development services are beneficial for a wide range of industries, including manufacturing, retail, healthcare, e-commerce, and transportation. Businesses in these sectors can streamline operations, improve efficiency, and enhance supply chain management through custom logistics software.",
        },
      },
      {
        "@type": "Question",
        name: "Can you integrate logistics software with existing systems?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we specialize in integrating logistics software with existing systems such as ERP, CRM, and warehouse management systems. This seamless integration helps businesses optimize workflows and enhance the overall performance of their logistics operations without requiring major changes to existing infrastructure.",
        },
      },
      {
        "@type": "Question",
        name: "How does logistics software improve fleet management?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Logistics software offers real-time fleet tracking, route optimization, and maintenance scheduling, allowing businesses to efficiently manage their fleet operations. These features reduce operational costs, enhance driver performance, and improve overall fleet efficiency, making fleet management easier and more productive.",
        },
      },
      {
        "@type": "Question",
        name: "Can logistics software development be customized for specific requirements?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer custom logistics software development tailored to your specific operational needs, whether it’s inventory management, fleet tracking, or route optimization. Our solutions are built to address the unique challenges your business faces in logistics management.",
        },
      },
      {
        "@type": "Question",
        name: "Can your logistics software be integrated with third-party platforms?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our logistics software development services support seamless integration with third-party platforms, including ERP, CRM, and warehouse management systems. This ensures smooth data flow and enhances the overall performance of your logistics operations.",
        },
      },
      {
        "@type": "Question",
        name: "What kind of post-launch support do you offer for logistics software?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer comprehensive post-launch support, including regular updates, performance monitoring, and technical assistance. Our team ensures that the logistics software continues to function effectively, adapting to your business’s evolving needs and handling any issues that arise.",
        },
      },
      {
        "@type": "Question",
        name: "Is it possible to get a demo before full logistics software development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer clients the option to view demos or prototypes to better understand how the custom logistics software will work. This helps ensure the solution fits your operational needs before full-scale development begins.",
        },
      },
    ],
  }
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
                name: "Logistics Software Development Company",
                item: "https://www.bitswits.co/logistics-software-development",
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
            name: "Logistics Software Development Company - BitsWits",
            url: "https://www.bitswits.co/logistics-software-development",
            potentialAction: {
              "@type": "SearchAction",
              target: "{search_term_string}",
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
            name: "Logistics Software Development Company - BitsWits",
            alternateName: "BitsWits",
            url: "https://www.bitswits.co/logistics-software-development",
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
            name: "Logistics Software Development Company - BitsWits",
            image:
              "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75",
            "@id": "",
            url: "https://www.bitswits.co/logistics-software-development",
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
            name: "Logistics Software Development Company - BitsWits",
            image:
              "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75",
            url: "https://www.bitswits.co/logistics-software-development",
            description:
              "BitsWits is a top-grade logistics software development company that streamlines operations and optimizes your supply chain with custom solutions.",
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
