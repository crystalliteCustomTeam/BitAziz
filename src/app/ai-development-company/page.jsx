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
} from "@/src/app/ai-development-company/data/data"

import Achieved from "@/src/app/services/achieved"
import Banner from "@/src/app/services/banner"
import Cuttingedge from "@/src/app/services/cuttingedge"
import CaseStudySection from "@/src/app/services/casestudy"
import AppIdea from "@/src/app/services/appidea"
import Process from "@/src/app/services/process"
import Technologies from "@/src/app/services/technologies"
import Testimonial from "@/src/app/services/testimonial"
import WhyChoose from "@/src/app/services/whychoose"
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
        name: "What are the benefits of AI development for businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI development offers numerous benefits for businesses, including improved efficiency, enhanced customer experiences, and the ability to make data-driven decisions. By automating routine tasks, providing predictive analytics, and personalizing customer interactions, AI helps businesses stay competitive and innovative in their respective industries.",
        },
      },
      {
        "@type": "Question",
        name: "How much does AI development cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The cost of AI development varies widely depending on the complexity of the project, the technologies used, and the specific requirements of the business. Simple AI solutions might cost around $10,000 to $60,000, while more advanced projects can exceed $100,000. It’s important to discuss your budget and objectives with an experienced AI development company to get an accurate estimate.",
        },
      },
      {
        "@type": "Question",
        name: "What industries benefit most from AI application development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI application development can benefit a wide range of industries, including healthcare, finance, retail, manufacturing, and logistics. In healthcare, AI can improve diagnostics and patient care. In finance, it enhances fraud detection and customer service. Retail businesses use AI for personalized shopping experiences, while manufacturing benefits from predictive maintenance and quality control.",
        },
      },
      {
        "@type": "Question",
        name: "What technologies are used in AI software development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI software development leverages various technologies such as machine learning (ML), natural language processing (NLP), computer vision, and neural networks. These technologies enable applications to learn from data, understand human language, recognize patterns, and make intelligent decisions. Popular programming languages for AI development include Python, R, and Java.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to develop an AI solution",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The timeline for developing an AI solution depends on the project’s complexity and scope. Simple AI applications can be developed in a few months, while more complex solutions may take a year or longer. Working with a skilled AI development company can help streamline the process and ensure timely delivery.",
        },
      },
      {
        "@type": "Question",
        name: "Can AI solutions be customized to specific business needs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, AI solutions can be highly customized to meet specific business needs. AI developers can tailor algorithms and models to address unique challenges and objectives, ensuring that the solution aligns with your business goals. Custom AI development can provide a significant competitive advantage by optimizing processes and delivering personalized experiences.",
        },
      },
      {
        "@type": "Question",
        name: "How do AI and machine learning improve customer support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI and machine learning improve customer support by automating responses, providing instant solutions to common queries, and predicting customer needs. AI-powered chatbots and virtual assistants offer 24/7 support, enhancing customer satisfaction and reducing response times. ML algorithms analyze customer interactions to provide personalized recommendations and proactive support.",
        },
      },
      {
        "@type": "Question",
        name: "What is the role of AI in quality assurance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI plays a critical role in quality assurance by automating testing processes, identifying defects, and predicting potential issues before they occur. AI-driven quality assurance tools can analyze large datasets to detect anomalies, ensuring that products meet high standards of quality and reliability. This leads to reduced errors, faster release cycles, and improved customer satisfaction.",
        },
      },
      {
        "@type": "Question",
        name: "What should I consider when choosing an AI development company?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "When selecting an AI development company, consider their expertise, portfolio, and client testimonials. Look for a team with a proven track record in delivering successful AI projects and a deep understanding of your industry. Effective communication, transparency, and a collaborative approach are also crucial for a successful partnership.",
        },
      },
      {
        "@type": "Question",
        name: "How can AI development benefit startups?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI development can provide startups with innovative solutions to enhance their products and services. AI technologies enable startups to leverage data for better decision-making, automate tasks to increase efficiency, and create personalized experiences for their customers. By adopting AI early, startups can gain a competitive edge and scale their operations more effectively.",
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
                name: "AI Development Company",
                item: "https://www.bitswits.co/ai-development-company",
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
            name: "AI Development Company - BitsWits",
            url: "https://www.bitswits.co/ai-development-company",
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
            name: "AI Development Company - BitsWits",
            alternateName: "BitsWits",
            url: "https://www.bitswits.co/ai-development-company",
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
            name: "AI Development Company - BitsWits",
            image:
              "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75",
            url: "https://www.bitswits.co/ai-development-company",
            telephone: "833 500-6007",
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
            name: "AI Development Company - BitsWits",
            image:
              "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75",
            url: "https://www.bitswits.co/ai-development-company",
            description:
              "BitsWits is a top-tier AI app development company building products for future-ready enterprises using cutting-edge AI development services.",
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
