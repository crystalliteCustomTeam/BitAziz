"use client"
import { useState } from 'react';
import styles from "@/styles/game/services.module.scss";
import Link from "next/link";
import { Col, Container, Row } from 'react-bootstrap'
import { ReadArrow } from "@/src/app/app-constants"
import Image from "next/image";
import PopUp from "@/src/app/services/popup";




const Services = ({ data, list }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [modalShow, setModalShow] = useState(false);

    const handleServiceClick = (index) => {
        setActiveIndex(index);
    };

    const handleClick = () => {
        setModalShow(true);
    };
    return (
        <>
            <section className={`${styles.servicesSection} p-100`}>
                <Container>
                    <Row className={styles.serviceMargin}>
                        <Col lg={6} md={6}>
                            <h2>{data?.title}</h2>
                            <p>{data?.text}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={7} md={7}>
                            <div className={styles.servicesBox}>
                                {list.map((item, index) => (
                                    <div
                                        className={`${styles.servicesItem} ${activeIndex === index ? styles.active : ''}`}
                                        key={index}
                                        onClick={() => handleServiceClick(index)}
                                    >
                                        <h5>{item.title}</h5>
                                        <p>{item.txt}</p>
                                        <div className={styles.arrowBtn}>
                                            <div onClick={() => handleClick()}>
                                                <ReadArrow />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Col>
                        <Col lg={5} md={5}>
                            <div className={`${styles.gameBG} ${styles.active}`}>
                                <Image src={list[activeIndex].Img} alt={list[activeIndex].title} width={1356} height={1852} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <PopUp show={modalShow} onHide={() => setModalShow(false)} />
        </>
    )
}

export default Services