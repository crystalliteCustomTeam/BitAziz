
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
} from "@/src/app/healthcare-app-development-services/data/data";

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
                "name": "Healthcare App Development Services",
                "item": "https://www.bitswits.co/healthcare-app-development-services"
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
            "name": "Premier Healthcare App Development Company | BitsWits",
            "url": "https://www.bitswits.co/healthcare-app-development-services",
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
            "name": "Premier Healthcare App Development Company | BitsWits",
            "alternateName": "BitsWits",
            "url": "https://www.bitswits.co/healthcare-app-development-services",
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
            "name": "Premier Healthcare App Development Company | BitsWits",
            "image": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75",
            "@id": "",
            "url": "https://www.bitswits.co/healthcare-app-development-services",
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
            "name": "Premier Healthcare App Development Company | BitsWits",
            "image": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75",
            "url": "https://www.bitswits.co/healthcare-app-development-services",
            "description": "Leading healthcare app development company building advanced apps for fitness, telemedicine, patient care, appointment scheduling, insurance, and more!",
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
                "name": "How much does healthcare app development cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The cost of healthcare app development generally ranges from $40,000 to $500,000. This depends on factors such as app complexity, required features, and integration needs. For a more precise estimate, it’s essential to outline your project’s scope and objectives. Our team of healthcare app developers can provide a detailed cost breakdown after a thorough consultation."
                }
              },
              {
                "@type": "Question",
                "name": "How do healthcare app development services ensure that apps are easy to use for both healthcare providers and patients?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Healthcare app development services ensure ease of use by closely studying the workflows of healthcare providers and the needs of patients. They incorporate user-centered design principles, ensuring that both parties can navigate the app effortlessly. Features like clear layouts, minimal steps for key actions, and accessible interfaces are prioritized. For healthcare providers, apps are designed to streamline tasks like scheduling and data access, while patients benefit from simple appointment booking, secure communication, and easy access to health information—all with a focus on improving the overall experience."
                }
              },
              {
                "@type": "Question",
                "name": "What types of healthcare apps BitsWits build?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our healthcare app developers at BitsWits specialize in building user-centric healthcare applications, including:\n\nTelemedicine apps for remote consultations and virtual care.\nMedication management apps to track prescriptions and medication schedules.\nWearable integration apps for real-time health monitoring.\nPatient portal apps for easy access to medical records and test results.\nAnd a lot more.\nEven if you want custom features within your app, we can help. Let’s connect and discuss your healthcare app in detail."
                }
              },
              {
                "@type": "Question",
                "name": "What advantages do hospital and private healthcare practices gain with a dedicated app?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hospitals and large practices have a lot to gain from purpose-built healthcare apps, including:\n\nImproved patient management with tools for EHR and scheduling.\nOperational efficiency through automation of administrative tasks.\nEnhanced data integration for seamless communication between departments.\nIf you are a healthcare practitioner or own a large healthcare facility that could benefit from a dedicated healthcare app, we would love to talk to you. Book a free consultation today."
                }
              },
              {
                "@type": "Question",
                "name": "What should I look for in a healthcare app development company?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "When choosing a healthcare and hospital app development company, make sure they offer:\n\nExpertise in healthcare app development and understanding of compliance requirements.\nProven experience with similar projects and timelines.\nTechnical proficiency in relevant technologies and platforms.\nOngoing support and maintenance post-launch.\nA healthcare app development company with a strong track record and battle-hardened healthcare app developers will better meet your specific needs and deliver top-tier results within the deadline."
                }
              },
              {
                "@type": "Question",
                "name": "Can BitsWits deliver mobile app development solutions for businesses in Houston, Austin, and Florida?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, BitsWits provides secure, scalable, and user-friendly mobile apps across Houston, Austin, and Florida, including native, cross-platform, and healthcare-specific solutions."
                }
              }
            ]
          })
        }}
      />

    </>
  );
}

