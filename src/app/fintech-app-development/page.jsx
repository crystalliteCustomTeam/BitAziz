
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
} from "@/src/app/fintech-app-development/data/data";

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{
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
              "name": "Custom Fintech App Development Services",
              "item": "https://www.bitswits.co/fintech-app-development"
            }
          ]
        }),
      }} />

      {/* Website Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "WebSite",
          "name": "Custom Fintech App Development Services",
          "url": "https://www.bitswits.co/fintech-app-development",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "{search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }),
      }} />

      {/* Organization Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Custom Fintech App Development Services",
          "alternateName": "BitsWits",
          "url": "https://www.bitswits.co/fintech-app-development",
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
        }),
      }} />

      {/* Local Business Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Custom Fintech App Development Services",
          "image": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75",
          "@id": "",
          "url": "https://www.bitswits.co/fintech-app-development",
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
        }),
      }} />

      {/* Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Custom FIntech App Development Services",
            "image": " https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75",
            "url": "https://www.bitswits.co/fintech-app-development",
            "description": "As a leading fintech app development company, BitsWits delivers scalable, industry-leading financial app solutions for fintech entrepreneurs and businesses.",
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
          }),
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
                "name": "What is the cost of developing a fintech app?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The cost of developing a fintech app generally ranges from $50,000 to $400,000. This range depends on various factors, such as the complexity of the app, the features required, and the integrations needed. For a more accurate estimate, it’s crucial to outline your project’s specific needs. Our fintech app development team can provide a detailed quote after discussing your requirements."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to develop a fintech app?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Development timelines for fintech apps vary based on their complexity. On average, creating a fintech app takes between 4 to 8 months. This timeframe includes phases such as planning, design, development, testing, and deployment. We will provide a more precise timeline after reviewing your project’s scope and specific requirements."
                }
              },
              {
                "@type": "Question",
                "name": "What technologies are used in fintech app development?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Fintech app development involves several key technologies. We utilize programming languages like Java, Swift, and Kotlin for building robust applications. Frameworks such as React Native enable us to create cross-platform apps that work on various devices. For infrastructure, we rely on cloud solutions like AWS or Azure to ensure scalability and security. APIs are also integrated to facilitate smooth interactions with financial systems and services."
                }
              },
              {
                "@type": "Question",
                "name": "How do you handle scalability in a fintech app?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Scalability is managed through several strategies. We use cloud-based infrastructure, which allows the app to expand resources as needed to accommodate high traffic. A modular architecture enables us to add or update features without disrupting existing functionalities. Load balancing distributes user traffic to maintain performance and prevent overloads. These approaches ensure the app can adapt to increasing demands efficiently."
                }
              },
              {
                "@type": "Question",
                "name": "What should I look for in a fintech app development company?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "When choosing a fintech app development company, focus on several key factors. Look for expertise in fintech to ensure they understand industry regulations and standards. A proven track record with similar projects and successful launches is essential. Technical skills should align with the latest technologies and platforms. Additionally, consider the company's ability to provide ongoing support and maintenance after the app is launched."
                }
              },
              {
                "@type": "Question",
                "name": "How do I choose the right fintech app developers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Selecting the right fintech app developers involves several considerations. Check their industry experience to ensure they have specific expertise in fintech. Evaluate their technical competence to confirm they are skilled in current technologies. Review their portfolio and references for past projects and client feedback. Finally, assess their communication and support structure to ensure responsiveness and effective problem resolution."
                }
              },
              {
                "@type": "Question",
                "name": "How can I secure my fintech app?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Securing your fintech app involves several essential practices. We implement encryption to safeguard data and maintain confidentiality. Multi-factor authentication is used to add an extra layer of security for user verification. Regular security audits help identify and address potential vulnerabilities. Our fintech app development company incorporates these measures throughout the development process to protect financial data and build user trust."
                }
              },
              {
                "@type": "Question",
                "name": "What should I consider when planning the architecture of a fintech app?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "When planning the architecture for a fintech app, scalability, security, and performance should be your top priorities. Design the architecture in mind capable of efficiently managing high transaction volumes and adapt to growing user numbers.\n\nMoreover, you should implement robust security measures to protect sensitive financial data. Choose a technology stack that supports easy updates and integrations. A well-thought-out architecture is the foundation for a reliable and adaptable application over time."
                }
              }
            ]
          })
        }}
      />

    </>
  );
}

