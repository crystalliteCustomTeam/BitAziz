
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
} from "@/src/app/social-media-app-development-company/data/data";

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
              "name": "Social Media App Development Company",
              "item": "https://www.bitswits.co/social-media-app-development-company"
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
            "name": "Best Social Media App Development Company - BitsWits",
            "url": "https://www.bitswits.co/social-media-app-development-company",
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
            "name": "Best Social Media App Development Company - BitsWits",
            "alternateName": "BitsWits",
            "url": "https://www.bitswits.co/social-media-app-development-company",
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
            "name": "Best Social Media App Development Company - BitsWits",
            "image": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75",
            "@id": "",
            "url": "https://www.bitswits.co/social-media-app-development-company",
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
            "name": "Best Social Media App Development Company - BitsWits",
            "image": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75",
            "url": "https://www.bitswits.co/social-media-app-development-company",
            "description": "BitsWits is a leading social media app development company that creates feature-rich social media apps, connecting communities and driving brand success!",
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
                "name": "How long does it take to develop a social media app?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The timeline for developing a social media app varies based on the complexity and features required. On average, a basic app may take 3-6 months, while more complex apps with advanced features can take 9-12 months or longer."
                }
              },
              {
                "@type": "Question",
                "name": "What is the cost of developing a social media app?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The cost of developing a social media app depends on factors such as complexity, features, platform (iOS, Android, or both), and design requirements. A basic app might start at $20,000, while more advanced apps with custom features can range from $50,000 to $150,000+."
                }
              },
              {
                "@type": "Question",
                "name": "What features should a social media app include?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Key features of a social media app include user profiles, messaging, photo and video sharing, notifications, news feeds, search functionality, and privacy controls. Depending on your goals, advanced features like live streaming, geolocation, and AI-driven recommendations can also be integrated."
                }
              },
              {
                "@type": "Question",
                "name": "How do you handle the security of user data in social media apps?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We prioritize user data security by implementing robust encryption, secure authentication methods, and compliance with data protection regulations. Our development process includes thorough security testing and regular updates to safeguard against vulnerabilities and ensure a secure user experience."
                }
              },
              {
                "@type": "Question",
                "name": "Can you integrate third-party services into my social media app?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we can integrate a variety of third-party services into your social media app, including payment gateways, analytics tools, social media sharing features, and more. This allows your app to offer enhanced functionality and a seamless user experience across different platforms."
                }
              },
              {
                "@type": "Question",
                "name": "Why should I choose BitsWits as my social media app development company?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As a leading social media app development company, we bring extensive experience, cutting-edge technology, and a client-focused approach to every project. We prioritize understanding your unique needs and delivering custom solutions that align with your business goals and enhance user engagement."
                }
              },
              {
                "@type": "Question",
                "name": "What sets your social media app development services apart from others?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our social media app development services stand out due to our commitment to quality, innovation, and client satisfaction. We offer end-to-end solutions, from ideation to deployment, and provide ongoing support to ensure your app evolves with the latest trends and technologies."
                }
              },
              {
                "@type": "Question",
                "name": "How experienced are your social media app developers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our social media app developers are highly skilled professionals with years of experience in the industry. They are proficient in the latest programming languages, frameworks, and tools, enabling them to create robust, scalable, and user-friendly social media apps tailored to your specific requirements."
                }
              },
              {
                "@type": "Question",
                "name": "How do you compare to other social media app development companies?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Unlike many social media app development companies, we offer a personalized approach, focusing on your specific needs and goals. Our team combines technical expertise with creative design, ensuring that your app stands out in the competitive market and provides a seamless user experience."
                }
              }
            ]
          })
        }}
      />

    </>
  );
}

