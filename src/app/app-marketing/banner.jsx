import ButtonCommon from "@/src/components/common/button"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/app-marketing/banner.module.scss"
import Head from "next/head"
import Image from "next/image"
import bannerImg from "media/app-marketing/banner/bannerImg.webp"

const Banner = ({ data }) => {
    return (
        <>
            <section className={styles.bannerSection}>
                <Container className="h-100">
                    <Row className="h-100">
                        <Col lg={6} md={9} className="my-auto">
                            <div className={styles.bannerContent}>
                                <h1>{data?.title}                                <span className={styles.digitalAnimatedBox}>
                                    <span className={styles.digitalAnimatedTxt}>
                                        <span>Faster</span>
                                        <span>Smarter</span>
                                        <span>Better</span>
                                    </span>
                                </span>
                                </h1>

                                <p>{data?.content}</p>
                                <ButtonCommon txt="Free consultation" />
                            </div>
                        </Col>
                        <Col lg={6} md={3} className="my-auto">
                            <div className={styles.bannerImg}>
                                <Image src={bannerImg} />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className={styles.bannerBg}>

                </div>
            </section>
        </>
    )
}

export default Banner