import {
  BannerData, CompanyInfoContent, ProcessContent, ProcessList,
  TestimonialContent, TestimonialSLIDES,  FaqsContent,
  FaqsList, IdeaCtaContent, DigitalCtaContent
} from "@/src/app/new-ecommerce-development/data/data";
import dynamic from "next/dynamic";
import Advantage from "./advantage";

const Process = dynamic(() => import("@/src/app/new-ecommerce-development/process"));
const Banner = dynamic(() => import("@/src/app/new-ecommerce-development/banner"));
const CompanyInfo =   dynamic(() => import("@/src/app/new-ecommerce-development/companyinfo"));
const Portfolio =   dynamic(() => import("@/src/app/new-ecommerce-development/portfolio"));
const DigitalCta = dynamic(() => import("@/src/app/new-ecommerce-development/digitalcta"));
const Testimonial = dynamic(() => import("@/src/app/new-ecommerce-development/testimonial"));
const Faqs = dynamic(() => import("@/src/app/new-ecommerce-development/faqs"));
const IdeaCta = dynamic(() => import("@/src/app/services/ideacta"));


const OPTIONS = { loop: true, align: 'center' }

export default function Page() {
  return (
    <>
      <Banner data={BannerData} />
      <CompanyInfo data={CompanyInfoContent} />
      <Process data={ProcessContent} list={ProcessList} />
      <Portfolio />
      <DigitalCta data={DigitalCtaContent} />
      <Advantage />
      <Testimonial data={TestimonialContent} list={TestimonialSLIDES} />
      <Faqs data={FaqsContent} list={FaqsList} />
      <IdeaCta data={IdeaCtaContent} />

    </>
  );
}

