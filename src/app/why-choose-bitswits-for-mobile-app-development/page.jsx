import Banner from "@/src/app/why-choose-bitswits-for-mobile-app-development/banner";
import DubaiBrandTrust from "@/src/components/DubaiBrandTrust";
import AbtCta from "@/src/app/why-choose-bitswits-for-mobile-app-development/abtcta";
import Faqs from "@/src/app/home/faqs";
import IdeaCta from "@/src/app/services/ideacta";
import Awards from "@/src/app/why-choose-bitswits-for-mobile-app-development/awards";
import Testimonial from "@/src/app/home/testimonial";
import { BlogsContent, TestimonialContent, TestimonialSLIDES, FaqsContent, FaqsList, IdeaCtaContent, CertificatesData, PressData, CertificatesTitle, PressTitle, AwardsTitle, BusinessTitle, BusinessData, AwardsData } from "@/src/app/why-choose-bitswits-for-mobile-app-development/data/data";
import KeyPoints from "@/src/app/why-choose-bitswits-for-mobile-app-development/keypoints";
import CaseStudySection from "@/src/app/why-choose-bitswits-for-mobile-app-development/casestudy";
import Blogs from "@/src/app/services/blogs";


export default function Page() {
  return (
    <>
      <Banner />
      <KeyPoints />
      <DubaiBrandTrust padding={true} />
      <Awards data={CertificatesData} content={CertificatesTitle} />
      <Awards data={AwardsData} content={AwardsTitle} />
      <AbtCta />
      <Awards data={PressData} content={PressTitle} />
      <CaseStudySection />
      <Testimonial data={TestimonialContent} list={TestimonialSLIDES} />
      <Awards data={BusinessData} content={BusinessTitle} />
      <Blogs />
      <Faqs data={FaqsContent} list={FaqsList} />
      <IdeaCta data={IdeaCtaContent} />
    </>
  );
}

