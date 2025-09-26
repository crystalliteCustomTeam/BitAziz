// Extended Services Images
import { ArtificialIntelligence, BigData, Blockchain, InternetOfThings, MixedReality, ClutchLogo, GoogleLogo, TrustpilotLogo, StarIcon } from "@/src/app/app-constants"
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
    { title: "Top Mobile App Development Company 2023 by ", link: "RightFirms", logo: Awards1.src },
    { title: "Recognized as one of the highest-performing B2B companies by", link: "Clutch", logo: Awards2.src },
    { title: "Top App Development Company by ", link: "appfutura", logo: Awards3.src },
    { title: "Honoring excellence in web creativity and digital communication by ", link: "dotCOMM Awards", logo: Awards4.src },
    { title: "Recognized as one of the highest-performing B2B companies by ", link: "Clutch", logo: Awards5.src },
    { title: "Best Mobile App Developers in Chicago for 2022 by ", link: "Expertise.com", logo: Awards6.src },
    { title: "Top Mobile App Developers USA in 2022 by ", link: "TopDevelopersmicrosoft Cybersecurity testing certification", logo: Awards7.src },
    { title: "Leaders Category Award in 2022 by ", link: "GetApp", logo: Awards8.src },
    { title: "High Performer Award for 2022 by ", link: "G2 High Performer", logo: Awards9.src },
    { title: "Top 1000 Companies Global for 2022 by  ", link: "Clutch", logo: Awards10.src },
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
    {
        title: (
            <>
                BitsWits Profile on{" "}
                <Link href="https://appsinsight.co/company/bitswits/" rel="noopener noreferrer">
                    AppsInsight
                </Link>{" "}
                <div>
                    With
                    {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} />
                    ))}
                    4.9/5.0 rating
                </div>
            </>
        ),
        logo: Business1.src
    },
    {
        title: (
            <>
                BitsWits Profile on{" "}
                <Link href="https://findbestfirms.com/freelancer/inhousebitswits" rel="noopener noreferrer">
                    Find Best Firms
                </Link>{" "}
                <div>With
                    {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} />
                    ))} 4.9/5.0 rating
                </div>
            </>
        ),
        logo: Business3.src
    },
    {
        title: (
            <>
                BitsWits Profile on{" "}
                <Link href="https://realreviews.io/reviews/bitswits.co" rel="noopener noreferrer">
                    Real Reviews
                </Link>{" "}
                <div>With
                    {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} />
                    ))} 4.7/5.0 rating
                </div>
            </>
        ),
        logo: Business2.src
    },
    {
        title: (
            <>
                BitsWits Profile on{" "}
                <Link href="https://topfirms.co/company-detail/4182/bitswits" rel="noopener noreferrer">
                    Top Firms
                </Link>{" "}
                <div>With
                    {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} />
                    ))} 4.7/5.0 rating
                </div>
            </>
        ),
        logo: Business4.src
    },
    {
        title: (
            <>
                BitsWits Profile on{" "}
                <Link href="https://www.designrush.com/agency/profile/bitswits" rel="noopener noreferrer">
                    DesignRush
                </Link>{" "}
                <div>With
                    {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} />
                    ))} 4.9/5.0 rating
                </div>
            </>
        ),
        logo: Business5.src
    },
    {
        title: (
            <>
                BitsWits Profile on{" "}
                <Link href="https://clutch.co/profile/bitswits" rel="noopener noreferrer">
                    Clutch
                </Link>{" "}
                <div>With
                    {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} />
                    ))} 4.9/5.0 rating
                </div>
            </>
        ),
        logo: Business6.src
    },
    {
        title: (
            <>
                BitsWits Profile on{" "}
                <Link href="https://www.topdevelopers.co/profile/bitswits" rel="noopener noreferrer">
                    TopDevelopers
                </Link>{" "}
                <div>With
                    {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} />
                    ))} 5.0/5.0 rating
                </div>
            </>
        ),
        logo: Business7.src
    },
    {
        title: (
            <>
                BitsWits Profile on{" "}
                <Link href="https://www.trustpilot.com/review/bitswits.com" rel="noopener noreferrer">
                    Trustpilot
                </Link>{" "}
                <div>With
                    {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} />
                    ))} 4.3/5.0 rating
                </div>
            </>
        ),
        logo: Business8.src
    },
    {
        title: (
            <>
                BitsWits Profile on{" "}
                <Link href="https://www.goodfirms.co/company/bitswits" rel="noopener noreferrer">
                    GoodFirms
                </Link>{" "}
                <div>With
                    {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} />
                    ))} 5.0/5.0 rating
                </div>
            </>
        ),
        logo: Business9.src
    },
    {
        title: (
            <>
                BitsWits Profile on{" "}
                <Link href="https://techbehemoths.com/company/bitswits-mobile-app-development-company-dallas" rel="noopener noreferrer">
                    Tech Behemoths
                </Link>{" "}
                <div>With
                    {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} />
                    ))} 4.9/5.0 rating
                </div>
            </>
        ),
        logo: Business10.src
    },
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
    title: "What people commonly ask to bitswits",
    content: "Our FAQ section offers clear answers to common concerns, helping you navigate our services with ease.",
}
export const FaqsList = [
    {
        title: "What kinds of help does BitsWits offer?",
        txt: (
            <>
                <p>BitsWits provides a lot of digital services that can help firms thrive and come up with new ideas. We make iOS and Android mobile apps, cross-platform apps, web apps, UI/UX design, and games. These are some of the main things we do.</p>
                <p>We also use new technologies like AI, AR/VR, blockchain, and the Internet of Things (IoT) to make solutions that are at the bleeding edge. Each project is customised to meet the needs of the client, making sure it can grow, runs smoothly, and focuses on getting demonstrable business results. We don't just want to make apps; we want to make digital experiences that matter.</p>
            </>)
    },
    {
        title: "What platforms does BitsWits make apps for?",
        txt: (
            <>
                <p>To make sure they reach the most people and work the best, BitsWits makes apps for a lot of different platforms. We make apps for iPhones and iPads, Android phones and tablets, and cross-platform apps that perform well on all devices. </p>
                <p>Our staff makes sure that apps work perfectly on all target platforms, giving users a seamless experience, excellent performance, and easy-to-use interfaces. We also look at things like OS upgrades, device-specific needs, and platform rules to make sure your app is up to date and competitive in the market.</p>
            </>
        )
    },
    {
        title: "How long does it take to make an app with BitsWits?",
        txt: (
            <>
                <p>The length of time it takes to develop a project depends on how complicated it is, what features it has, and what platform it is on. Apps that are simple and only do basic things might take 4 to 8 weeks to build. Apps that are more complicated and have special features might take 3 to 5 months.</p>
                <p>It could take 6 to 12 months or more to create large-scale or enterprise apps with extensive integrations, AI, or AR/VR features. During a consultation, BitsWits gives clients a complete project plan with milestones. This keeps clients informed at every stage and makes sure everything is clear. Our agile development method lets us be flexible while yet meeting deadlines and quality standards.</p>
            </>
        )
    },
    {
        title: "Why should I believe in BitsWits' knowledge?",
        txt: (
            <>
                <p>Since 2012, BitsWits has been a reliable firm for making mobile and web apps for startups, small and medium-sized businesses, and large businesses all around the world. We have been recognised on top sites like Clutch, GoodFirms, DesignRush, Top Firms, and Reviews.io for our work, which shows that our clients are happy and that we complete projects on time. </p>
                <p>We make sure that every project we work on meets strict quality standards by combining technical knowledge with strategic thinking. We have experienced developers, designers, and project managers on our team who make sure that every app is not only useful but also new and ready for the future. Client reviews and case studies are more proof that we are reliable and know what we're doing.</p>
            </>
        )
    },
    {
        title: "What do I need to do to get started with BitsWits?",
        txt: (<>
            <p>It's easy to get started with BitsWits. You can get in touch with us directly through our website. Tell us about your project concept, your goals, your budget, and your target audience. </p>
            <p>After we know what you need, our team will set up a meeting to talk about strategy, technology choices, timetables, and what you want us to provide. We then make a unique project plan, start the design and development process, and keep you updated on our progress at every step. We also offer support and maintenance after your app is live to make sure it keeps working well as your business expands.</p>
        </>)
    },

]

export const IdeaCtaContent = {
    title: (<>Let’s Change<br /> The World With Your</>),
    text: (<> App <span>Idea!</span></>),
    formtitle: (<>Let’s Create An Amazing<br /> Mobile App Together!</>)
}

export const BlogsContent = {
    title: "Our Recent Blogs",
}


