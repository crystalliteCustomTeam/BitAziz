"use client"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/new-ecommerce-development/advantage.module.scss"
import { useState } from "react"
import PopUp from "../services/popup"

const data = {
    subtitle: "What Drives Us?",
    title: "A Relentless Obsession With Getting It Right.",
}

const list = [
    {
        title: (<>Reach More Customers Online</>),
        txt: "For effective operations, our eCommerce website developers create Shopify stores that are optimized and linked with POS, accounting, ERP, and custom apps.",
    },
    {
        title: (<>Boost Conversion Rates</>),
        txt: "For effective operations, our eCommerce website developers create Shopify stores that are optimized and linked with POS, accounting, ERP, and custom apps.",
    },
    {
        title: (<>Reduced Operating Costs</>),
        txt: "For effective operations, our eCommerce website developers create Shopify stores that are optimized and linked with POS, accounting, ERP, and custom apps.",
    },
    {
        title: (<>Obtain a Competitive Edge</>),
        txt: "For effective operations, our eCommerce website developers create Shopify stores that are optimized and linked with POS, accounting, ERP, and custom apps.",
    },
];


const Advantage = () => {
    const [modalShow, setModalShow] = useState(false);

    const handleClick = () => {
        setModalShow(true);
    };

    return (
        <section className={`${styles.advantageSection} p-100`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col lg={8} md={12} className="my-auto">
                        <div className="subTitle txtColor">{data?.subtitle}</div>
                        <h2>{data?.title}</h2>
                    </Col>
                    <Col lg={12} md={12}>
                        <div className={styles.servicesBox}>
                            {list.map((item, index) => (
                                <div className={styles.servicesItem} key={index}>
                                    <h4>{item.title}</h4>
                                    <p>{item.txt}</p>
                                    <div className={styles.normalButton} onClick={() => handleClick()}>
                                        <div className={styles.linksBtn}>Let’s Do This!</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
            <PopUp show={modalShow} onHide={() => setModalShow(false)} />
        </section>
    )
}

export default Advantage
