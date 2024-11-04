
"use client";
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/app-marketing/testimonial.module.scss"
import { useState } from "react";
import Image from "next/image";



const Testimonial = ({ data, list }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className={`${styles.testimonialMarketing} p-100`} id="testimonial">
            <Container>
                <Row>
                    <Col lg={6} md={6}>
                        <div className="subTitle txtColor">{data?.subtitle}</div>
                        <h2>{data?.title}</h2>
                        <p>{data?.content}</p>
                    </Col>
                    <Col lg={6} md={6} className="my-auto">
                        <div className={styles.reviewsBox}>
                            <Image src={data?.TestiImg1} alt="Bitswits Reviews" width={145} height={65} />
                            <Image src={data?.TestiImg2} alt="Bitswits Reviews" width={145} height={65} />
                            <Image src={data?.TestiImg3} alt="Bitswits Reviews" width={145} height={65} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.verticalTabsWrapper}>
                            <div className={styles.verticalTabs}>
                                <ul>
                                    {list.map((tab, index) => (
                                        <li
                                            key={index}
                                            className={activeTab === index ? styles.active : ""}
                                            onClick={() => setActiveTab(index)}
                                        >
                                            <div className={styles.testProfile}>
                                                <div className={styles.ImgBox}>
                                                    <Image src={tab.img} alt="Bitswits Reviews" width={80} height={80} />
                                                </div>
                                                <div className={styles.ImgTitle}>
                                                    {tab.name}
                                                    <span>{tab.position}</span>
                                                </div>

                                            </div>
                                            <div className={styles.svgIcon}>
                                                <Image src={activeTab === index ? tab.content.iconActive : tab.content.icon} alt="Bitswits Reviews" width={40} height={40} />
                                                <span>4.9</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles.verticalContent}>
                                {list.map((tab, index) => (
                                    activeTab === index && (
                                        <div key={index} className={styles.boxTxt}>
                                            <div className={styles.svgIcon}>
                                                <div className={styles.svgIconPara}>
                                                    <h4 className="subTitle txtColor">{tab.name}</h4>
                                                    <p>{tab.position}</p>
                                                </div>
                                                <div className={styles.icon}>
                                                    <Image src={tab.content.icon} width={40} height={40} />
                                                    <span>4.9</span>
                                                </div>
                                            </div>
                                            <p><span>“</span>{tab.content.txt}<span>”</span></p>
                                        </div>
                                    )
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Testimonial