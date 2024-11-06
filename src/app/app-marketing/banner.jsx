import ButtonCommon from "@/src/components/common/button"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/app-marketing/banner.module.scss"
import Image from "next/image"
import bannerImg from "media/app-marketing/banner/bannerImg.webp"
import Box1Img from "media/app-marketing/banner/boximg1.svg"
import Box2Img from "media/app-marketing/banner/boximg2.svg"

const Banner = ({ data }) => {
    return (
        <>
            <section className={` p-100 ${styles.bannerSection}`}>
                <Container className="h-100 pt-50">
                    <Row className="h-100">
                        <Col lg={6} md={5} className="my-auto">
                            <div className={styles.bannerContent}>
                                <h1>{data?.title} <span className={styles.digitalAnimatedBox}>
                                    <span className={styles.digitalAnimatedTxt}>
                                        <span>Faster</span>
                                        <span>Smarter</span>
                                        <span>Better</span>
                                    </span>
                                </span>
                                </h1>

                                <p>{data?.content}</p>
                                <ButtonCommon txt="Let’s Discuss!" />
                            </div>
                        </Col>
                        <Col lg={6} md={7} className="m-auto">
                            <div className={styles.bannerImg}>
                                <Image src={bannerImg} alt="bitswits" />
                                <div className={styles.Box1}>
                                    <Image src={Box1Img.src} width={20} height={20} alt="bitswits" />
                                    <div className={styles.text}>
                                        10K
                                    </div>
                                    <div className={styles.para}>
                                        Downloaded
                                    </div>
                                </div>
                                <div className={styles.Box2}>
                                    <Image src={Box2Img.src} width={20} height={20} alt="bitswits" />
                                    <div className={styles.text}>
                                        10K
                                    </div>
                                    <div className={styles.para}>
                                        Downloaded
                                    </div>
                                </div>
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