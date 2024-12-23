
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
} from "@/src/app/ecommerce-app-development/data/data";

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
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best eCommerce platform for my business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Choosing the best eCommerce platform depends on your business size, goals, and technical requirements. Popular options include Shopify, BigCommerce, Magento (Adobe Commerce), and WooCommerce. Evaluate each platform’s features, scalability, and ease of use to find the perfect fit, or book your free consultation with our development team to proactively plan everything ahead."
        }
      },
      {
        "@type": "Question",
        "name": "How much does eCommerce app development cost in the USA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost of ecommerce app development in the USA ranges from $30,000 to $300,000. Factors affecting cost include app complexity, features, and development team expertise. It’s essential to define your requirements clearly to get an accurate estimate."
        }
      },
      {
        "@type": "Question",
        "name": "What are the essential features of an eCommerce application?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Key features of an eCommerce application include a user-friendly interface, secure payment gateways, product recommendations, customer reviews, and mobile responsiveness. Integrating these features enhances user experience and increases conversion rates, ensuring a successful app."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to develop an eCommerce app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Developing an eCommerce app typically takes three to six months. The timeline varies based on the app’s complexity, features, and the development team’s proficiency. Proactive planning and the use of agile development practices can streamline the development time to much shorter. Let’s connect and get a detailed app cost breakdown with turnaround time."
        }
      },
      {
        "@type": "Question",
        "name": "What eCommerce application development services does BitsWits offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BitsWits offers comprehensive eCommerce application development services, including UI/UX design, backend development, payment integration, and ongoing support. Our ecommerce app developers focus on creating scalable, secure apps tailored to your business needs, delivering a seamless shopping experience."
        }
      }
    ]
  };
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
                "name": "eCommerce App Development Company",
                "item": "https://www.bitswits.co/ecommerce-app-development"
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
            "name": "Top-Tier eCommerce App Development Company | BitsWits",
            "url": "https://www.bitswits.co/ecommerce-app-development",
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
            "name": "Top-Tier eCommerce App Development Company | BitsWits",
            "alternateName": "BitsWits",
            "url": "https://www.bitswits.co/ecommerce-app-development",
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
            "name": "Top-Tier eCommerce App Development Company | BitsWits",
            "image": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75",
            "@id": "",
            "url": "https://www.bitswits.co/ecommerce-app-development",
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
            "name": "Top-Tier eCommerce App Development Company | BitsWits",
            "image": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75",
            "url": "https://www.bitswits.co/ecommerce-app-development",
            "description": "Partner with BitsWits, a leading eCommerce app development company for tailored, scalable solutions that enhance user experience and drive sales.",
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
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />
    </>
  );
}

