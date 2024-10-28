"use client"
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/website-development-services/portfolio.module.scss";
import Img1 from "media/website-development-services/portfolio/portfolio-img-1.webp";
import Img2 from "media/website-development-services/portfolio/portfolio-img-2.webp";
import Img4 from "media/website-development-services/portfolio/portfolio-img-4.webp";
import Img5 from "media/website-development-services/portfolio/portfolio-img-5.webp";
import Img6 from "media/website-development-services/portfolio/portfolio-img-6.webp";
import Img7 from "media/website-development-services/portfolio/portfolio-img-7.webp";
import Img8 from "media/website-development-services/portfolio/portfolio-img-8.webp";
import Image from "next/image";

const data = {
    subTitle: "Our Portfolio",
    title: "A Showcase of Our Work and Achievements",
    text: "Lorem ipsum dolor sit amet consectetur Risus interdum sed turpis nunc nulla neque blandit Risus interdum sed turpis nuncRisus interdum sed turpis nuncsed turpis nunc nulla sed turpis nuncsed turpis nunc nulla."
};

const tabs = [
    {
        title: "All",
        content: {
            images: [
                Img1,
                Img2,
                Img4,
                Img5,
                Img6,
                Img7,
                Img8,
                Img7,
            ],
        },
    },
    {
        title: "Beauty",
        content: {
            images: [
                Img5,
                Img6,
                Img7,
                Img8,
                Img1,
                Img2,
                Img4,
                Img2,
            ],
        },
    },
    {
        title: "Real Estate",
        content: {
            images: [
                Img1,
                Img2,
                Img7,
                Img8,
                Img4,
                Img5,
                Img6,
                Img5,
            ],
        },
    },
    {
        title: "Health Care",
        content: {
            images: [
                Img8,
                Img7,
                Img6,
                Img5,
                Img4,
                Img2,
                Img1,
                Img2,
            ],
        },
    },
    {
        title: "Food",
        content: {
            images: [
                Img1,
                Img2,
                Img4,
                Img5,
                Img6,
                Img7,
                Img8,
                Img7,
            ],
        },
    },
    {
        title: "Educational",
        content: {
            images: [
                Img8,
                Img7,
                Img6,
                Img5,
                Img4,
                Img2,
                Img1,
                Img2,
            ],
        },
    },
];

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState(0); // Default to the first tab

    return (
        <section className={`${styles.portfolioSection} p-100`} id="portfolio">
            <Container>
                <Row>
                    <Col lg={8} md={12} className="text-center m-auto ">
                        <div className={`${styles.subTitle} ${styles.txtColorCenter}`}>{data?.subTitle}</div>
                        <h2>{data?.title}</h2>
                        <p>{data?.text}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className={styles.tabName}>
                            <ul>
                                {tabs.map((tab, index) => (
                                    <li
                                        key={index}
                                        className={index === activeTab ? styles.active : ""}
                                        onClick={() => setActiveTab(index)}
                                    >
                                        {tab.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.tabContent}>
                            <div className={styles.tabtxtBox}>
                                <Row>
                                    {tabs[activeTab].content.images.map((src, index) => (
                                        <Col xs={12} sm={4} md={3} key={index} >
                                            <div className={styles.Img}>
                                                <Image
                                                    alt={`Image for ${tabs[activeTab].title}`}

                                                    src={src}
                                                    height={405}
                                                    width={622}
                                                />
                                                <div className={styles.ImgOverlay}></div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Portfolio;