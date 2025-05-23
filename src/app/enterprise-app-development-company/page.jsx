
import {
  BannerData, CuttingedgeContent, CuttingedgeList,
  AppIdeaContent, caseStudiesList,
  caseStudiesContent, ProcessContent,
  WhyChooseContent, WhyChooseList1,
  WhyChooseList2, ProcessTabs, TechnologiesContent,
  TechnologiesIcons, TestimonialContent,
  TestimonialSLIDES, RisksContent,
  OffersContent, OffersTabs, FuelingContent, FuelingList,
  CtaEstimatedContent, TechStackTabs,
  TechStackContent, IndustriesContent,
  IndustriesList, IdeaCtaContent,
  FaqsContent, FaqsList, BlogsContent,
  BlogsList
} from "@/src/app/enterprise-app-development-company/data/data";

import Achieved from "@/src/app/services/achieved";
import Banner from "@/src/app/services/banner";
import Cuttingedge from "@/src/app/services/cuttingedge";
import CaseStudySection from "@/src/app/services/casestudy";
import AppIdea from "@/src/app/services/appidea";
import Process from "@/src/app/services/process";
import Technologies from "@/src/app/services/technologies";
import Testimonial from "@/src/app/services/testimonial";
import WhyChoose from "@/src/app/services/whychoose";
import Risks from "@/src/app/services/risks";
import Offers from "@/src/app/services/offers";
import Fueling from "@/src/app/services/fueling";
import CtaEstimated from "@/src/app/services/cat";
import TechStack from "@/src/app/services/techstack";
import Industries from "@/src/app/services/industries";
import IdeaCta from "@/src/app/services/ideacta";
import Faqs from "@/src/app/services/faqs";
import Blogs from "@/src/app/services/blogs";



export default function Home() {

  return (
    <>
      <Banner data={BannerData} />
      <Achieved />
      <Cuttingedge data={CuttingedgeContent} list={CuttingedgeList} />
      <CaseStudySection data={caseStudiesContent} caseStudies={caseStudiesList} />
      <AppIdea data={AppIdeaContent} />
      <WhyChoose data={WhyChooseContent} list1={WhyChooseList1} list2={WhyChooseList2} />
      <Process data={ProcessContent} tabs={ProcessTabs} />
      <Technologies data={TechnologiesContent} list={TechnologiesIcons} />
      <Testimonial data={TestimonialContent} list={TestimonialSLIDES} />
      <Risks data={RisksContent} />
      <Offers bg={true} data={OffersContent} tabs={OffersTabs} />
      <Fueling data={FuelingContent} list={FuelingList} />
      <CtaEstimated data={CtaEstimatedContent} />
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
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.bitswits.co/"
            }, {
              "@type": "ListItem",
              "position": 2,
              "name": "Mobile App Development Services",
              "item": "https://www.bitswits.co/mobile-application-development-services"
            }]
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
            "name": "Top Mobile App Development Services | BitsWits",
            "url": "https://www.bitswits.co/mobile-application-development-services",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "{search_term_string}",
              "query-input": "required name=search_term_string"
            }
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
            "name": "Top Mobile App Development Services | BitsWits",
            "alternateName": "BitsWits",
            "url": "https://www.bitswits.co/mobile-application-development-services",
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
        }}
      />

      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Top Mobile App Development Services | BitsWits",
            "image": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75",
            "@id": "",
            "url": "https://www.bitswits.co/mobile-application-development-services",
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
        }}
      />

      {/* Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Top Mobile App Development Services | BitsWits",
            "image": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75",
            "url": "https://www.bitswits.co/mobile-application-development-services",
            "description": "BitsWits delivers best mobile app development services with the top app developers, offering customized solutions across industries for impactful results!",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What type of enterprise apps do you develop?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We will work on developing custom mobile and web applications and UI/UX design, integrating them into the cloud, testing software, and maintaining them. All these services are usually designed to address any problem your business is facing and enhance the efficiency of operations."
                }
              },
              {
                "@type": "Question",
                "name": "How do you ensure data security in enterprise apps?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We follow industry standards for security by encrypting your data and implementing multi-factor authentication. We also secure API integrations and multi-factor authentications. Besides, we observe data privacy regulations, such as GDPR, to ensure the protection of your enterprise data at each stage of development."
                }
              },
              {
                "@type": "Question",
                "name": "What industries do you serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We work with the healthcare, finance, logistics, retail, education, e-commerce and manufacturing industries. Our team understands each industry's specific problems and develops customized apps to streamline operations and improve the user experience across all devices."
                }
              },
              {
                "@type": "Question",
                "name": "What is your development process for enterprise apps?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our procedures include requirement gathering, prototyping, development, testing, and deployment. We work seamlessly, ensuring flexibility, collaboration, and speed in delivery while involving clients in the development stages for feedback and improvement."
                }
              },
              {
                "@type": "Question",
                "name": "How do you ensure the scalability of enterprise app development?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We design enterprise apps with scalability in mind, using cloud-native architecture and modular development techniques. This ensures the app can grow well as the number of users increases, adapting to future business growth."
                }
              }
            ]
          })
        }}
      />

    </>
  );
}

