
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
} from "@/src/app/automotive-software-development/data/data";

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
                "name": "Automotive Software Development Company",
                "item": "https://www.bitswits.co/automotive-software-development"
              }
            ]
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
            "name": "Automotive Software Development Company - BitsWits",
            "url": "https://www.bitswits.co/automotive-software-development",
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
            "name": "Automotive Software Development Company - BitsWits",
            "alternateName": "BitsWits",
            "url": "https://www.bitswits.co/automotive-software-development",
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
            "name": "Automotive Software Development Company - BitsWits",
            "image": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75",
            "@id": "",
            "url": "https://www.bitswits.co/automotive-software-development",
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
            "name": "Automotive Software Development Company - BitsWits",
            "image": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75",
            "url": "https://www.bitswits.co/automotive-software-development",
            "description": "BitsWits is a leading automotive software development company with 50+ projects, creating advanced vehicle software to enhance performance and connectivity.",
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
                "name": "Do you sign an NDA before starting a project?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we sign a Non-Disclosure Agreement (NDA) to ensure your sensitive information and project details remain confidential. We take client privacy very seriously and make sure all data shared during the automotive app development process is fully protected and secure."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to develop automotive software?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The development time varies based on the complexity and scope of the project. On average, custom automotive software development can take anywhere from 3 to 9 months. We follow an agile process to ensure timely delivery while accommodating any necessary revisions."
                }
              },
              {
                "@type": "Question",
                "name": "What is the cost of developing automotive software?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The cost depends on the software’s features, complexity, and integration requirements. A basic solution may start around $20,000, while more complex systems involving advanced diagnostics, telematics, or AI-driven features may cost significantly more. We offer detailed cost breakdowns during the consultation."
                }
              },
              {
                "@type": "Question",
                "name": "Can you integrate third-party APIs into automotive software?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely! We have extensive experience integrating third-party APIs, including telematics, mapping, and diagnostic tools, to enhance the functionality of your automotive software. We ensure all integrations work seamlessly with your existing systems and meet your business needs."
                }
              },
              {
                "@type": "Question",
                "name": "Do you develop both iOS and Android automotive apps?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we develop automotive apps for both iOS and Android platforms. Our team specializes in creating cross-platform solutions that deliver consistent performance across different devices, ensuring a seamless user experience for drivers and fleet managers alike."
                }
              },
              {
                "@type": "Question",
                "name": "How do you ensure the software meets automotive industry standards?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We adhere to automotive industry standards such as ISO 26262, AUTOSAR, and OBD-II protocols. Our team works closely with clients to ensure compliance with these standards, ensuring safety, reliability, and compatibility with various vehicle systems."
                }
              },
              {
                "@type": "Question",
                "name": "Can your software integrate with existing vehicle systems?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we specialize in developing automotive software that integrates seamlessly with existing vehicle systems such as ECUs, infotainment systems, and diagnostic tools. We ensure that our solutions enhance the vehicle’s overall functionality without disrupting existing operations."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer scalability in your automotive software solutions?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our software development for automotive is designed with scalability in mind. Whether you need to expand your fleet, add new vehicles, or implement additional features, we build flexible systems that can grow with your business and adapt to future needs."
                }
              },
              {
                "@type": "Question",
                "name": "What types of vehicles can your software support?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our automotive software solutions are designed for a wide range of vehicles, including electric vehicles (EVs), hybrid cars, trucks, and even autonomous vehicles. We customize software based on specific vehicle requirements and system architecture."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide software testing for vehicle compliance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we conduct comprehensive testing to ensure the software complies with automotive industry standards like ISO 26262 and meets regulatory requirements. Our testing processes include stress tests, real-world simulations, and integration tests with in-vehicle systems."
                }
              },
              {
                "@type": "Question",
                "name": "What level of control will I have over the software development process?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer full transparency throughout the software development lifecycle. You'll be involved in key decision-making processes, receive regular updates, and have the opportunity to provide feedback during each phase of the project."
                }
              },
              {
                "@type": "Question",
                "name": "How do you handle data privacy and user security in automotive software?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We implement stringent data privacy protocols, using encrypted communications, secure authentication, and role-based access control to protect sensitive vehicle and user data. Compliance with industry security standards ensures that your software remains safe from cyber threats."
                }
              }
            ]
          })
        }}
      />

    </>
  );
}

