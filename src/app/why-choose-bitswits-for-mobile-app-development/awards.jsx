import styles from "@/styles/why-choose/awards.module.scss"
import { Col, Container, Row } from 'react-bootstrap'


import Image from "next/image"

const Awards = ({ data, content }) => {
    return (
        <section className={styles.awardsSection}>
            <Container>
                <Row>
                    <Col className="text-center">
                        <div className="subTitle txtColor">{content?.subtitle}</div>
                        <h2>{content?.title}</h2>
                    </Col>
                    <Col md={12}>

                        <div className={styles.awardsWapper}>
                            {Array.isArray(data) && data.length > 0 ? (
                                data.map((item, index) => (
                                    <div className={styles.awardsItem} key={index}>
                                        <div className={styles.awardsLogo}>
                                            <Image
                                                src={item.logo}
                                                alt="Award"
                                                width={250}
                                                height={250}
                                            />
                                        </div>
                                        <div className={styles.awardsTxt}>
                                            {item.title} {item?.link ? <span>{item.link}</span> : ""}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>No awards found.</p>
                            )}
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Awards