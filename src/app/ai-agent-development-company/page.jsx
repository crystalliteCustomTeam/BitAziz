import Banner from "@/src/app/ai-agent-development-company/components/banner"
import Awards from "@/src/app/about-us/components/awards";
import Services from "@/src/app/ai-agent-development-company/components/services"
import Insdustry from "@/src/app/ai-agent-development-company/components/insdustry";
import CuttingEdge from "@/src/app/ai-agent-development-company/components/cuttingedge";
import WhyChoose from "@/src/app/ai-agent-development-company/components/WhyChoose";
import CaseStudySection from "@/src/app/ai-agent-development-company/components/casestudy";
import Testimonial from "@/src/app/home/testimonial";
import Faqs from "@/src/app/home/faqs";
import IdeaCta from "@/src/app/services/ideacta";
import {

  TestimonialContent, TestimonialSLIDES, IdeaCtaContent
} from "@/src/app/home/data/data";
import { AwardData, FaqsContent, FaqsList } from "@/src/app/ai-agent-development-company/data/data";

const Page = () => {
  return (
    <>
      <Banner />
      <Awards aiPage={true} data={AwardData} />
      <Services />
      <Insdustry />
      <CuttingEdge />
      <WhyChoose />
      <CaseStudySection />
      <Testimonial data={TestimonialContent} list={TestimonialSLIDES} />
      <Faqs data={FaqsContent} list={FaqsList} />
      <IdeaCta data={IdeaCtaContent} />

    </>
  )
}

export default Page