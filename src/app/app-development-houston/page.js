"use client"
import React from "react";
import Script from "next/script";
// componets
import Bannerdubai from "../../components/Bannerdubainew";
import NewDubaiAwards from "@/src/components/NewDubaiAwards";
import FutureReady from "@/src/components/FuturereadyDubai";
import Whowearenew from "../../components/Whowearenew";
import DubaiDelivered from "@/src/components/DubaiDelivered";
import DubaiTimeline from "@/src/components/DubaiTimeline";
import DubaiClients from "@/src/components/DubaiClients";
import Delivered from "@/src/components/Delivered";
import Industries from "@/src/components/Industries";
import Houtondubai from "../../components/Houtondubai";
import DubaiBrandTrust from "@/src/components/DubaiBrandTrust";
import Expertappdubaiadvanced from "../../components/Expertappdubaiadvanced";
import Justbuilditlpdubai from "../../components/Justbuilditlpdubai";
import Brand from "../../components/Brand";
import Faqdubai from "../../components/Faqdubai";
import Latestblog from "../../components/Latestblog";
import Globalmap from "../../components/Globalmap";
import MapImage from "media/newdubai/houstonMap.png"

//Images 
import StoryLine2 from "/public/newDubaiPagev1/storyLine2.png";
import StoryLine3 from "/public/newDubaiPagev1/storyLine3.png";
import StoryLine4 from "/public/newDubaiPagev1/storyLine4.png";
import StoryLine5 from "/public/newDubaiPagev1/storyLine5.png";
import StoryLine6 from "/public/newDubaiPagev1/storyLine6.png";
import banImg1 from '@/public/dubailp/services/1.png'
import banImg2 from '@/public/dubailp/services/2.png'
import banImg3 from '@/public/dubailp/services/3.png'
import banImg4 from '@/public/dubailp/services/4.png'
import banImg5 from '@/public/dubailp/services/5.png'
import banImg6 from '@/public/dubailp/services/6.png'
import blog1 from "/public/newdubai/blog1.png";
import blog2 from "/public/newdubai/blog2.png";
import blog3 from "/public/newdubai/blog3.png";
import HeroBg from "/public/newhouston/houston.webp";
import Link from "next/link";

export default function dubaidevelopmentcompany() {
  // Banner Content
  const Banner = {
    title: "Top-tier Mobile App Development Company in Houston",
    desc: "BitsWits is a leading mobile app development company in Houston that delivers feature-packed solutions for ambitious entrepreneurs and SMBs. Our expert-vetted app developers in Houston use the latest technologies like Swift, Java, Kotlin, Flutter, and React Native to build strong, platform-agnostic native and cross-platform mobile applications, offering seamless user experiences and robust performance across devices.",
    bg: HeroBg,
    alt: "Banner for Houston based mobile app development company featuring contact information and tag line"
  }
  // award Content
  const Award = {
    title: "Awards & Recognitions",
    desc: <>Our dedication and hardwork has consistently <br className="d-xl-block d-none" /> garnered acknowledgment by different platforms.</>,

  }
  //=====StoryLine Fold=====//
  const accordionData = [
    {
      question: 'Android App Development in Houston',
      answer: "We provide Android app development in Houston, leveraging technologies like Java and Kotlin to create high-performance apps for smartphones, tablets, and wearable devices. Our Android app developers deliver glitch-free, responsive solutions that help businesses reach their potential with feature-rich applications tailored to their specific needs.",
      btn: "Let’s Build Your Android App!",
      StoryLineImg: StoryLine2
    },
    {
      question: 'iPhone App Development in Houston',
      answer: "We create high-quality apps for iPhone, iPad, and Apple Watch, using technologies like Swift and Objective-C. Our iPhone app developers in Houston focus on aesthetic design, business growth, and best practices, providing iOS app development in Houston that achieves outstanding results on the App Store.",
      btn: "Let’s Build Your IOS App!",
      StoryLineImg: StoryLine3
    },
    {
      question: 'Flutter App Development in Houston',
      answer: "As a leading Flutter app development company in Houston, we build cross-platform apps for mobile, web, and desktop using Flutter’s robust framework. Our Flutter developers in Houston create near-native, cost-effective solutions with enhanced accessibility, delivering seamless performance and experiences across multiple devices and platforms.",
      btn: "Let’s Build Your Flutter App!",
      StoryLineImg: StoryLine4
    },
    {
      question: 'Game App Development in Houston',
      answer: "We build immersive and addictive games for smartphones, tablets, and consoles using tools like Unity and Unreal Engine for mobile game app development in Houston. Our advanced techniques create captivating experiences, making our game developers in Houston among the top 3% of tech talent across Texas.",
      btn: "Let’s Build Your Game App!",
      StoryLineImg: StoryLine5
    },
    {
      question: 'Blockchain App Development in Houston',
      answer: "Using technologies like Ethereum, Hyperledger, and Solidity, we develop secure blockchain applications for mobile, web, and desktop platforms. As a trusted blockchain app development company in Houston, our team uses tools such as Truffle and MetaMask to manage technical complexities, delivering scalable and efficient blockchain solutions.",
      btn: "Let’s Build Your Blockchain App!",
      StoryLineImg: StoryLine6
    },
  ];
  const storyLine = {
    subtitle: (<> Google Certified </>),
    title: (<> Mobile App Development Company in Houston </>),
    para: (<>
      <span className="d-block">Our mobile app developers in Houston specialize in the development of world-class mobile applications that are unique and user-oriented. </span>
      <span className="d-block mt-2">When it comes to mobile app development in Houston, our goal is to go above and beyond and deliver a superior quality digital product that is always on par with the expectations of our clients.</span>
    </>),
    subPara: <>Here are the <Link href="/mobile-application-development-services" className="fw600 text-black">mobile app development services</Link> that we offer:</>,
    accordionData: accordionData
  };
  // Who We Are Content
  const WhoWeAre = {
    title: "Our Award-Winning Portfolio",
    desc: <>We have emerged as one of the top app development companies in Houston and we take pride in delivering a wide range of mobile applications <br /> successfully using various frameworks, tools, and the newest technologies catering to different audiences, sectors, and industries.</>,
    subtitleOne: "Soul Scribe",
    subDescOne: "Soul Scribe is a groundbreaking social networking app that functions as a digital diary, and you can enlist your loved ones to be part of your online journal. The app operates by using the freemium subscription model, providing a complimentary family room option that enables users to welcome someone from their circle of friends to share their memories.",
    subtitleTwo: "The Ready App",
    subDescTwo: "The Ready App is a revolutionary platform invented to revolutionize the hiring process for the transportation industry. It fills the communication gap between drivers and recruiters by having a user-friendly interface along with features like secure messaging, personal meetings, and real-time updates.",
    subtitleThree: "Grease Monkey",
    subDescThree: "Grease Monkey is a comprehensive automotive innovation system that provides everything ranging from car repairs to oil checkups. Serving as an independent app, Grease Monkey presents users with important factors to consider such as prices and locations, and also client ratings for your vehicles."
  }
  // delivered content
  const DeliveredContent = {
    title: <>150+ Apps Built and Yours Could Be Next!
      Ready to Launch?
    </>,
    desc: "Ready to See Yours Become a Reality?",
    btntext: "Book Your Free Consultation Now!"
  }
  // timeline Content
  const timeline = {
    classSec: "houston",
    title: <> Our Agile Process for <br /> Mobile App Development <br /> in Houston </>,
    desc: <>
      <span className="d-block">At BitsWits, we don't create typical apps. Instead, our aim is to build astonishing mobile apps that generate massive streams of income and assist you in staying ahead of the competition.</span>
      <br />
      <span className="d-block">We utilize advanced technologies and creative designs to produce apps that effectively connect with users and boost business success. From inception to launch, we efficiently pay attention to all the details to make sure our products are not only functional but also aesthetically pleasing.</span>
      <br />
      <span className="mb-5 mb-sm-0 d-block">Here is our agile process for mobile app development in Houston:</span>
    </>,
    heading1: "Research and Strategy",
    para1: "In the research and strategy phase for mobile app development in Houston, we conduct intensive user interviews, ethnographic research, and competitive analysis. This informs our conception, prototyping, and user testing process. Guided by strategy workshops with the client, we then develop hypotheses for MVPs and prototypes to align with client goals, ensuring effective product development and seamless user experiences.",
    heading2: "Development",
    para2: "In the development phase, our Houston app developers follow agile methodologies with 2-week sprints for iterative development and testing of user stories and features. We conduct comprehensive usability testing and optimize app store metadata. Our process includes sprintly regression tests and end-to-end scenario tests to ensure a smooth mobile app launch and submission process. Moreover, we then integrate feedback loops for continuous improvement throughout development cycles.",
    heading3: "UI and UX",
    para3: "In the design phase, our expert designers collaborate closely with clients to create powerful, visually appealing, and intuitive interfaces. Through wireframing and design prototyping, we ensure users can navigate the mobile app effortlessly, fostering a highly engaging user experience and satisfaction. This collaborative process guarantees seamless interaction, enhancing app usability, and ultimately delivering a compelling user experience. Additionally, we prioritize accessibility and responsiveness across various devices and platforms.",
    heading4: "Scale",
    para4: "In the scale phase, we prioritize achieving the client's goals by focusing on mobile app success and growth. We conduct iterative management and execution of analytics, experiments, and A/B tests. As a bespoke Houston mobile app development company, our approach includes automated messaging campaigns and attribution optimization to attract new users, boost retention, and maximize revenue. In addition, we emphasize continuous refinement to ensure sustained user engagement and long-term success.",
    heading5: "Deployment",
    para5: "In the deployment phase, our Google-certified app developers focus on launching the app successfully to the market. We run thorough compatibility tests on several different devices to guarantee a smooth and error-free user experience for all users. Additionally, we provide support during the initial rollout phase to address any issues and ensure a seamless transition for users. Furthermore, we offer comprehensive training sessions for client teams post-launch.",
  }
  // ClientContent
  const ClientContent = {
    title: <> Why Choose BitsWits as Your <span>Trusted</span> Mobile App <br /> Development Company in Houston </>,
    desc: <> <span className="text-black d-block">Whether you are a new startup or an established brand seeking mobile-friendly solutions that drive growth and generate immense revenue, <br /> you can consider our elite app development company Houston.</span>
      <span className="text-black d-block mt-2">BitsWits is entirely committed to producing high-caliber mobile applications. Our commitment yields impressive results, with a 95% <br /> success rate in delivering on time, within budget and surpassing quality standards.</span>  </>
  }
  // Delivered
  const desc = [
    {
      para: <>The mobile app development cost in Houston varies between $20,000 to $100,000+.</>
    },
    {
      para: <>However, there is no definitive answer for that as the mobile app development cost depends on various parameters including the app’s complexity, features and functionality, tools and technologies, and the estimated time frame.</>
    },
    {
      para: <>At BitsWits, a basic app development project starts at just $20,000, and the cost varies depending on your specific app needs. However, if your app requires complex features and functionalities, you can expect the cost to be between $60,000 and $150,000+.</>
    },
    {
      para: <>Want a precise cost for your app development project? Utilize our app development cost calculator.</>
    }
  ]
  const delivered = {
    title: "How Much Does It Cost to Build a Mobile App in Houston",
    desc: desc,
    cta: "Calculate Your App Cost Now!"
  }
  // Houston Content
  const menus = [
    "Why should I choose BitsWits for app development in Houston?",
    "What platforms and technologies does BitsWits use for app development?",
    "How much does it cost to develop an app with BitsWits in Houston?",
    "How does BitsWits handle app maintenance and updates?",
    "How does BitsWits ensure app security and data protection?",
    "What industries does BitsWits specialize in for app development?",
    "How does BitsWits handle UI/UX design in app development?",
    "What are the different stages of app development at BitsWits?",
    "How does BitsWits support business growth through app development?",
  ];
  const sections = [
    {
      num: "01",
      title: "Why should I choose BitsWits for app development in Houston?",
      content: `<p class='fontsfregular'>BitsWits stands out as a top app development company in Houston, providing solutions tailored to meet varied industry demands. 
      </p>
      <p class='fontsfregular'>Our experienced team specializes in a wide range of services, from designing intuitive interfaces to developing scalable apps across platforms like iOS, Android, and web. We follow agile methodologies, which means your app gets regular updates and improvements throughout the development process. </p>
      <p class='fontsfregular'>Whether you need a robust enterprise solution or an innovative startup app, we deliver high-performance results with a focus on engaging user experiences. Additionally, BitsWits maintains transparent communication, allowing clients to stay updated on project milestones and progress. </p>
      <p class='fontsfregular'>Our portfolio demonstrates our experience across diverse sectors, while client reviews showcase our commitment to excellence. BitsWits combines technical expertise with a strong focus on user experience, making it an ideal partner for your app development needs in Houston.</p>`
    },
    {
      num: "02",
      title: "What platforms and technologies does BitsWits use for app development?",
      content: `<p class='fontsfregular'>BitsWits specializes in developing apps across various platforms, including iOS, Android, and web. Our team uses Swift and Objective-C for native iOS development, while Kotlin and Java are utilized for Android applications. </p>
      <p class='fontsfregular'>We also excel in cross-platform development, particularly with Flutter and React Native, which enable us to deliver high-performance apps on multiple platforms using a single codebase.</p>
      <p class='fontsfregular'>For web applications, our expertise extends to Angular, Vue, and React.js. Utilizing these advanced technologies, we create apps that provide seamless user experiences and optimal performance. Our approach to selecting technologies is driven by the unique requirements of each project, ensuring we use the most suitable tools for your specific business needs.</p>
     `
    },
    {
      num: "03",
      title: "How much does it cost to develop an app with BitsWits in Houston?",
      content: `<p class='fontsfregular'>The cost of app development with BitsWits varies depending on project complexity, features, and platform requirements. </p>
      <p class='fontsfregular'>Basic apps with standard features might range from $10,000 to $50,000, while more complex solutions with custom integrations, advanced security, or AI functionalities can reach $100,000 or more. </p>
      <p class='fontsfregular'>Factors such as design intricacy, backend infrastructure, and required third-party integrations also influence the final cost. BitsWits provides a transparent breakdown of costs in the initial proposal, allowing clients to see where each budget element goes. </p>
      <p class='fontsfregular'>We work closely with our clients to identify essential features and recommend solutions that align with both their business needs and budget constraints. This approach ensures that every project, regardless of size, achieves high quality and value.</p>
      `
    },
    {
      num: "04",
      title: "How does BitsWits handle app maintenance and updates?",
      content: `<p class='fontsfregular'>BitsWits offers ongoing maintenance and updates as part of its app lifecycle services. Once an app is live, our team actively monitors its performance, addressing bugs, security patches, and compatibility issues as they arise. Regular updates are provided to incorporate new features, enhance security, and improve user experience. </p>
      <p class='fontsfregular'>BitsWits follows a proactive maintenance approach, conducting regular assessments to optimize the app’s performance. Clients can choose maintenance packages that align with their needs, whether it’s periodic updates or a fully managed solution. </p>
      <p class='fontsfregular'>This commitment to maintenance helps keep apps relevant in the evolving market and maximizes user engagement over time.</p>
      `
    },
    {
      num: "05",
      title: "How does BitsWits ensure app security and data protection?",
      content: `
      <p class='fontsfregular'>BitsWits prioritizes app security and data protection by implementing robust protocols across each stage of development. </p>
      <p class='fontsfregular'>Our team utilizes encryption, secure coding practices, and multi-layered authentication to protect sensitive data. We also adhere to industry compliance standards, such as GDPR and HIPAA, for clients with specific regulatory requirements.</p>
      <p class='fontsfregular'>Advanced tools, like SSL/TLS encryption and regular vulnerability assessments, are part of our security measures to safeguard user data. During development, we conduct rigorous testing to identify potential vulnerabilities and address them proactively. </p>
      <p class='fontsfregular'>BitsWits also offers post-launch support, providing ongoing security updates to address emerging threats, ensuring your app remains secure and reliable for users.</p>
      `
    },
    {
      num: "06",
      title: "What industries does BitsWits specialize in for app development?",
      content: `
      <p class='fontsfregular'>BitsWits has developed expertise in various industries, including healthcare, finance, retail, logistics, education, and entertainment. Each sector has unique requirements, and we adapt our development approach accordingly. </p>
      <p class='fontsfregular'>For healthcare, our solutions incorporate HIPAA compliance and data security measures, while for finance, we focus on encryption and secure transactions. Retail apps often require advanced eCommerce integrations, while logistics benefit from real-time tracking and analytics features. </p>
      <p class='fontsfregular'>Our experience across diverse industries allows us to build tailored solutions that meet the specific needs of each field, ensuring that every app is equipped to deliver real value within its sector.</p>
      `
    },
    {
      num: "07",
      title: "How does BitsWits handle UI/UX design in app development?",
      content: `
      <p class='fontsfregular'>UI/UX design is a cornerstone of BitsWits’ app development process. Our team begins with an in-depth understanding of the target audience, industry standards, and client goals to create a user-centered design. </p>
      <p class='fontsfregular'>We use tools like Figma, Sketch, and Adobe XD to design intuitive interfaces that are visually appealing and easy to navigate. Throughout development, we conduct usability testing to refine the user experience and make adjustments based on feedback. </p>
      <p class='fontsfregular'>Our designers focus on simplicity, aesthetics, and functionality, crafting layouts that engage users while supporting smooth interaction. This approach results in an app experience that not only looks great but also meets users’ expectations for seamless usability.</p>
      `
    },
    {
      num: "08",
      title: "What are the different stages of app development at BitsWits?",
      content: `
      <p class='fontsfregular'>The app development process at BitsWits consists of several stages. Initially, we conduct a discovery phase to understand the project requirements and client goals. </p>
      <p class='fontsfregular'>This is followed by wireframing and UI/UX design, where we create visual layouts and user flows. Next comes the development phase, where our team codes the app, integrates necessary features, and builds the backend infrastructure. Rigorous testing follows to identify and resolve any issues. </p>
      <p class='fontsfregular'>Finally, we handle deployment, ensuring the app is available on the App Store or Google Play. Each stage involves client feedback and iteration, allowing us to deliver a polished product aligned with business objectives.</p>
      `
    },
    {
      num: "09",
      title: "How does BitsWits support business growth through app development?",
      content: `
      <p class='fontsfregular'>BitsWits supports business growth by developing apps that not only function seamlessly but also drive engagement and user retention. </p>
      <p class='fontsfregular'>We begin with in-depth market research to understand the client’s industry, target audience, and competition. This helps us design and develop an app that differentiates the client’s offering in the market.</p>
      <p class='fontsfregular'>Focusing on engaging user experiences, smooth functionality, and scalability, we create apps that facilitate user loyalty and, ultimately, business growth. We also provide clients with insights into performance metrics, allowing them to make data-driven decisions for future updates or feature additions that align with business objectives.</p>
      `
    },
  ];
  const HoustonContent = {
    menus: menus,
    sections: sections,
  }
  // Blogs Content
  const blogBox = [
    {
      img: blog1,
      title: 'Leading Grocery Delivery Apps Making Waves In Saudi Arabia',
      content: 'Remember Carrying Heavy Bags Of Groceries Under The Sizzling Saudi Sun? Those Days Are Fast Disappearing Into A Memory As The Expedient Rise Of...'
    },
    {
      img: blog2,
      title: 'Detail Overview For Online Shopping App In Saudi Arabia',
      content: 'Online Shopping Apps Have Become A Keystone Of Today’s Retail Business, Transforming The Shopping Experience With Unprecedented Ease And A Wide...'
    },
    {
      img: blog3,
      title: 'How To Develop An Android App: A Complete Guide',
      content: 'There Are Around 2.69 Million Apps For Android Smartphones. Almost Everyone Understands Android Apps, And Many Are Ready To Launch Their Own. But...'
    },
  ];
  // Global Conten
  const global = {
    address: "2800 Post Oak Blvd STE 4100, Houston, TX 77056",
    number: "(833) 500-6007",
    href: "tel:+8335006007",
    image: MapImage,
    link: "https://maps.app.goo.gl/L5Df9XfyFv3z7VzYA"
  }

  return (
    <>
      <Bannerdubai content={Banner} />
      <NewDubaiAwards content={Award} />
      <FutureReady content={storyLine} />
      <Whowearenew content={WhoWeAre} />
      <DubaiDelivered content={DeliveredContent} />
      <DubaiTimeline content={timeline} />
      <DubaiClients content={ClientContent} />
      <Delivered content={delivered} />
      <Industries />
      <Houtondubai content={HoustonContent} />
      <DubaiBrandTrust />
      <Expertappdubaiadvanced expertapp="expertapp"
        title="Advanced Technology Solutions for Large-Scale Businesses & Enterprises"
        appData={
          [
            {
              title: 'Big Data',
              description: 'Big Data technology helps to gather and monitor large data sources. Our proficient team of app developers Houston leverages this technology and makes indigenous apps that outperform and help businesses stay ahead.',
              imageSrc: banImg2,
            },
            {
              title: 'Internet of Things (IoT)',
              description: 'IoT technology helps to collect, access, automate, and many other necessary things in real-time. Our app development company in Houston uses the most contemporary technologies to develop apps that are highly intuitive and compatible across multiple platforms.',
              imageSrc: banImg3,
            },
            {
              title: 'Blockchain',
              description: 'Blockchain technology offers a secure and transparent framework for transactions. Our mobile app development company Houston uses Blockchain technology to ensure data integrity as well as the stability of your apps.',
              imageSrc: banImg1,
            },
            {
              title: 'AR/VR',
              description: 'Our experts apply both creativity and technical skills to produce AR/VR apps that are unique in the market. Whether you need a better customer experience, want big changes in training, or try for a new way of educating our AR/VR solutions are created to meet your specific requirements.',
              imageSrc: banImg6,
            },
            {
              title: 'AI/ML',
              description: "We use AI/ML to craft smart apps, customizing user preferences, integrating personalized suggestions, and utilizing cutting-edge automation technology for smooth experiences and enhanced user engagement, driving innovation in app development.",
              imageSrc: banImg4,
            },
            {
              title: 'Cloud Computing',
              description: "Through our distinctive and efficient cloud computing services, you can easily handle, analyze, and secure your app’s data. We are best known for delivering excellence, and guaranteeing timely delivery, and customer satisfaction is our top priority.",
              imageSrc: banImg5,
            },
          ]
        }
      />
      <Justbuilditlpdubai
        title1="Just"
        title="Build It."
        para="Design, Develop, and Grow with BitsWits."
        slide="slide1lp"
        href="tel:+971 55 503 1266"
      />
      <Brand />
      <Faqdubai
        faqsData={[
          {
            question:
              "How can I identify the top mobile app development company in Houston for my business?",
            answer: (
              <p>
                To find the best app development company in Houston, you should start by performing thorough market research and then compiling a list of the potential companies. Check out their experience, portfolio, client testimonials, and pricing as well. Furthermore, you can ask your peers, friends, and also other professionals in the industry, if they have any useful perceptions.
              </p>
            ),
          },
          {
            question: "What are the current trends and technologies used in mobile app development in Houston?",
            answer: (
              <p>
                AI/ML, IoT, AR/VR, Cloud, and Blockchain technologies are among the latest trends in mobile app development in Houston. These trends allow businesses to design better and interactive apps which in turn make the user experience much better and seamless.
              </p>
            ),
          },
          {
            question:
              "How long does it take to build a mobile app in Houston?",
            answer: (
              <p>
                The timeline for the mobile application development in Houston could vary depending on various factors. Simple apps take between 2- 4 months with limited features and functionalities. On the other hand, the development time for complex apps may take between 3-6 months or more depending on your business requirements.
              </p>
            ),
          },
          {
            question:
              "What challenges do mobile app developers in Houston commonly face during app development?",
            answer: (
              <p>
                The mobile application developers in Houston usually face obstacles like fierce competition, exponential technology changes, and regulatory impediments. Hence, it’s always best to employ qualified people who ensure timely delivery and cost-effective digital products and services.
              </p>
            ),
          },
          {
            question:
              "Can your mobile app developers in Houston create apps for multiple platforms?",
            answer: (
              <p>
                Yes, at BitsWits, our mobile app developers Houston have the professional expertise and technical knowledge to develop apps that could efficiently run on multiple platforms. Whether you need an iOS app or an Android one, they have the expertise to develop exquisite apps that can perform across various platforms smoothly and efficiently.
              </p>
            ),
          },
          {
            question:
              "What are the recommended approaches for mobile app development in Houston?",
            answer: (
              <p>
                To ensure that application development in Houston is successful, first of all, our experts comprehend your unique business needs and then set some objectives and requirements. Afterward, they design your app while keeping your user needs in mind, conduct intensive testing, and perform quality assurance of your app. Next, they perform regular updates and implement best practices to keep your app running efficiently without any challenging flaws or serious threats.
              </p>
            ),
          }
        ]}
      />
      <Latestblog blogBox={blogBox} />
      <Globalmap
        content={global}
      />

      <Script id="websiteSchema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": " Mobile App Development Company in Houston - BitsWits",
            "url": " https://www.bitswits.co/app-development-houston ",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "{search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        `}
      </Script>
      <Script id="organizationSchema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Mobile App Development Company in Houston- BitsWits ",
            "alternateName": "BitsWits",
            "url": " https://www.bitswits.co/app-development-houston ",
            "logo": "https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooterlogo.6d359c19.webp&w=1080&q=75",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "833 500-6007",
              "contactType": "customer service",
              "areaServed": "US",
              "availableLanguage": "en"
            },
            "sameAs": [
              "https://www.facebook.com/officialBitsWits",
              "https://twitter.com/BitsWits_/",
              "https://www.instagram.com/officialBitsWits/",
              "https://www.youtube.com/@officialBitsWits",
              "https://www.linkedin.com/company/officialBitsWits"
            ]
          }
        `}
      </Script>
      <Script id="localBusinessSchema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": " https://www.bitswits.co/app-development-houston ",
            "image": " https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhouston.5c03c25c.webp&w=1920&q=75 ",
            "@id": "",
            "url": " https://www.bitswits.co/app-development-houston ",
            "telephone": "833 500-6007",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "2800 Post Oak Blvd STE 4100",
              "addressLocality": "Houston",
              "addressRegion": "TX",
              "postalCode": " 77056",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 29.7372487,
              "longitude": -95.4618603
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            },
            "sameAs": [
              "https://www.facebook.com/officialBitsWits",
              "https://twitter.com/BitsWits_/",
              "https://www.instagram.com/officialBitsWits/",
              "https://www.youtube.com/@officialBitsWits",
              "https://www.linkedin.com/company/officialBitsWits"
            ] 
          }
        `}
      </Script>
      <Script id="productSchema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org/", 
            "@type": "Product", 
            "name": " Mobile App Development Company in Houston - BitsWits ",
            "image": " https://www.bitswits.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhouston.5c03c25c.webp&w=1920&q=75",
            "description": " BitsWits is a leading mobile app development company in Houston offering innovative solutions customized to your business needs for unparalleled success!.",
            "brand": {
              "@type": "Brand",
              "name": "BitsWits"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "1174"
            }
          }
        `}
      </Script>
    </>
  );
} 