"use client"
import { ArrowIcon } from "@/src/app/app-constants";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/services/industries.module.scss";
import Link from "next/link";




const Industries = ({ data, list }) => {

    return (
        <section className={`${styles.industrySection} p-100`}>
            <Container>
                <Row>
                    <Col lg={7} md={8} className="text-center m-auto">
                        <h2>{data?.title}</h2>
                        <p>{data?.text}</p>
                    </Col>
                </Row>
                <Row>
                    {list.map((item, index) => (
                        <Col xl={3} lg={4} md={6} key={index} className="mb-2 mb-md-3 mb-lg-3 mb-xl-4">
                            <div
                                className={styles.industryBox}
                                style={{ backgroundImage: `url(${item.img})` }}>
                                <div className={styles.industryIcon}>{item.icon}</div>
                                <div className={styles.industryTitle}>{item.title}</div>
                                <p>{item.txt}</p>
                                <div className={styles.linksBtn}>
                                    <Link href={item.url}>Read More <ArrowIcon /></Link>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Industries;
