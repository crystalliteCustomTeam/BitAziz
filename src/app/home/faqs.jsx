"use client"
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/home/faqs.module.scss";
import { PlusFaqIcon, MinusFaqIcon } from "@/src/app/app-constants";



const Faqs = ({ data, list, bg }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={`${styles.faqsSection} p-100 ${bg ? styles.BlackBg : ''}`}>
            <Container>
                <Row>
                    <Col xl={bg ? 10 : 5} lg={bg ? 10 : 5} md={bg ? 10 : 5} className={bg ? "m-auto text-center" : ""}>
                        <div className="subTitle txtColor">{data?.subtitle}</div>
                        <h2>{data?.title}</h2>
                        <p>{data?.content}</p>
                    </Col>
                    <Col xl={bg ? 10 : 6} lg={bg ? 10 : 7} md={bg ? 10 : 7} className={bg ? "m-auto" : "offset-xl-1"}>
                        {list.map((items, index) => (
                            <div className={`${styles.faqsBox} ${activeIndex === index ? styles.active : ""}`} key={index}>
                                <div
                                    className={`${styles.faqsTitle} ${activeIndex === index ? styles.active : ""}`}
                                    onClick={() => toggleFaq(index)}
                                >
                                    {bg ? <span>0{index + 1}</span> : ""} {items.title} {activeIndex === index ? <MinusFaqIcon /> : <PlusFaqIcon />}
                                </div>
                                <div className={`${styles.faqscontent} ${activeIndex === index ? styles.active : ""}`}>
                                    {items.txt}
                                </div>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </section >
    );
};

export default Faqs;
