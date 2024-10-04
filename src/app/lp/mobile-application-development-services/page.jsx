import Banner from "@/src/app/services2/banner";
import Achieved from "@/src/app/services2/achieved";
import Cuttingedge from "@/src/app/services2/cuttingedge";
import AppIdea from "@/src/app/services2/appidea";
import WhyChoose from "@/src/app/services2/whychoose";
import Technologies from "@/src/app/services2/technologies";
import Risks from "@/src/app/services2/risks";
import Process from "@/src/app/services2/process";
import Testimonial from "@/src/app/services2/testimonial";
import Offers from "@/src/app/services2/offers";
import Fueling from "@/src/app/services2/fueling";
import CtaEstimated from "@/src/app/services2/cat";
import TechStack from "@/src/app/services2/techstack";
import Industries from "@/src/app/services2/industries";
import IdeaCta from "@/src/app/services2/ideacta";
import Faqs from "@/src/app/services2/faqs";
import Blogs from "@/src/app/services2/blogs";
import Location from "@/src/app/services2/location";
import CaseStudySection from "@/src/app/services2/casestudy";



export default function Home() {
  return (
    <>
      <Banner />
      <Achieved />
      <Cuttingedge />
      <CaseStudySection />
      <AppIdea />
      <WhyChoose />
      <Process />
      <Technologies />
      <Testimonial />
      <Risks />
      <Offers />
      <Fueling />
      {/* <CtaEstimated /> */}
      <TechStack />
      <Industries />
      <IdeaCta />
      <Faqs />
      {/* <Blogs /> */}
    </>
  );
}
