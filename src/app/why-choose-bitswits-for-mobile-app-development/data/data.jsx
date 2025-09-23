// Extended Services Images
import { ArtificialIntelligence, BigData, Blockchain, InternetOfThings, MixedReality, ClutchLogo, GoogleLogo, TrustpilotLogo } from "@/src/app/app-constants"
import Link from "next/link";
export const ExtendedServicesContent = {
    subtitle: "Advanced Solutions",
    title: "Take Control of Your Future — Unlock the Power of Next-Gen Tech.",
    content: "Empower your business with forward-thinking solutions that sharpen decision-making, streamline complex operations, and unlock new opportunities for growth. Future-proof your business with BitsWits.",
}

export const ExtendedServicesList = [
    {
        title: "Artificial Intelligence",
        content: {
            icon: <ArtificialIntelligence />,
            heading: "Artificial Intelligence",
            description: "We develop intelligent AI-driven apps that streamline operations and enhance decision-making processes, helping businesses improve efficiency and drive growth. Our AI technologies empower businesses to make smarter, faster decisions for lasting success.",
            listItems: [
                "AI Consulting & Development",
                "Machine Learning Model Training",
                "Business System Integration",
                "AI Maintenance & Optimization",
            ],
        },
    },
    {
        title: "Generative AI",
        content: {
            icon: <BigData />,
            // icon: <BigData />,
            heading: "Generative AI",
            description: "We integrate Generative AI to produce new content and automate processes, enhancing user experiences (UX) across platforms. This technology allows businesses to streamline operations while delivering personalized, dynamic content at scale.",
            listItems: [
                "AI-Powered Content Creation",
                "Automation of Business Processes",
                "Personalized AI Interactions",
                "Platform Integration for Efficiency"
            ],
        },
    },
    {
        title: "IoT",
        content: {
            icon: <InternetOfThings />,
            heading: "IoT",
            description: "We integrate IoT technology to connect devices, enabling real-time monitoring and automation for improved efficiency. This opens up new possibilities for businesses to optimize operations and make data-driven decisions.",
            listItems: [
                "Connected Devices Monitoring",
                "Automated Operational Processes",
                "System Integration for Smart Workflows",
                "Scalable IoT Business Solutions"
            ],
        },
    },
    {
        title: "Blockchain",
        content: {
            icon: <Blockchain />,
            heading: "Blockchain",
            description: (<>We integrate blockchain technology to deliver transparent and secure business solutions across finance, <Link href='/healthcare-app-development-services'>healthcare</Link>, supply chain, and real estate sectors. This ensures enhanced security, trust, and efficiency in critical business operations.</>),
            listItems: [
                "Secure Financial Transactions",
                "Transparent Supply Chain Records",
                "Blockchain Healthcare Data Security",
                "Smart Contracts for Real Estate"
            ],
        },
    },
    {
        title: "AR/VR",
        content: {
            icon: <MixedReality />,
            heading: "AR/VR",
            description: "We integrate AR/VR technologies to create interactive, engaging user experiences that transform how businesses operate in sectors like retail, education, and real estate, enhancing customer interaction and business workflows.",
            listItems: [
                "Immersive Retail Experiences",
                "AR/VR Training & Education",
                "Virtual Real Estate Tours",
                "Interactive Product Visualization "
            ],
        },
    },
];
import logo1 from "media/why-chosse/certificates/1.webp"
import logo2 from "media/why-chosse/certificates/2.webp"
import logo3 from "media/why-chosse/certificates/3.webp"
import logo4 from "media/why-chosse/certificates/4.webp"
import logo5 from "media/why-chosse/certificates/5.webp"
import logo6 from "media/why-chosse/certificates/6.webp"
import logo7 from "media/why-chosse/certificates/7.webp"
import logo8 from "media/why-chosse/certificates/8.webp"
import logo9 from "media/why-chosse/certificates/9.webp"
import logo10 from "media/why-chosse/certificates/10.webp"

export const CertificatesTitle = {
    subtitle: "Certificates",
    title: "BitsWits Certificates and Partners",
}
export const CertificatesData = [
    { title: "AWS Partner Network (APN)", logo: logo1.src },
    { title: "Google Cloud Platform ", logo: logo2.src },
    { title: "Microsoft Azure Partner", logo: logo3.src },
    { title: "Microsoft Solution Partner", logo: logo4.src },
    { title: "Certified Scrum Master (CSM)", logo: logo5.src },
    { title: "CISSP (Certified Information Systems Security Professional)", logo: logo6.src },
    { title: "microsoft Cybersecurity testing certification", logo: logo7.src },
    { title: "FDA 21 CFR Part 11 Compliance", logo: logo8.src },
    { title: "ISO 9001 (Quality Management Systems)", logo: logo9.src },
    { title: "Salesforce partner ", logo: logo10.src },
]

import Awards1 from "media/why-chosse/awards/1.webp"
import Awards2 from "media/why-chosse/awards/2.webp"
import Awards3 from "media/why-chosse/awards/3.webp"
import Awards4 from "media/why-chosse/awards/4.webp"
import Awards5 from "media/why-chosse/awards/5.webp"
import Awards6 from "media/why-chosse/awards/6.webp"
import Awards7 from "media/why-chosse/awards/7.webp"
import Awards8 from "media/why-chosse/awards/8.webp"
import Awards9 from "media/why-chosse/awards/9.webp"
import Awards10 from "media/why-chosse/awards/10.webp"


export const AwardsTitle = {
    subtitle: "Awards & Recognitions",
    title: "Bitswits Awards and Recognition",
}
export const AwardsData = [
    { title: "Top Mobile App Development Company 2023 by RightFirms", logo: Awards1.src },
    { title: "Recognized as one of the highest-performing B2B companies by Clutch", logo: Awards2.src },
    { title: "Top App Development Company by appfutura", logo: Awards3.src },
    { title: "Honoring excellence in web creativity and digital communication by dotCOMM Awards", logo: Awards4.src },
    { title: "Recognized as one of the highest-performing B2B companies by Clutch", logo: Awards5.src },
    { title: "Best Mobile App Developers in Chicago for 2022 by Expertise.com", logo: Awards6.src },
    { title: "Top Mobile App Developers USA in 2022 by TopDevelopersmicrosoft Cybersecurity testing certification", logo: Awards7.src },
    { title: "Leaders Category Award in 2022 by GetApp", logo: Awards8.src },
    { title: "High Performer Award for 2022 by G2 High Performer", logo: Awards9.src },
    { title: "Top 1000 Companies Global for 2022 by Clutch ", logo: Awards10.src },
]

import Business1 from "media/why-chosse/business/1.webp"
import Business2 from "media/why-chosse/business/2.webp"
import Business3 from "media/why-chosse/business/3.webp"
import Business4 from "media/why-chosse/business/4.webp"
import Business5 from "media/why-chosse/business/5.webp"
import Business6 from "media/why-chosse/business/6.webp"
import Business7 from "media/why-chosse/business/7.webp"
import Business8 from "media/why-chosse/business/8.webp"
import Business9 from "media/why-chosse/business/9.webp"
import Business10 from "media/why-chosse/business/10.webp"

export const BusinessTitle = {
    subtitle: "Business Citation",
    title: "BitsWits Business Profiles and Citations",
}

export const BusinessData = [
    { title: "BitsWits Profile on AppsInsight With 4.9/5.0 rating", logo: Business1.src },
    { title: "BitsWits Profile on Real Reviews With 4.7/5.0 rating", logo: Business2.src },
    { title: "BitsWits Profile on Find Best Firms With 4.9/5.0 rating", logo: Business3.src },
    { title: "BitsWits Profile on Top Firms With 4.7/5.0 rating", logo: Business4.src },
    { title: "BitsWits Profile on DesignRush With 4.9/5.0 rating", logo: Business5.src },
    { title: "BitsWits Profile on Clutch With 4.9/5.0 rating", logo: Business6.src },
    { title: "BitsWits Profile on TopDevelopers With 5.0/5.0 rating", logo: Business7.src },
    { title: "BitsWits Profile on Trustpilot With 4.3/5.0 rating", logo: Business8.src },
    { title: "BitsWits Profile on GoodFirms With 5.0/5.0  rating", logo: Business9.src },
    { title: "BitsWits Profile on Tech Behemoths With 4.9/5.0 rating", logo: Business10.src },
]
import press1 from "media/why-chosse/press/1.webp"
import press2 from "media/why-chosse/press/2.webp"
import press3 from "media/why-chosse/press/3.webp"
import press4 from "media/why-chosse/press/4.webp"
import press5 from "media/why-chosse/press/5.webp"
import press6 from "media/why-chosse/press/6.webp"
export const PressTitle = {
    subtitle: "Press Releases",
    title: "BitsWits Latest Press Releases, News & Insights",
}
export const PressData = [
    { title: "How to Increase App Downloads Powerful Strategies for Mobile Apps", logo: press1.src, link: "Business Insider" },
    { title: "Why ERP Integration Is Essential for Modern Businesses Across Industries", logo: press2.src, link: "ABC News" },
    { title: "Architecting On-Demand MVPs with Flutter and Firebase", logo: press3.src, link: "MSN " },
    { title: "CRM vs ERP: What’s the Difference and Which One Does Your Business Need?", logo: press4.src, link: "USA Today" },
    { title: "Building a Real-Time Chat App with flutter and firebase integration", logo: press5.src, link: "NBC" },
    { title: "Best CRM for your Restaurant business in 2025", logo: press6.src, link: "Google News" },
]

export const TestimonialContent = {
    subtitle: "For Some, It’s Testimonials.",
    title: "For Us, It’s Client Love.",
    content: "Our clients don’t just speak about projects — they share their stories of growth, success, and partnership. We build solutions that leave a lasting impression, and the results speak for themselves. Here’s why our clients keep choosing us.",
}

export const TestimonialSLIDES = [
    {
        logo: <ClutchLogo />,
        text: "The team’s deep understanding of our business’s nature was truly impressive. Their technical knowledge was evident in ensuring the app functioned smoothly, and their attention to every detail exceeded our expectations. BitsWits delivered a seamless and reliable app experience.",
        name: "Joseph D’Amora",
    },
    {
        logo: <ClutchLogo />,
        text: "BitsWits transformed my vision into a stunning, user-friendly app with an intuitive design that perfectly meets our needs. Their professionalism, dedication, and ability to turn ideas into reality were outstanding. I couldn’t be happier with the results and their ongoing support.",
        name: "Ryan Jaden",
    },
    {
        logo: <TrustpilotLogo />,
        text: "A heartfelt thank you to BitsWits for their outstanding support and dedication. Their responsiveness was truly remarkable, and they delivered exactly what we had envisioned. Without a doubt, we will engage BitsWits again for our upcoming project. They exceeded all our expectations.",
        name: "Maya Powell",
    },
    {
        logo: <GoogleLogo />,
        text: "I approached BitsWits for a custom software solution for my business, and I couldn’t be happier with the result. Their team was professional, timely, and provided exceptional support throughout the entire process. The final product exceeded my expectations. Highly recommend BitsWits!",
        name: "Raoul Deslys",
    },
    {
        logo: <GoogleLogo />,
        text: "The mobile app has drastically increased my sales, and I feel directly connected to my clients through it. BitsWits and their team did an outstanding job. The app is user-friendly, offers brilliant performance, and has made a huge impact on my business. I highly recommend BitsWits!",
        name: "Abigail Smith",
    },
]

export const FaqsContent = {
    subtitle: "Got Inquiries?",
    title: "Read Our Frequently Asked Questions",
    content: "Our FAQ section offers clear answers to common concerns, helping you navigate our services with ease.",
}
export const FaqsList = [
    {
        title: "What kinds of help does BitsWits offer?",
        txt: (<p>An AI agent is a software-powered assistant capable of understanding tasks, making decisions, and automating processes intelligently. At BitsWits, we develop custom AI agents tailored to your business needs, whether it's customer support, data processing, or end-to-end task automation.</p>)
    },
    {
        title: "What industries do you specialize in for AI agent development?",
        txt: (<p>We’ve built AI agents for industries like healthcare, finance, retail, e-commerce, manufacturing, logistics, and more. Each solution is customized to fit the unique workflows and compliance standards of the specific sector.</p>)
    },
    {
        title: "What technologies do you use in AI agent development?",
        txt: (<p>BitsWits uses cutting-edge tools, including natural language processing, machine learning, multimodal AI, vector databases, large language models, LLMs, and real-time data APIs to create intelligent, scalable agents.</p>)
    },
    {
        title: "Can you integrate AI agents with our existing systems or tools?",
        txt: (<p>Absolutely. We ensure seamless integration with your current tech stack, whether it’s CRMs, ERPs, internal tools, or third-party APIs, to maximize efficiency and ensure smooth automation.</p>)
    },
    {
        title: "Do you offer post-deployment support and maintenance?",
        txt: (<p>Yes, we offer ongoing support, performance monitoring, and iterative updates to ensure your AI agent remains effective, secure, and aligned with evolving business needs.</p>)
    },
    {
        title: "What’s the cost of developing an AI agent with BitsWits?",
        txt: (<p>Costs vary based on complexity, features, and integration needs, but we provide transparent pricing after the discovery phase. Our goal is to deliver high ROI through efficient, scalable automation.</p>)
    },
]

export const IdeaCtaContent = {
    title: (<>Let’s Change<br /> The World With Your</>),
    text: (<> App <span>Idea!</span></>),
    formtitle: (<>Let’s Create An Amazing<br /> Mobile App Together!</>)
}
