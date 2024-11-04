
//========= Process Images
import { Process01, Process02, Process03, Process04, Process05, Process06, Process07, Process08 } from "@/src/app/app-constants"


// Extended Services Images
import { ArtificialIntelligence, BigData, Blockchain, FinTech, InternetOfThings, Logistics, MixedReality } from "@/src/app/app-constants"



//========= Testimonial Images
import TestiImg1 from "media/services/reviwes/trustpilot.webp"
import TestiImg2 from "media/services/reviwes/clutch.webp"
import TestiImg3 from "media/services/reviwes/google.webp"
import KayleeSlone from "media/services/reviwes/KayleeSlone.webp"
import RyanJaden from "media/services/reviwes/RyanJaden.webp"
import Joseph from "media/services/reviwes/Joseph.webp"
import MauryoJones from "media/services/reviwes/MauryoJones.webp"
import KateBullock from "media/services/reviwes/KateBullock.webp"
import testiIcon1 from "media/app-marketing/testimonial/trustpilot.svg"
import testiIconActive1 from "media/app-marketing/testimonial/trustpilot-white.svg"
import testiIcon2 from "media/app-marketing/testimonial/google.svg"
import testiIconActive2 from "media/app-marketing/testimonial/google-white.svg"
import testiIcon3 from "media/app-marketing/testimonial/clutch.svg"
import testiIconActive3 from "media/app-marketing/testimonial/clutch-white.svg"

import Case01 from "media/home/casestudy/Vifty.webp"

export const BannerData = {
    title: (<>Manage Your App Marketing </>),
    content: (<>Our app marketing services have a proven track record of success across 170+ apps, and are designed to drive real growth. Reach millions of users and experience success with our mobile app marketing experts.</>),
}

export const CompanyInfoContent = {
    subtitle: "Expertise",
    title: "Our App Marketing Agency Trusted By Leading Brands",
    content: (<><p>We shape smooth digital experiences Our app developers and creators blend imagination and creativity with empathy to envision every user's tap and swipe.</p>
        <p>We create apps that give your brand a dazzling new dimension, Because of our holistic approach, your app emotionally engages users through visuals, motion, and micro interactions</p>
    </>
    ),
}


export const DigitalCtaContent = {
    title: "Manage Your App Marketing With",
    content: (<>Streamline your app marketing with BitsWits for impactful results. Our innovative strategies empower you to reach your target audience effectively and maximize your app's growth.</>),
}

export const IndustriesOptions = { loop: true, align: 'start' }

export const IndustriesSlides = [
    {
        title: "Software",
        txt: "We simplify complex software and technology solutions through engaging animations. Our videos highlight key features, product functionality, and user benefits, making it easier for customers to understand and adopt your software. Whether it’s an explainer video or a product showcase, our animations help boost user engagement and drive sales by making your technology accessible and appealing.",
        url: "#",
        Img: Case01.src,
    },
    {
        title: "Education",
        txt: "Our animation services in education make learning engaging and effective. We develop interactive explainer videos, tutorials, and training materials for students of all ages. From simplifying complex concepts to making training more accessible, our animations transform the learning experience, ensuring that educational content is both fun and memorable for learners.",
        url: "#",
        Img: Case01.src,
    },
    {
        title: "Healthcare",
        txt: "In the healthcare industry, our animations bring clarity to complex medical topics. We create engaging educational videos that explain medical techniques, demonstrate new treatments, and help patients understand health procedures. Our videos are designed to be informative and approachable, helping healthcare providers communicate effectively and patients make informed decisions about their care.",
        url: "#",
        Img: Case01.src,
    },
    {
        title: "E-commerce",
        txt: "Our animations elevate the e-commerce and retail experience by creating eye-catching product visualizations and engaging social media ads. We help businesses capture attention, drive traffic, and increase conversions with visually compelling content. Whether you’re promoting products or creating interactive online experiences, our animation services ensure your brand leaves a lasting impression.",
        url: "#",
        Img: Case01.src,

    },
    {
        title: "Advertising",
        txt: "Our animated video commercials help businesses captivate audiences and boost brand awareness. With dynamic motion graphics and engaging storytelling, we ensure your ads stand out in a crowded market. Our animations are designed to grab attention and deliver memorable messages that connect with your target audience, helping you increase brand visibility and engagement.",
        url: "#",
        Img: Case01.src,
    },
    {
        title: "Engineering",
        txt: "For the engineering sector, our animations simplify complex technical concepts and showcase intricate product designs. We help engineers communicate their ideas visually, making training materials and product explanations more accessible. Our animations are ideal for explaining technical processes or showcasing innovative designs, ensuring your audience understands even the most detailed aspects of your work.",
        url: "#",
        Img: Case01.src,
    }
]

export const ExtendedServicesContent = {
    subtitle: "Reviews",
    title: "Real Client Success Stories in App Marketing",
    content: "Discover how our app marketing strategies have helped businesses across industries achieve incredible results.",
    TestiImg1: TestiImg1.src,
    TestiImg2: TestiImg2.src,
    TestiImg3: TestiImg3.src
}



export const ExpertiseContent = {
    subtitle: "Services",
    title: "We Provide End-to-End App Marketing Services",
    content: "Our team works closely with you to create a marketing strategy that fits your unique goals, helping your app grow, attract more users, and achieve lasting success. Let us guide your app’s journey with hands-on support and real, measurable results.",
}

export const ExpertiseList = [
    {
        title: "App Marketing Consultation",
        txt: "Our app marketing experts provide personalized strategies to enhance your app’s performance. As a leading mobile app marketing agency, we help you streamline your marketing efforts and unlock app growth with expert guidance and actionable insights.",
        icon: <Process01 />,

    },
    {
        title: "App Store Optimization (ASO)",
        txt: "Boost your app’s rankings and visibility with our specialized ASO services. Our mobile app marketing experts create strategies to optimize your app’s presence on both Google Play and the Apple App Store, driving organic traffic and increasing downloads.",
        icon: <Process02 />,

    },
    {
        title: "App Monetization",
        txt: "Maximize your app’s revenue potential with our monetization solutions. We develop effective strategies that drive in-app purchases and ad performance, ensuring your app achieves sustainable growth. Work with our app marketing experts to enhance profitability and user engagement.",
        icon: <Process03 />,

    },
    {
        title: "Creatives & CVR Optimization",
        txt: "Engage users with high-converting visuals. Our mobile app marketing company specializes in creating stunning visuals—from icons to screenshots—that drive conversions. We use A/B testing and optimization techniques to enhance user acquisition and boost conversion rates.",
        icon: <Process04 />,

    },
    {
        title: "Media Buying",
        txt: "Target and attract high-quality users through strategic media buying. Our mobile app marketing agency helps you navigate paid channels to ensure maximum returns on ad spend while reaching your desired audience effectively.",
        icon: <Process05 />,

    },
    {
        title: "Paid User Acquisition (UA)",
        txt: "Drive valuable users to your app with our performance-driven user acquisition strategies. As app marketing experts, we leverage top acquisition channels to ensure your app attracts engaged users, delivering measurable growth for your business.",
        icon: <Process06 />,

    },
    {
        title: "Product Optimization",
        txt: "Ensure your app performs at its best with our product optimization services. Our app marketing solutions focus on maximizing user retention, improving user experience, and increasing overall profitability, helping you reach your app’s full potential.",
        icon: <Process07 />,

    },
    {
        title: "App Store Launch",
        txt: "Launch your app with a comprehensive marketing strategy. Our mobile app marketing company ensures your app’s successful entry into the marketplace with expert guidance on app store listing optimization, keyword strategy, and post-launch marketing efforts.",
        icon: <Process08 />,

    },
];

export const TestimonialSLIDES = [
    {

        name: "Daniel Gonzalez",
        position: "— CEO, HealthTrack App",
        img: Joseph,
        content: {
            iconActive: testiIconActive1.src,
            icon: testiIcon1.src,
            txt: "Working with this team has been an incredible experience. They really took the time to understand our app and goals. Within months, we saw a huge jump in downloads and engagement. It felt like we had true partners on our side, always thinking ahead and finding ways to grow our user base.",
        },
    },
    {
        name: "Ryan Jaden",
        position: "— Founder, FitFlex App",
        img: RyanJaden,
        content: {
            iconActive: testiIconActive2.src,
            icon: testiIcon2.src,
            txt: "Honestly, I wasn’t expecting such quick results! Their team was hands-on, constantly tweaking strategies to maximize our reach. Within weeks, our app downloads more than doubled, and we were blown away by the growth. It feels amazing to finally see our app getting the attention it deserves!",
        },
    },
    {
        name: "Kaylee Slone",
        position: "— CTO, GreenSmart App",
        img: KayleeSlone,
        content: {
            iconActive: testiIconActive3.src,
            icon: testiIcon3.src,
            txt: "I’ve never worked with a more committed team. They listened to what we needed and delivered results that we didn’t think were possible. In just six months, our app’s visibility doubled, and we’ve gained a loyal user base that keeps growing every day.",
        }
    },
    {
        position: "— PM, EduGrow App",
        name: "Mauryo Jones",
        img: MauryoJones,
        content: {
            txt: "We were struggling with user retention before we started working with this agency. They came in with fresh ideas and actionable plans, and now our app feels more alive than ever. Not only did we increase downloads, but user engagement and satisfaction have also improved dramatically!",
            iconActive: testiIconActive1.src,
            icon: testiIcon1.src,
        }
    },
    // {
    //     txt: "They not only listened attentively to our needs but also provided valuable insights and suggestions. BitsWits truly understands how to turn ideas into successful apps!",
    //     name: "James Moss",
    //     position: "EVP Business Development",
    //     img: KateBullock,
    // }
]

export const FaqsContent = {
    subtitle: "FAQ’s",
    title: "Some work we are proud of Some work",
    content: "Lorem ipsum dolor sit amet consectetur. Risus interdum sed turpis nunc nulla neque sed turpis blandit. Lorem ipsum dolor sit amet consectetur. Risus interdum sed turpis sed turpis nunc nulla.",
}

export const FaqsList = [
    {
        title: "Lorem ipsum dolor sit amet consectetur. Condimentum elementum vulputate?",
        txt: (<p>Lorem ipsum dolor sit amet consectetur. Sit nulla egestas turpis at. Ultrices pellentesque quam tempor imperdiet elit. At commodo ut volutpat pulvinar at morbi. At tortor tortor etiam quisque aliquam nisl nascetur mi justo. Mauris enim scelerisque eu at nisl. Penatibus egestas lectus pellentesque posuere cras fringilla.</p>)
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur. Condimentum elementum vulputate?",
        txt: (<p>Lorem ipsum dolor sit amet consectetur. Sit nulla egestas turpis at. Ultrices pellentesque quam tempor imperdiet elit. At commodo ut volutpat pulvinar at morbi. At tortor tortor etiam quisque aliquam nisl nascetur mi justo. Mauris enim scelerisque eu at nisl. Penatibus egestas lectus pellentesque posuere cras fringilla.</p>)
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur. Condimentum elementum vulputate?",
        txt: (<p>Lorem ipsum dolor sit amet consectetur. Sit nulla egestas turpis at. Ultrices pellentesque quam tempor imperdiet elit. At commodo ut volutpat pulvinar at morbi. At tortor tortor etiam quisque aliquam nisl nascetur mi justo. Mauris enim scelerisque eu at nisl. Penatibus egestas lectus pellentesque posuere cras fringilla.</p>)
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur. Condimentum elementum vulputate?",
        txt: (<p>Lorem ipsum dolor sit amet consectetur. Sit nulla egestas turpis at. Ultrices pellentesque quam tempor imperdiet elit. At commodo ut volutpat pulvinar at morbi. At tortor tortor etiam quisque aliquam nisl nascetur mi justo. Mauris enim scelerisque eu at nisl. Penatibus egestas lectus pellentesque posuere cras fringilla.</p>)
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur. Condimentum elementum vulputate?",
        txt: (<p>Lorem ipsum dolor sit amet consectetur. Sit nulla egestas turpis at. Ultrices pellentesque quam tempor imperdiet elit. At commodo ut volutpat pulvinar at morbi. At tortor tortor etiam quisque aliquam nisl nascetur mi justo. Mauris enim scelerisque eu at nisl. Penatibus egestas lectus pellentesque posuere cras fringilla.</p>)
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur. Condimentum elementum vulputate?",
        txt: (<p>Lorem ipsum dolor sit amet consectetur. Sit nulla egestas turpis at. Ultrices pellentesque quam tempor imperdiet elit. At commodo ut volutpat pulvinar at morbi. At tortor tortor etiam quisque aliquam nisl nascetur mi justo. Mauris enim scelerisque eu at nisl. Penatibus egestas lectus pellentesque posuere cras fringilla.</p>)
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur. Condimentum elementum vulputate?",
        txt: (<p>Lorem ipsum dolor sit amet consectetur. Sit nulla egestas turpis at. Ultrices pellentesque quam tempor imperdiet elit. At commodo ut volutpat pulvinar at morbi. At tortor tortor etiam quisque aliquam nisl nascetur mi justo. Mauris enim scelerisque eu at nisl. Penatibus egestas lectus pellentesque posuere cras fringilla.</p>)
    },
]

export const IdeaCtaContent = {
    title: (<>Let’s Change<br /> The World With Your</>),
    text: (<> App <span>Idea!</span></>),
    formtitle: (<>Let’s Create An Amazing<br /> Mobile App Together!</>)
}







