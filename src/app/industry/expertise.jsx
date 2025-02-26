"use client"
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/industry/expertise.module.scss"
import { useState } from 'react';
import Link from 'next/link';
import { ReadArrow } from '@/src/app/app-constants';
import ButtonCommon from '@/src/components/common/button';
import PopUp from "@/src/app/services/popup";

const Expertise = ({ data, list1, list2 }) => {
    const [activeIndex1, setActiveIndex1] = useState(0);
    const [activeIndex2, setActiveIndex2] = useState(null);
    const [modalShow, setModalShow] = useState(false);

    const handleClick1 = (index1) => {
        setActiveIndex1(index1);
    };

    const handleClick2 = (index2) => {
        setActiveIndex2(index2);
    };

    const handleClick = () => {
        setModalShow(true);
    };

    return (
        <>
            <section className={`${styles.expertiseSection} bgBlack p-100 `}>
                <Container>
                    <Row>
                        <Col lg={4} md={12}>
                            <div className={styles.titSec}>
                                <h2>{data?.subtitle}</h2>
                                <p>{data?.subtext}</p>
                                <ButtonCommon txt="Free Consultation" />
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            {list1.map((item, index1) => (
                                <div
                                    key={index1}
                                    className={`${styles.expertisBox} ${activeIndex1 === index1 ? styles.active : ''}`}
                                    onClick={() => handleClick1(index1)}
                                >
                                    <div className={styles.titleBox}>{item.title}
                                    <div onClick={() => handleClick()}><ReadArrow /></div>
                                    </div>
                                    <p className={styles.txtBox}>{item.txt}</p>
                                </div>
                            ))}

                        </Col>
                        <Col lg={4} md={6} >
                            {list2.map((item, index2) => (
                                <div
                                    key={index2}
                                    className={`${styles.expertisBox} ${activeIndex2 === index2 ? styles.active : ''}`}
                                    onClick={() => handleClick2(index2)}
                                >
                                    <div className={styles.titleBox}>{item.title}
                                        <div onClick={() => handleClick()}><ReadArrow /></div>
                                    </div>
                                    <div className={styles.txtBox}>{item.txt}</div>
                                </div>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </section >
            <PopUp show={modalShow} onHide={() => setModalShow(false)} />
        </>
    )
}

export default Expertise