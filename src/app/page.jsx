import {
  BannerData, CompanyInfoContent, HomeServicesContent,
  HomeServicesList, CaseStudyContent, ExtendedServicesContent,
  ExtendedServicesList, ProcessContent, ProcessList,
  TestimonialContent, TestimonialSLIDES, SolutionsContent,
  SolutionsList, EngagementContent, EngagementDetailList, EngagementList,
  IndustriesContent, IndustriesSLIDES, FaqsContent,
  FaqsList, IdeaCtaContent, DigitalCtaContent
} from "@/src/app/home/data/data";
import dynamic from "next/dynamic";
const Process = dynamic(() => import("@/src/app/home/process"));
const Banner = dynamic(() => import("@/src/app/home/banner"));
const CaseStudy = dynamic(() => import("@/src/app/home/casestudy"));
const CompanyInfo = dynamic(() => import("@/src/app/home/companyinfo"));
const DigitalCta = dynamic(() => import("@/src/app/home/digitalcta"));
const ExtendedServices = dynamic(() => import("@/src/app/home/extendedservices"));
const HomeServices = dynamic(() => import("@/src/app/home/homeservices"));
const Testimonial = dynamic(() => import("@/src/app/home/testimonial"));
const Solutions = dynamic(() => import("@/src/app/home/solutions"));
const Engagement = dynamic(() => import("@/src/app/home/engagement"));
const Faqs = dynamic(() => import("@/src/app/home/faqs"));
const IdeaCta = dynamic(() => import("@/src/app/services/ideacta"));
const Industries = dynamic(() => import("@/src/app/home/industries"));


const OPTIONS = { loop: true, align: 'center' }

export default function Page() {
  return (
    <>
      <Banner data={BannerData} />
      <CompanyInfo data={CompanyInfoContent} />
      <HomeServices data={HomeServicesContent} list={HomeServicesList} />
      <CaseStudy data={CaseStudyContent} />
      <ExtendedServices data={ExtendedServicesContent} list={ExtendedServicesList} />
      <DigitalCta data={DigitalCtaContent} />
      <Process data={ProcessContent} list={ProcessList} />
      <Testimonial data={TestimonialContent} list={TestimonialSLIDES} />
      <Solutions data={SolutionsContent} list={SolutionsList} />
      <Engagement data={EngagementContent} listDetail={EngagementDetailList} list={EngagementList} />
      <Industries data={IndustriesContent} slides={IndustriesSLIDES} options={OPTIONS} />
      <Faqs data={FaqsContent} list={FaqsList} />
      <IdeaCta data={IdeaCtaContent} />
    </>
  );
}

