import Banner from "@/src/app/why-choose-bitswits-for-mobile-app-development/banner";
import DubaiBrandTrust from "@/src/components/DubaiBrandTrust";
import AbtCta from "@/src/app/why-choose-bitswits-for-mobile-app-development/abtcta";
import Faqs from "@/src/app/home/faqs";
import IdeaCta from "@/src/app/services/ideacta";
import Awards from "@/src/app/why-choose-bitswits-for-mobile-app-development/awards";
import ExtendedServices from "@/src/app/home/extendedservices";
import Testimonial from "@/src/app/home/testimonial";
import { ExtendedServicesContent, ExtendedServicesList, TestimonialContent, TestimonialSLIDES, FaqsContent, FaqsList, IdeaCtaContent } from "@/src/app/why-choose-bitswits-for-mobile-app-development/data/data";



export default function Page() {
  return (
    <>
      <Banner />
      <DubaiBrandTrust padding={true} />
      <Awards />
      <Awards />
      <AbtCta />
      <Awards />
      <ExtendedServices data={ExtendedServicesContent} list={ExtendedServicesList} />
      <Testimonial data={TestimonialContent} list={TestimonialSLIDES} />
      <Awards />
      <Faqs data={FaqsContent} list={FaqsList} />
      <IdeaCta data={IdeaCtaContent} />
    </>
  );
}

