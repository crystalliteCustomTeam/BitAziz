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
} from "@/src/app/restaurant-app-development-company/data/data"

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
  // const faqData = {
  //   "@context": "https://schema.org",
  //   "@type": "FAQPage",
  //   mainEntity: [
  //     {
  //       "@type": "Question",
  //       name: "What is e-learning software development?",
  //       acceptedAnswer: {
  //         "@type": "Answer",
  //         text: "E-learning software development involves designing and building digital platforms for online education and training. These platforms can include interactive courses, virtual classrooms, assessments, and collaboration tools, all tailored to meet a wide variety of educational needs and enhance the learning experience.",
  //       },
  //     },
  //     {
  //       "@type": "Question",
  //       name: "How can education software development services improve student engagement?",
  //       acceptedAnswer: {
  //         "@type": "Answer",
  //         text: "Education software development services improve student engagement through interactive and personalized learning platforms. Integrating features like gamification, adaptive learning, and real-time feedback tailors educational experiences to individual needs, making learning more engaging and effective.",
  //       },
  //     },
  //     {
  //       "@type": "Question",
  //       name: "How do education app developers address data privacy in educational apps?",
  //       acceptedAnswer: {
  //         "@type": "Answer",
  //         text: "Education app developers address data privacy by implementing robust security measures, such as encryption and secure user authentication. They comply with regulations like FERPA and GDPR to handle student and teacher information with the highest levels of privacy and security.",
  //       },
  //     },
  //     {
  //       "@type": "Question",
  //       name: "Are educational apps profitable?",
  //       acceptedAnswer: {
  //         "@type": "Answer",
  //         text: "Yes, educational apps are profitable. In 2023, they generated $5.93 billion in revenue, driven by increased demand during the pandemic. With the growing emphasis on digital learning, the market for educational apps continues to expand, offering significant opportunities for profitability.",
  //       },
  //     },
  //     {
  //       "@type": "Question",
  //       name: "What makes e-learning app development services essential for modern education?",
  //       acceptedAnswer: {
  //         "@type": "Answer",
  //         text: "Elearning app development services are essential because they create scalable, accessible, and interactive platforms that cater to diverse learning styles. These services support digital classrooms and help institutions maintain continuous learning during disruptions.",
  //       },
  //     },
  //     {
  //       "@type": "Question",
  //       name: "Why choose an e-learning mobile app development firm over a general app development firm?",
  //       acceptedAnswer: {
  //         "@type": "Answer",
  //         text: "An e-learning application development firm specializes in creating educational apps tailored to the specific needs of learners and educators. They have expertise in designing features like interactive content, progress tracking, and real-time collaboration, which effectively support educational goals.",
  //       },
  //     },
  //     {
  //       "@type": "Question",
  //       name: "How do education apps support inclusive learning?",
  //       acceptedAnswer: {
  //         "@type": "Answer",
  //         text: "Education apps support inclusive learning through features like multi-language support, accessibility options for students with disabilities, and personalized learning paths. These apps cater to diverse needs, giving every student equal access to quality education.",
  //       },
  //     },
  //     {
  //       "@type": "Question",
  //       name: "What is the difference between EdTech and eLearning?",
  //       acceptedAnswer: {
  //         "@type": "Answer",
  //         text: "EdTech refers to the broad use of technology in education, including tools like interactive whiteboards and learning management systems that enhance teaching methods. E-Learning, however, specifically focuses on delivering education and training through digital platforms, making learning accessible online.",
  //       },
  //     },
  //   ],
  // }

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
      {/* <Offers bg={true} data={OffersContent} tabs={OffersTabs} /> */}
      {/* <Fueling data={FuelingContent1} list={FuelingList1} bgWhite={true} /> */}
      <Testimonial data={TestimonialContent} list={TestimonialSLIDES} />
      {/* <Fueling data={FuelingContent2} list={FuelingList2} /> */}
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
                name: "Restaurant App Development",
                item: "https://www.bitswits.co/restaurant-app-development-company",
              },
            ],
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
            name: "Restaurant App Development Company - BitsWits",
            alternateName: "BitsWits",
            url: "https://www.bitswits.co/restaurant-app-development-company",
            logo: "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1920&q=75",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1 833 500-6007",
              contactType: "sales",
              contactOption: "TollFree",
              areaServed: "US",
              availableLanguage: "en",
            },
            sameAs: [
              "https://www.facebook.com/officialBitsWits",
              "https://twitter.com/BitsWits_/",
              "https://www.instagram.com/officialBitsWits/",
              "https://www.linkedin.com/company/officialBitsWits",
              "https://www.bitswits.co",
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
            name: "Restaurant App Development Company - BitsWits",
            image:
              "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75",
            "@id": "https://www.bitswits.co/restaurant-app-development-company",
            url: "https://www.bitswits.co/restaurant-app-development-company",
            telephone: "+1 833 500-6007",
            priceRange: "12,000",
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
              latitude: 29.7373358,
              longitude: -95.4616468,
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
                "Sunday",
              ],
              opens: "00:00",
              closes: "23:59",
            },
            sameAs: [
              "https://www.facebook.com/officialBitsWits",
              "https://twitter.com/BitsWits_/",
              "https://www.instagram.com/officialBitsWits/",
              "https://www.linkedin.com/company/officialBitsWits",
              "https://www.bitswits.co",
            ],
          }),
        }}
      />

      {/* FAQs Schema  */}
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqData),
        }}
      /> */}
    </>
  )
}
