import {
  BannerData, CompanyInfoContent, ExpertiseContent, ExpertiseList,
  DigitalCtaContent, ExtendedServicesContent,
  IndustriesSlides, IndustriesOptions, TestimonialSLIDES, FaqsContent,
  FaqsList, IdeaCtaContent,
} from "@/src/app/app-marketing/data/data";
import dynamic from "next/dynamic";

const Banner = dynamic(() => import("@/src/app/app-marketing/banner"));
const CompanyInfo = dynamic(() => import("@/src/app/app-marketing/companyinfo"));
const Expertise = dynamic(() => import("@/src/app/app-marketing/expertise"));
const Cta = dynamic(() => import("@/src/app/app-marketing/cta"));
const Casestudies = dynamic(() => import("@/src/app/app-marketing/casestudies"));
const Testimonial = dynamic(() => import("@/src/app/app-marketing/testimonial"));
const DigitalCta = dynamic(() => import("@/src/app/app-marketing/digitalcta"));
const Industries = dynamic(() => import("@/src/app/app-marketing/industries"));
const Portfolio = dynamic(() => import("@/src/app/website-development-services/portfolio"));
const Faqs = dynamic(() => import("@/src/app/website-development-services/faqs"));
const IdeaCta = dynamic(() => import("@/src/app/website-development-services/ideacta"));
const Process = dynamic(() => import("@/src/app/website-development-services/process"));


const OPTIONS = { loop: true, align: 'center' }

export default function Page() {
  return (
    <>
      <Banner data={BannerData} />
      <CompanyInfo data={CompanyInfoContent} />
      <Expertise data={ExpertiseContent} list={ExpertiseList} />
      <Cta />
      <Casestudies />
      <Testimonial data={ExtendedServicesContent} list={TestimonialSLIDES} />
      <DigitalCta data={DigitalCtaContent} />
      <Industries slides={IndustriesSlides} options={IndustriesOptions} />
      <Faqs data={FaqsContent} list={FaqsList} />
      <IdeaCta data={IdeaCtaContent} />
    </>
  );
}

