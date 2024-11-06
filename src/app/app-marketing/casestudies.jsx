"use client";
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/app-marketing/casestudies.module.scss"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import ButtonCommon from "@/src/components/common/button"
import Case01 from "media/home/casestudy/Vifty.webp"
import Case02 from "media/home/casestudy/SoulScribe.webp"
import { ServiceArrow } from "@/src/app/app-constants";

const options = { align: 'start', loop: "true" }

const data = {
    subtitle: "Case Studies",
    title: "Our App Marketing Success Stories",
    content: "BitsWits app marketing success stories showcase how our strategies as a leading mobile app advertising agency drive user acquisition, boost engagement, and deliver measurable growth—setting us apart among top app marketing companies."
}


const caseStudies = [
    {
        title: "Vifty",
        roi: "+300% Increase in ROI",
        description: "BitsWits developed Vifty, a multi-functional platform allowing users to list gigs, book online consultations, and interact socially. The app includes reels, a booking module, rating and review systems, video calling, and one-to-one chat. Vifty also supports social posts and external sharing for enhanced user engagement.",
        image: Case01.src,
    },
    {
        title: "SoulScribe",
        roi: "+50% Increase in Vifty's Key KPIs",
        description: "SoulScribe is a social media platform where users manage posts, maintain memory journals with beneficiaries, and connect with friends.BitsWits integrated features like search and filter, in-app messaging, group management, and social interactions, making it a comprehensive tool for personal journaling and building meaningful connections.",
        image: Case02.src,
    }
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
        <section className={`${styles.appCaseStudy} commonSlider pt-100`} id="portfolio">
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
                                            <div className={styles.casestudyBox} style={{ backgroundImage: `url(${study.image})` }}>
                                                <div className={styles.casestudyContent} >
                                                    <div className={styles.casestudyTxt}>
                                                        <div className={styles.logoSec}>
                                                            <h3>{study.title}</h3>
                                                            <div className={styles.para}>{study.roi}</div>
                                                        </div>
                                                        <div className={styles.casestudyPara}>
                                                            <p>{study.description}</p>
                                                            <div className={styles.btnSec}>
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
                            <div className="embla_container d-lg-none ">
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

