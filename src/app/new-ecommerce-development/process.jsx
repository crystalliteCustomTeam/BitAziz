"use client"
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/new-ecommerce-development/process.module.scss";
import { EcommercePortfolioIcon01, EcommercePortfolioIcon02, EcommercePortfolioIcon03, EcommercePortfolioIcon04 } from "../app-constants"
import ButtonCommon from "@/src/components/common/button";

const data = {
    subTitle: "Our Portfolio",
    title: "A Showcase of Our Work and Achievements",
    text: "Lorem ipsum dolor sit amet consectetur Risus interdum sed turpis nunc nulla neque blandit Risus interdum sed turpis nuncRisus interdum sed turpis nuncsed turpis nunc nulla sed turpis nuncsed turpis nunc nulla."
};

const list = [
    {
        icon: <EcommercePortfolioIcon01 />,
        title: (<>Market Research</>),
        txt: "Lorem ipsum dolor sit amet consectetur Risus interdum sed turpis nunc nulla neque blandit Risus interdum sed turpis nuncRisus interdum sed",
    },
    {
        icon: <EcommercePortfolioIcon02 />,
        title: (<>Platform Selection</>),
        txt: "Lorem ipsum dolor sit amet consectetur Risus interdum sed turpis nunc nulla neque blandit Risus interdum sed turpis nuncRisus interdum sed",
    },
    {
        icon: <EcommercePortfolioIcon03 />,
        title: (<>Localization</>),
        txt: "Lorem ipsum dolor sit amet consectetur Risus interdum sed turpis nunc nulla neque blandit Risus interdum sed turpis nuncRisus interdum sed",
    },
    {
        icon: <EcommercePortfolioIcon04 />,
        title: (<>SEO Optimization</>),
        txt: "Lorem ipsum dolor sit amet consectetur Risus interdum sed turpis nunc nulla neque blandit Risus interdum sed turpis nuncRisus interdum sed",
    },
    {
        icon: <EcommercePortfolioIcon03 />,
        title: (<>Logistics Planning</>),
        txt: "Lorem ipsum dolor sit amet consectetur Risus interdum sed turpis nunc nulla neque blandit Risus interdum sed turpis nuncRisus interdum sed",
    },
    {
        icon: <EcommercePortfolioIcon04 />,
        title: (<>Marketing Strategy</>),
        txt: "Lorem ipsum dolor sit amet consectetur Risus interdum sed turpis nunc nulla neque blandit Risus interdum sed turpis nuncRisus interdum sed",
    },
];

const Process = () => {

    return (
        <section className={`${styles.processSection} p-50`} id="Process">
            <Container>
                <Row>
                    <Col lg={8} md={12} className="text-center m-auto">
                        <div className={`${styles.subTitle} ${styles.txtColorCenter}`}>{data?.subTitle}</div>
                        <h2>{data?.title}</h2>
                        <p>{data?.text}</p>
                    </Col>
                </Row>
                <div className={styles.servicesBox}>
                    {list.map((item, index) => (
                        <div className={styles.servicesItemBox} key={index}>
                            <div className={styles.numCount}>
                                {index + 1}
                            </div>
                            <div className={styles.servicesItem}>
                                {item.icon}
                                <h4>{item.title}</h4>
                                <p>{item.txt}</p>
                                <div className={styles.normalButton} onClick={() => handleClick()}>
                                    <div className={styles.linksBtn}>Let’s Do This!</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.btn}>
                    <ButtonCommon txt="Let’s Discuss!" />
                </div>
            </Container>
        </section>
    );
};

export default Process;