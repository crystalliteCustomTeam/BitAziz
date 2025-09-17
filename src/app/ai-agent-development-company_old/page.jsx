import Banner from '@/src/components/ai/banner'
import Talk from '@/src/components/ai/talk'
import HomeServices from '@/src/app/home/homeservices'
import { HomeServicesContent, HomeServicesList } from '@/src/app/ai-agent-development-company/data/data'
import Feature from '@/src/components/ai/feature'
import CaseStudies from '@/src/components/ai/casestudies'
import Vision from '@/src/components/ai/vision'
import Testimonial from '../home/testimonial'
import { TestimonialContent, TestimonialSLIDES, FaqsContent, FaqsList } from '@/src/app/home/data/data'
import Choose from '@/src/components/ai/choose'
import CtaSection from '@/src/components/ai/ctasection'
import Faqs from '../home/faqs'


const Page = () => {
  return (
    <>
      <Banner />
      <Talk />
      <HomeServices data={HomeServicesContent} list={HomeServicesList} />
      <Feature />
      <CaseStudies />
      <Vision />
      <Choose />
      <Testimonial data={TestimonialContent} list={TestimonialSLIDES} bg={true} />
      <CtaSection />
      <Faqs data={FaqsContent} list={FaqsList} bg={true} />
    </>
  )
}

export default Page