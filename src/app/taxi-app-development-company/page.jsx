
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
} from "@/src/app/taxi-app-development-company/data/data";

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
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.bitswits.co/"
            }, {
              "@type": "ListItem",
              "position": 2,
              "name": "Taxi App Development Company",
              "item": "https://www.bitswits.co/taxi-app-development-company"
            }]
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
            "name": "Taxi Booking App Development Company | BitsWits",
            "url": "https://www.bitswits.co/taxi-app-development-company",
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
            "name": "Taxi Booking App Development Company - BitsWits",
            "alternateName": "BitsWits",
            "url": "https://www.bitswits.co/taxi-app-development-company",
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
            "name": "Taxi Booking App Development Company - BitsWits",
            "image": " https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75 ",
            "@id": "",
            "url": "https://www.bitswits.co/taxi-app-development-company",
            "telephone": "+1 833 500-6007",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "2800 Post Oak Blvd STE 4100",
              "addressLocality": "Houston",
              "addressRegion": "TX",
              "postalCode": " 77056",
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
            "name": "Taxi Booking App Development Company - BitsWits",
            "image": " https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75",
            "url": "https://www.bitswits.co/taxi-app-development-company",
            "description": "BitsWits is a leading taxi app development company that builds taxi apps to boost fleet efficiency, reduce idle time, and increase bookings efficiently.",
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
                "name": "What is the typical cost of developing a custom taxi app?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The cost of custom taxi app development varies depending on factors like features, platform (iOS, Android, or both), and app complexity. A basic app might cost less, while advanced features like real-time tracking and payment gateways can increase the cost. Contact us for an accurate estimate."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to develop a taxi app?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Development time depends on the complexity of the app, including features like driver management, payment integrations, and real-time tracking. On average, a taxi app can take anywhere from 3 to 6 months to develop, including design, testing, and deployment."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer ongoing support after the app is launched?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide ongoing support and maintenance after the app launch. This includes bug fixes, performance enhancements, and feature updates to ensure your app remains up-to-date with industry standards and user expectations."
                }
              },
              {
                "@type": "Question",
                "name": "Do you sign an NDA before starting the project?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely, we sign a Non-Disclosure Agreement (NDA) to protect your app idea and business information. This ensures that your project details remain confidential throughout the development process, giving you peace of mind."
                }
              },
              {
                "@type": "Question",
                "name": "Can you develop both Android and iOS taxi apps?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, as an experienced iOS and Android taxi app development company, we specialize in building apps for both platforms. We ensure your taxi app provides a seamless experience on all devices, maximizing your business reach."
                }
              },
              {
                "@type": "Question",
                "name": "Can I scale the app as my business grows?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our taxi application development services are designed to scale as your business grows. We build the app with future scalability in mind, allowing you to add features or expand to new markets without needing to rebuild the app."
                }
              },
              {
                "@type": "Question",
                "name": "What makes BitsWits a reliable taxi app development company?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "BitsWits stands out as a leading Android and iOS taxi app development company due to our expertise in building secure, scalable, and user-friendly taxi apps. Our team delivers high-quality solutions tailored to meet your business needs, ensuring long-term success."
                }
              },
              {
                "@type": "Question",
                "name": "How do you ensure the security of the app?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We implement advanced security protocols, including data encryption, secure payment gateways, and authentication systems, to protect user data and financial transactions. Our taxi app development solutions are built to meet industry standards for data privacy and security."
                }
              },
              {
                "@type": "Question",
                "name": "How do I get a cost estimate for my taxi app project?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "To get an accurate cost estimate, we recommend contacting our team directly. We assess your specific requirements, such as features, platforms, and integrations, to provide a detailed estimate based on your needs."
                }
              },
              {
                "@type": "Question",
                "name": "Can you integrate the app with other third-party services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, as a flexible taxi booking development company, we can integrate your app with third-party services such as payment gateways, mapping services, and analytics tools. This helps enhance the functionality of your taxi app and improve user experience."
                }
              }
            ]
          })
        }}
      />

    </>
  );
}

