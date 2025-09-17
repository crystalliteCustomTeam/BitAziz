"use client";
import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "@/styles/ai-agent-development-company/industry.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { ECommerce, HealthCare, EduCation, ReaLEstate, FinAnce, MusiC, SociaLMedia, RestAurant, FinTecH, TaxiApp, LogiSticS, EnterPrise } from "@/src/app/app-constants";
import Autoplay from 'embla-carousel-autoplay'
import { ArrowIcon, ServiceArrow } from "@/src/app/app-constants";
const options = { loop: true, align: "start" };

const data = [
    {
        title: "E-Commerce",
        txt: "Ecommerce AI agents act as intelligent virtual shoppers and support assistants, delivering personalized product recommendations, expedite order management, and boosting conversion rate.",
        icon: <ECommerce />
    },
    {
        title: "Healthcare",
        txt: "Healthcare AI agents function as digital health assistants, managing patient intake, appointment scheduling, follow-ups, and data analysis to improve patient care and operational efficiency.",
        icon: <HealthCare />
    },
    {
        title: "Education",
        txt: "We develop AI agents that act as tutors and administrative assistants, deliver personalized learning, track student progress, and automate grading and routine administrative tasks.",
        icon: <EduCation />
    },
    {
        title: "Real Estate",
        txt: "Real Estate AI agents serve as lead qualification specialists and virtual property concierges, handling inquiries, scheduling showings, and nurturing prospects to accelerate sales cycles.",
        icon: <ReaLEstate />,
    },
    {
        title: "Automotive",
        txt: "We develop AI agents for the automotive industry that guide buyers through virtual showrooms, manage service appointments, and provide real-time vehicle support, enhancing the customer ownership experience.",
        icon: <FinAnce />,
    },
    {
        title: "Music",
        txt: "AI agents act as digital promoters and engagement managers, making personalized playlists, interacting with fans, and helping artists and platforms increase streams and audience loyalty.",
        icon: <MusiC />,
    },
    {
        title: "Social Media",
        txt: "Social media AI agents for automation help with community management, personalized content recommendations, and engagement, helping brands automate social media management.",
        icon: <SociaLMedia />,
    },
    {
        title: "Restaurant",
        txt: "AI agents for restaurant automate reservations, manage online orders, handle customer inquiries, and personalize dining recommendations, creating smoother guest experiences and higher customer retention.",
        icon: <RestAurant />,
    },
    {
        title: "FinTech",
        txt: "AI agents for Finance offices act as financial assistants, handling customer onboarding, fraud detection, transaction support, and personalized financial advice for secure and efficient banking.",
        icon: <FinTecH />,
    },
    {
        title: "Logistics",
        txt: "AI agents for the logistics industry optimize fleet management, streamline shipment tracking, and predict demand or delays, ensuring faster deliveries, lower operational costs, and end-to-end supply chain visibility.",
        icon: <LogiSticS />,
    },
    {
        title: "Taxi App",
        txt: "AI agents in the Taxi or ride hailing industry enhance rider and driver experiences by managing bookings, route optimization, pricing adjustments, and real-time support to improve reliability and satisfaction.",
        icon: <TaxiApp />,
    },
    {
        title: "Enterprise Solutions",
        txt: "Our AI agents automate complex workflows, enhance knowledge sharing, and provide real-time decision support, empowering enterprises to boost efficiency, reduce costs, and scale operations with efficiency and agility.",
        icon: <EnterPrise />,
    },


];

const Insdustry = () => {
    const [emblaRef, embla] = useEmblaCarousel(options, [Autoplay()]);
    const [activeIndex, setActiveIndex] = useState(0);

    const prevButtonHandler = () => {
        if (embla) embla.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (embla) embla.scrollNext();
    };
    return (
        <section className={`${styles.industrySection} p-100 commonSlider`}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.industryWrapper}>
                            <div className={styles.industryTitle}>
                                <div className="subTitle txtColor">Industries</div>
                                <h2>Industries We Serve</h2>
                            </div>
                            <div className={styles.industrytxt}>
                                <div className={styles.industryBox}>
                                    <h4>{data[activeIndex].title}</h4>
                                    <p>{data[activeIndex].txt}</p>
                                </div>
                            </div>

                            <div className={styles.industrySlider}>
                                <div className={styles.embla}>
                                    <div className={styles.embla__viewport} ref={emblaRef}>
                                        <div className={styles.embla__container}>
                                            {data.map((item, index) => (
                                                <div
                                                    className={styles.embla__slide}
                                                    key={index}
                                                    onClick={() => setActiveIndex(index)}
                                                >
                                                    <div className={`${styles.sliderBox} ${activeIndex === index ? styles.active : ""
                                                        }`}
                                                    >
                                                        <div className={styles.icon}>{item.icon}</div>
                                                        <h5>{item.title}</h5>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
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
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Insdustry;
