
//========= Process Images
import { Process01, Process02, Process03, Process04, Process05, Process06, Process07, Process08 } from "@/src/app/app-constants"

//========= Testimonial Images
import { ClutchLogo, GoogleLogo, TrustpilotLogo } from "@/src/app/app-constants"






export const BannerData = {
    title: "Transforming Ambitious Ideas Into Powerful  ",
    content: `We combine technical expertise with visionary thinking to create apps that drive real-world impact and elevate your business`,
}

export const CompanyInfoContent = {
    subtitle: "What Drives Us?",
    title: "A Relentless Obsession With Getting It Right.",
    content: "At BitsWits, perfection is our baseline. We only partner with visionary clients — from startups developing MVPs to enterprises scaling complex solutions — to create apps that not only work but thrive in real-world scenarios. From brainstorming to deployment, we are committed to delivering excellence at every step, ensuring your app succeeds where it matters most.",
}


export const DigitalCtaContent = {
    content: (<><span>Go Beyond </span>Digital</>),
}

export const ExpertiseContent = {
    subtitle: "P.R.O.C.E.S.S.",
    title: "Planning. Research. Outline. Creation. Evaluation. Scalability. Support.",
    content: "Our P.R.O.C.E.S.S. framework guarantees that every stage of development is handled with precision and purpose. We build apps that deliver immediate results and adapt effortlessly as your business scales. ",
}

export const ExpertiseList = [
    {
        title: "Discovery and Analysis",
        txt: "The process starts with detailed requirement gathering using tools like Jira and Confluence to map user stories, functional specifications, and system requirements. This step aligns project goals with the development strategy.",
        icon: <Process01 />,

    },
    {
        title: "Feasibility and System Architecture",
        txt: "A thorough technical feasibility study is conducted using AWS or Azure, with system architecture crafted via Lucidchart and Enterprise Architect, focusing on scalability, security, and performance optimization.",
        icon: <Process02 />,

    },
    {
        title: "UI/UX Design",
        txt: "With Figma and Adobe XD, wireframes and interactive prototypes are created, ensuring a seamless user experience. Tools like Hotjar are utilized for heatmapping to fine-tune user flows for maximum engagement.",
        icon: <Process03 />,

    },
    {
        title: "Product Roadmap",
        txt: "Before development, we map out a detailed product roadmap, including prioritized feature lists and timelines. This step ensures that key functionalities are aligned with business goals, keeping the development process focused and efficient.",
        icon: <Process04 />,

    },
    {
        title: "Agile Development",
        txt: "Agile development follows with sprint planning using Jira, GitLab, and Docker. Continuous integration (CI) and deployment (CD) are integrated, and version control is handled through GitHub or Bitbucket to maintain seamless collaboration.",
        icon: <Process05 />,

    },
    {
        title: "Testing and Quality Assurance",
        txt: "Automated testing is implemented through tools like Selenium, Cypress, and JUnit, alongside manual testing. Continuous testing is integrated into the CI/CD pipeline using Jenkins, maintaining the highest quality standards throughout.",
        icon: <Process06 />,

    },
    {
        title: "Deployment and Cloud Infrastructure",
        txt: "Docker and Kubernetes are used for containerization and deployment, with cloud hosting managed through AWS, Google Cloud, or Azure. This ensures high availability, autoscaling, and optimized load balancing.",
        icon: <Process07 />,

    },
    {
        title: "Maintenance and Optimization",
        txt: "Post-deployment, monitoring is conducted using tools like New Relic, Datadog, and Grafana. Continuous maintenance and optimization are provided, keeping the application updated and performing efficiently.",
        icon: <Process08 />,

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
        title: "What is the typical app development timeline?",
        txt: (<p>Our app development timelines vary depending on complexity. Small apps typically take 4-6 weeks, while larger, more complex apps can take 3 to 6 months. We provide detailed timelines during the initial consultation based on your unique app requirements.</p>)
    },
    {
        title: "How do you handle confidentiality and NDAs?",
        txt: (<p>We take confidentiality seriously and offer NDAs to protect your sensitive information. All our team members are required to sign NDAs, ensuring that your project details remain secure throughout the development process.</p>)
    },
    {
        title: "What is the cost of your app development services?",
        txt: (<p>The cost depends on the scope and complexity of your app. We offer various engagement models, including fixed-price, hourly, and dedicated team options. Detailed cost estimates are provided after we assess your app requirements during the consultation phase.</p>)
    },
    {
        title: "Why work with BitsWits?",
        txt: (<p>Our company stands out due to our decade-long expertise, commitment to quality, and personalized approach. We deliver innovative solutions tailored to your business needs and ensure timely project delivery with a focus on achieving your goals.</p>)
    },
    {
        title: "Do you offer post-launch support?",
        txt: (<p>Yes, we provide comprehensive post-launch support to address any issues or updates needed after your project goes live. Our support services include bug fixes, performance monitoring, and ongoing maintenance to ensure smooth operation.</p>)
    },
    {
        title: "Can I customize my project requirements?",
        txt: (<p>Absolutely. We offer flexible solutions and work closely with you to tailor the project according to your specific requirements. Our goal is to create a product that meets your exact needs and aligns with your business objectives.</p>)
    },
    {
        title: "How do you manage project changes?",
        txt: (<p>We handle project changes through a structured change management process. Any requested modifications are assessed for impact on the project scope, timeline, and cost. We then provide updated estimates and timelines before implementing the changes.</p>)
    },
]

export const IdeaCtaContent = {
    title: (<>Let’s Change<br /> The World With Your</>),
    text: (<> App <span>Idea!</span></>),
    formtitle: (<>Let’s Create An Amazing<br /> Mobile App Together!</>)
}







