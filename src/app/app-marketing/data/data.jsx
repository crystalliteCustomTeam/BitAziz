
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

import Indus01 from "media/app-marketing/industry/1.webp"
import Indus02 from "media/app-marketing/industry/2.webp"
import Indus03 from "media/app-marketing/industry/3.webp"
import Indus04 from "media/app-marketing/industry/4.webp"
import Indus05 from "media/app-marketing/industry/5.webp"
import Indus06 from "media/app-marketing/industry/6.webp"
import Indus07 from "media/app-marketing/industry/7.webp"
import Indus08 from "media/app-marketing/industry/8.webp"
import Indus09 from "media/app-marketing/industry/9.webp"

export const BannerData = {
    title: (<>Manage Your App Marketing </>),
    content: (<>Our app marketing services have a proven track record of success and are designed to drive real growth. Reach millions of users and experience success with our mobile app marketing experts.</>),
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
    title: "Turn Your App’s Potential Into Growth!",
    content: (<>Let’s develop marketing efforts that increase installs and truly connect with your audience for sustainable growth and impact.</>),
}


export const IndustriesSlides = [
    {
        title: "Social Media",
        Img: Indus01.src,
    },
    {
        title: "Music",
        Img: Indus02.src,
    },
    {
        title: "Education",
        Img: Indus03.src,
    },
    {
        title: "FinTech",
        Img: Indus04.src,

    },
    {
        title: "Healthcare",
        Img: Indus05.src,
    },
    {
        title: "Automotive",
        Img: Indus06.src,
    },
    {
        title: "Real Estate",
        Img: Indus07.src,
    },
    {
        title: "eCommerce",
        Img: Indus08.src,
    },
    {
        title: "Logistics",
        Img: Indus09.src,
    }

]

export const ExtendedServicesContent = {
    subtitle: "Reviews",
    title: "Hear Directly From Our Clients!",
    content: "Our clients' feedback reflects our commitment to results-driven strategies, sharing how our expertise and support have transformed their app growth and performance.",
    TestiImg1: TestiImg1.src,
    TestiImg2: TestiImg2.src,
    TestiImg3: TestiImg3.src
}



export const ExpertiseContent = {
    subtitle: "Mobile App Marketing Services",
    title: "Strategy, Growth, Success",
    content: "The mobile app marketing experts at BitsWits deliver comprehensive services to improve user acquisition, boost engagement, and increase app visibility—providing measurable, impactful results that drive sustained growth and amplify your app’s success.",
}

export const ExpertiseList = [
    {
        title: "App Marketing Consultation",
        txt: "As a top mobile app marketing company, we offer expert consultations, blending advanced expertise and strategic insight to fuel app growth and create impactful, results-focused strategies for success.",
        icon: <Process01 />,

    },
    {
        title: "ASO",
        txt: "Enhance your app’s visibility with in-depth keyword research, strategic A/B testing, and proven techniques that improve rankings in app stores, attract a wider audience, and drive consistent, measurable growth.",
        icon: <Process02 />,

    },
    {
        title: "CRO",
        txt: "As one of the best mobile app marketing companies, we enhance app performance by optimizing user journeys, refining UI/UX, and analyzing behavioral insights. Our focus is on boosting engagement, retention, and conversions for sustained growth.",
        icon: < Process03 />,

    },
    {
        title: "Product Optimization",
        txt: "Through product optimization services, each aspect of your app is refined—from user flows to UI/UX design—using behavioral insights to enhance engagement, boost retention, and increase conversions, ensuring a streamlined experience that drives measurable growth.",
        icon: <Process04 />,

    },
    {
        title: "App Monetization",
        txt: "Our app marketing solutions provide advanced app monetization strategies, using ad placements, in-app purchases, and subscription models. We optimize revenue potential while enhancing user experience and building long-term customer engagement effectively.",
        icon: <Process05 />,

    },
    {
        title: "Paid User Acquisition",
        txt: "Our team drives targeted growth through paid user acquisition, using precise audience segmentation, strategic bidding, and continuous optimization. This approach amplifies app installs, improves retention rates, and delivers high-value users for sustainable business growth.",
        icon: <Process06 />,

    },
    {
        title: "CVR Optimization",
        txt: "As a trusted mobile app marketing agency, we enhance ad performance through precise visual strategies, data-driven testing, and targeted messaging. Our approach improves user engagement, optimizing pathways that convert interest into loyal, high-value users.",
        icon: <Process07 />,

    },
    {
        title: "Media Buying",
        txt: "We connect your app with the right audiences by identifying premium ad placements, optimizing budgets through strategic bidding, and applying performance analytics to drive each campaign’s reach, boost engagement, and maximize return on investment.",
        icon: <Process08 />,

    },
];

export const TestimonialSLIDES = [
    {

        name: "Sarah Mitchell",
        position: "— CMO / FitTrack Solutions",
        img: Joseph,
        content: {
            iconActive: testiIconActive1.src,
            icon: testiIcon1.src,
            txt: "We were struggling to get the right users, and BitsWits really helped us shift gears. They dug into our data, reworked our ad strategy, and within a few months, we started seeing a noticeable uptick in quality installs.",
        },
    },
    {
        name: "James Elliot",
        position: "— PM / FinSave",
        img: RyanJaden,
        content: {
            iconActive: testiIconActive2.src,
            icon: testiIcon2.src,
            txt: "BitsWits brought fresh ideas to our app marketing. They paid attention to the details and adjusted things quickly. Our engagement numbers moved up steadily, and it was clear their approach was working.",
        },
    },
    {
        name: "Emily Greene",
        position: "— CEO, HealthNow",
        img: KayleeSlone,
        content: {
            iconActive: testiIconActive3.src,
            icon: testiIcon3.src,
            txt: "App store optimization can feel like a guessing game, but BitsWits showed why they’re the best mobile app marketing company. They improved our visibility and drove more traffic without the usual trial and error.",
        }
    },
    {
        position: "— CGO, EduPlay",
        name: "Priya Patel",
        img: MauryoJones,
        content: {
            txt: "BitsWits didn’t give us any false promises—just solid, practical advice that made a real difference. They kept refining our campaigns, and we saw better retention and engagement across the board.",
            iconActive: testiIconActive1.src,
            icon: testiIcon1.src,
        }
    }
]

export const FaqsContent = {
    title: "Frequently Asked Questions",
    content: "Find answers to common questions about our app marketing services, strategies, and how we drive growth, engagement, and success for your app.",
}

export const FaqsList = [
    {
        title: "Will BitsWits create a custom marketing plan specific to my app’s goals?",
        txt: (<p>Yes, as a trusted mobile app marketing firm, we start by understanding your app’s unique goals, industry, and audience. Using this insight, our mobile app marketing services deliver a tailored plan that targets growth, user acquisition, engagement, and retention, ensuring your app reaches its full potential.</p>)
    },
    {
        title: "What if I don’t know which marketing channels are best for my app?",
        txt: (<p>No problem—our team analyzes your app’s target audience, industry, and objectives to determine the best channels. With our app marketing services, we handle all testing and adjustments, finding the most effective ways to maximize visibility and engagement.</p>)
    },
    {
        title: "What are the benefits of using BitsWits for app marketing compared to others?",
        txt: (<p>We utilize a data-driven approach, combined with our experience in Android and iOS app marketing services, to implement strategies that drive user growth and engagement. Our mobile app marketers work closely with clients, offering transparent reporting and adaptable insights that support lasting app success.</p>)
    },
    {
        title: "How does BitsWits help improve my app’s user acquisition and retention rates?",
        txt: (<p>Our mobile app marketing approach uses targeted strategies to attract the right users and keep them engaged. This includes A/B testing, personalized messaging, and in-app promotions, ensuring users find value, which drives acquisition and retention.</p>)
    },
    {
        title: "What kind of reporting and updates can I expect during our partnership?",
        txt: (<p>We provide regular reports on campaign performance, growth metrics, and user engagement insights. With our mobile app marketing services, you’ll receive clear, actionable data on progress, adjustments, and key results, keeping you informed without needing complex analysis.</p>)
    },
    {
        title: "Do I need a large budget to benefit from BitsWits’ app marketing services?",
        txt: (<p>We work with businesses of all sizes, offering scalable marketing strategies that align with your budget. Our team carefully allocates resources to high-impact areas, making sure your investment translates into growth, whether you’re a startup or a large enterprise.</p>)
    },
    {
        title: "Can you help improve my app’s visibility on app store if i lack ASO knowledge?",
        txt: (<p>Absolutely. With our iOS and Android app marketing services, we handle ASO, from keyword optimization to app descriptions. This improves visibility in stores, helping your app achieve better rankings and reach more users, without any technical input required from you.</p>)
    },
]

export const IdeaCtaContent = {
    title: (<>Let’s Change<br /> The World With Your</>),
    text: (<> App <span>Idea!</span></>),
    formtitle: (<>Let’s create an amazing app<br />marketing plan for your app!</>)
}







