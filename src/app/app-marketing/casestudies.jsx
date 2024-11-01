"use client";
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/app-marketing/casestudies.module.scss"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import ButtonCommon from "@/src/components/common/button"
import Case01 from "media/home/casestudy/Vifty.webp"
import Case02 from "media/home/casestudy/SoulScribe.webp"
import Case03 from "media/home/casestudy/ReadyApp.webp"
import Logo01 from "media/app-marketing/case-studies/icon-1.svg"
import Logo02 from "media/home/casestudy/SoulScribeLogo.webp"
import Logo03 from "media/home/casestudy/ReadyAppLogo.webp"
import Image from "next/image"
import { ArrowIcon, ServiceArrow } from "@/src/app/app-constants";
import Link from "next/link";

const options = { align: 'start', loop: "true" }

const data = {
    subtitle: "Case Studies",
    title: "Our Results Speak Louder Than Words",
    content: "Work with one of the leading app marketing companies to take your app to the next level. Our mobile app advertising agency specializes in creating tailored strategies that boost app visibility, attract the right users, and drive long-term engagement. Let us help you grow and succeed in a highly competitive market with proven app marketing solutions."
}


const caseStudies = [
    {
        title: "Single’s Up",
        roi: "+1000% Increase in ROI",
        description: "Our mobile campaign generated a 10x ROI, positioning Single’s Up as the leading app in its category and driving exceptional growth.",
        image: "/media/home/casestudy/Vifty.webp",
        services: ["Media Buying", "Creative Strategy"],
    },
    {
        title: "Vifty",
        roi: "+50% Increase in Vifty's Key KPIs",
        description: "We scaled Vifty’s user acquisition while maintaining low costs, resulting in a 50% growth in key performance indicators across targeted regions.",
        image: "/media/home/casestudy/Vifty.webp",
        services: ["User Acquisition", "Performance Marketing"],
    },
    {
        title: "HomePro",
        roi: "+75% Increase in Downloads",
        description: "Through targeted ASO and user acquisition strategies, HomePro increased downloads by 75%, significantly expanding its audience and user engagement.",
        image: "/media/home/casestudy/Vifty.webp",
        services: ["ASO", "User Acquisition"],
    },
    {
        title: "Soul Scribe",
        roi: "Doubles Its User Base by 100%",
        description: "Our optimized marketing efforts doubled Soul Scribe’s active users, improving app performance and increasing overall user satisfaction by 100%.",
        image: "/media/home/casestudy/SoulScribe.webp",
        services: ["Marketing Optimization", "User Engagement"],
    },
    {
        title: "NutriSnap",
        roi: "Boosts by 200% in Six Months",
        description: "BitsWits scaled NutriSnap from 50,000 to 150,000 users in six months, increasing revenue by 150% and driving significant app growth.",
        image: "/media/home/casestudy/ReadyApp.webp",
        services: ["User Growth", "Revenue Optimization"],
    },
    {
        title: "Combat",
        roi: "Grows Active User Base by 40%",
        description: "We improved Combat’s user retention strategies, leading to a 40% increase in active users and enhanced overall app performance.",
        image: "/media/home/casestudy/Vifty.webp",
        services: ["User Retention", "Performance Improvement"],
    },
    {
        title: "Route Rover",
        roi: "Achieves 90% ROI with Targeted Media Campaign",
        description: "Our strategic media campaign delivered a 90% return on investment, driving Route Rover’s user acquisition growth and improving app performance significantly.",
        image: "/media/home/casestudy/Vifty.webp",
        services: ["Media Campaign", "User Acquisition"],
    },
];



const Casestudies = () => {
    const [emblaRef, embla] = useEmblaCarousel(options, [Autoplay()]);

    const prevButtonHandler = () => {
        if (embla) embla.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (embla) embla.scrollNext();
    };
    return (
        <section className={`${styles.homeCaseStudy} commonSlider pt-100`}>
            <Container>
                <Row>
                    <Col lg={7} md={7}>
                        <div className="subTitle txtColor">{data?.subtitle}</div>
                        <h2>{data?.title}</h2>
                    </Col>
                    <Col lg={5} md={5} className="mt-auto">
                        <p>{data?.content}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <section className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {caseStudies.map((study, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={styles.casestudyBox} style={{ backgroundImage: `url(${Case01.src})` }}>
                                                <div className={styles.casestudyContent} >
                                                    <div className={styles.casestudyTxt}>
                                                        <div className={styles.logoSec}>
                                                            <h3>{study.title}</h3>
                                                            <div className={styles.para}>{study.roi}</div>
                                                        </div>
                                                        <div className={styles.casestudyPara}>
                                                            <p>{study.description}</p>
                                                            <div className={styles.btnSec}>
                                                                <ul>
                                                                    {study.services.map((service, idx) => (
                                                                        <li key={idx}>{service}</li>
                                                                    ))}
                                                                </ul>
                                                                <ButtonCommon txt="Let's Discuss" color={true} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                            <div className="embla_container">
                                <div className="embla_prev" onClick={prevButtonHandler}>
                                    <ServiceArrow direction="prev" />
                                </div>
                                <div className="embla_next" onClick={nextButtonHandler}>
                                    <ServiceArrow direction="next" />
                                </div>
                            </div>
                        </section>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Casestudies

