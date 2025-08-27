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
        title: "What is an AI agent, and how can BitsWits help build one for my business?",
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
