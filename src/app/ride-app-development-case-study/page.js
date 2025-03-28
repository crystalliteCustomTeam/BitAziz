"use client"
import React, { useState, useEffect } from "react";
//components
import Banner from "../../components/CaseBanner";
import CaseGlamic from "../../components/CaseGlamic";
import CaseWants from "../../components/CaseWants";
import CaseGoal from "../../components/CaseGoal";
import CaseOvercoming from "../../components/CaseOvercoming";
import CaseAnimate from "../../components/CaseAnimate";
import CaseServices from "../../components/CaseServices";
import CaseChoose from "../../components/CaseChoose";
import CaseGlobal from "../../components/CaseGlobal";
import CaseCapabilities from "../../components/CaseCapabilities";
import Technologieswe from "../../components/Technologieswe";
import Nothing from "../../components/Nothing";
import HomeLocation from "../../components/HomeLocation";
//images
import banLogo from "/public/images/case-studies/case-ride/banner-logo.png";
import banImg from "/public/images/case-studies/case-ride/banner-img.png";
import slide1 from "/public/images/case-studies/case-ride/slide1.png";
import slide2 from "/public/images/case-studies/case-ride/slide2.png";
import slide3 from "/public/images/case-studies/case-ride/slide3.png";
import slide4 from "/public/images/case-studies/case-ride/slide4.png";
import features from "/public/images/case-studies/case-ride/features.png";
import faced from "/public/images/case-studies/case-ride/faced.png";
import tackling from "/public/images/case-studies/case-ride/tackling.png";
import goalImg from "/public/images/case-studies/case-ride/goal.png";
import animiImg1 from "/public/images/case-studies/case-ride/animi1.png";
import animiImg2 from "/public/images/case-studies/case-ride/animi2.png";
import animiImg3 from "/public/images/case-studies/case-ride/animi3.png";
import service1 from "/public/images/case-studies/case-ride/service1.png";
import service2 from "/public/images/case-studies/case-ride/service2.png";
import service3 from "/public/images/case-studies/case-ride/service3.png";
import service4 from "/public/images/case-studies/case-ride/service4.png";
import service5 from "/public/images/case-studies/case-ride/service5.png";
import chosImg1 from "/public/images/lp-images/icon1.png";
import chosImg2 from "/public/images/lp-images/icon2.png";
import chosImg3 from "/public/images/lp-images/icon3.png";
import chosImg4 from "/public/images/lp-images/icon4.png";
import chosImg5 from "/public/images/lp-images/icon5.png";
import chosImg6 from "/public/images/lp-images/icon6.png";
import chosImg7 from "/public/images/lp-images/icon7.png";
import chosImg8 from "/public/images/lp-images/icon8.png";
import chosImg9 from "/public/images/lp-images/icon9.png";

export default function RideMe() {
  const [showComponent, setShowComponent] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowComponent(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);
  const [showFolds, setShowFolds] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowFolds(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <Banner
        banLogo={banLogo}
        title={<> Taking You Where You Need to Be </>}
        banImg={banImg}
        bannerClass="rideme"
      />
      <CaseGlamic
        textArray1={[
          {
            title: (
              <>
                Ride App <span>Development</span>
              </>
            ),
            text: [
              <>
                <i>Ride Me</i> is your trusted ride-sharing app, designed for
                effortless daily commuting. Whether it's work, exploration, or a
                quick ride, Ride Me has your back. With a focus on safety,
                reliability, and clear pricing, Ride Me offers a smooth
                transportation experience.
              </>,
              <>
                Choose from various ride options to match your preferences and
                budget. Real-time tracking keeps you in the know about your
                driver's location, while cashless payments make transactions
                easy, and safety is paramount with driver checks and 24/7
                support.
              </>,
            ],
          },
        ]}
        textArray2={[
          {
            title: <>Looking For Something Similar?</>,
            text: (
              <>
                Our consultants are ready to hear your idea. Request a free
                consultation with our app experts and transform it into a
                digital reality.
              </>
            ),
          },
        ]}
        slide1={slide1}
        slide2={slide2}
        slide3={slide3}
        slide4={slide4}
        textArray3={[
          {
            title: (
              <>
                The <span>Starting</span> Point
              </>
            ),
            text: [
              <>
                Our client got the idea of Ride Me after facing recurring
                challenges with inconsistent and unreliable transportation
                services in their city. Their vision was to create a solution
                that offered reliable, safe, and transparent rides for everyone.
              </>,

              <>
                Recognizing the pressing need for dependable urban
                transportation, they embarked on the journey to develop Ride Me,
                with the goal of revolutionizing commuting and enhancing
                accessibility across their community.
              </>,
            ],
          },
        ]}
      />
      <CaseWants
        sections1={[
          {
            title: (
              <>
                Main <span>Features</span>
              </>
            ),
            textArray: [
              "Get rides promptly with dependable drivers.",
              "Monitor your driver`s location in real-time.",
              "Know the fare upfront with no hidden costs.",
              "Choose from various vehicle types to match your needs.",
              "Stringent safety protocols, including driver background checks.",
              "Conveniently pay through the app without the need for cash.",
              "Catering to riders with special needs, making transportation inclusive.",
              "Earn rewards and access exclusive discounts as a frequent rider.",
              "Get 24/7 assistance around the clock for a hassle-free experience.",
            ],
          },
        ]}
        wantImg1={features}
        sections2={[
          {
            title: (
              <>
                Challenges <span>We Faced</span>
              </>
            ),
            textArray: [
              "Ensuring a consistent pool of drivers for timely service.",
              "Safeguarding user data and maintaining strict privacy standards.",
              "Navigating complex and evolving transportation regulations.",
              "Expanding the app`s infrastructure to accommodate growing user demand.",
              "Building and maintaining trust among users in a competitive market.",
            ],
          },
        ]}
        wantImg2={faced}
        sections3={[
          {
            title: (
              <>
                {" "}
                Trouble <span>Tackling</span>{" "}
              </>
            ),
            textArray: [
              "Implemented an incentive system to attract and retain drivers.",
              "Employed robust encryption protocols to safeguard user data and privacy.",
              "Assembled a legal team well-versed in transportation regulations for compliance.",
              "Designed a flexible infrastructure capable of handling increasing user demand.",
              "Prioritized user safety and satisfaction through rigorous vetting and ongoing support.",
            ],
          },
        ]}
        wantImg3={tackling}
        lastPara={
          <>
            {" "}
            BitsWits took on the challenge of creating Ride Me by assembling a
            dedicated team of app development experts. We leveraged our
            extensive experience in building scalable, secure, and user-friendly
            apps to develop Ride Me.{" "}
          </>
        }
      />
      <CaseGoal
        golImg={goalImg}
        title={
          <>
            Start Your App Development Journey <br /> Effortlessly; Let
            <span>
              Bitswits Be Your <br /> Savior
            </span>
            With A Quick Tap!
          </>
        }
        goalClass="rideme"
      />
      <CaseOvercoming
        appData={[
          {
            title: (
              <>
                Overcoming <br /> Development Challenges
              </>
            ),
            description:
              "We bring together a team of highly skilled app developers, each with their unique expertise and experiences, to tackle complex development problems efficiently. Our team breaks down challenges into manageable components and implements innovative solutions to ensure successful project outcomes.",
          },
          {
            title: (
              <>
                Hybrid <br /> Development Excellence
              </>
            ),
            description: (
              <>
                Our approach to app development is anything but
                one-size-fits-all. With a hybrid approach, we strike a balance
                between predictability and adaptability. For projects with
                clearly defined timeframes, we employ a waterfall approach to
                meet the deadlines. This helps us meet the compliance
                requirements and regulatory standards.
              </>
            ),
          },
          {
            title: (
              <>
                On-Time Delivery - <br /> Every Time
              </>
            ),
            description:
              "Completing tasks within a timeframe is a reflection of our professionalism, reliability, and dedication to client satisfaction. Upon onboarding, we set realistic and achievable deadlines, define clear milestones, and allocate resources accordingly. Project managers at BitsWits use tools to track progress and ensure the project remains on schedule.",
          },
          {
            title: (
              <>
                Erasing <br /> Time-zone Barriers
              </>
            ),
            description: (
              <>
                Our project managers are trained to remain considerate about
                time-zone differences, they take into account clients'
                availability and preferences. We prioritize cultural
                sensitivity, our developers made a system that shows clients'
                active hours along with their current location in google maps,
                and holidays around the globe.
              </>
            ),
          },
          {
            title: (
              <>
                Efficient <br /> Communication
              </>
            ),
            description:
              "BitsWits offers round-the-clock, efficient communication to clients through instant chat, messages, and calls. Our commitment to 24/7 availability ensures that clients can reach out at their convenience. Our instant chat is equipped with end-to-end encryption, ensuring privacy and safeguarding sensitive information in every interaction.",
          },
          {
            title: (
              <>
                Addressing <br /> Payment Disputes
              </>
            ),
            description: (
              <>
                At BitsWits, we rely on the Stripe payment method for all
                transactions. We've developed an automated dispute resolution
                portal to efficiently manage payment issues. Our portal also
                provides clear visibility into the different stages of reported
                payment disputes and their current statuses.
              </>
            ),
          },
        ]}
      />
      <CaseAnimate
        animiImg1={animiImg1}
        animiImg2={animiImg2}
        animiImg3={animiImg3}
      />
      <CaseServices
        title={
          <>
            <span>Services:</span> For
          </>
        }
        point1={<> Native Mobile App Development </>}
        point2={<> Stunning UI/UX Design </>}
        point3={<> Consumer/ Service Provider Interface </>}
        service1={service1}
        service2={service2}
        service3={service3}
        service4={service4}
        service5={service5}
      />
      <CaseChoose
        title={
          <>
            <span>
              Why Trust <br /> BitsWits
            </span>
            with App <br /> Development?
          </>
        }
        text1={
          <>
            We stand as the primary choice for mobile app development,
            exemplifying excellence in a dynamic field. Our team combines
            creativity and the most suitable tech stack to develop customized
            app solutions.
          </>
        }
        text2={
          <>
            Our track record of delivering on time and within budget, coupled
            with a commitment to staying ahead of industry trends, sets us apart
            as the best partner for mobile app development.
          </>
        }
        items={[
          {
            image: chosImg1,
            text: (
              <>
                Experienced <br /> Professionals
              </>
            ),
          },
          {
            image: chosImg2,
            text: (
              <>
                On-Time <br /> Delivery
              </>
            ),
          },
          {
            image: chosImg3,
            text: (
              <>
                Cost-Effective <br /> Solutions
              </>
            ),
          },
          {
            image: chosImg4,
            text: (
              <>
                Scalable and <br /> Secure Apps
              </>
            ),
          },
          {
            image: chosImg5,
            text: (
              <>
                User-Centric <br /> Design
              </>
            ),
          },
          {
            image: chosImg6,
            text: (
              <>
                Customized <br /> Development
              </>
            ),
          },
          {
            image: chosImg7,
            text: (
              <>
                Error-Free <br /> Delivery
              </>
            ),
          },
          {
            image: chosImg8,
            text: (
              <>
                Transparent <br /> Communication
              </>
            ),
          },
          {
            image: chosImg9,
            text: (
              <>
                Support and <br /> Maintenance
              </>
            ),
          },
        ]}
      />
      <CaseGlobal />
      <CaseCapabilities />
      <Nothing Nothing="nothingCase" />
      <Technologieswe />
      <HomeLocation />

    </>
  );
}
