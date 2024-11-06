import ButtonCommon from "@/src/components/common/button"
import styles from "@/styles/app-marketing/cta.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import ctaImg from 'media/app-marketing/cta/cta-img.webp'
import Image from "next/image"

export const data = {
    subTitle: "Create High-Impact Campaigns with BitsWits for ",
    title: "App Success!",
    text: "Schedule a free call to learn how our marketing approach fuels your app’s growth and engagement.",
}

const Cta = () => {
    return (
        <section className={`${styles.Cta} p-100`} >
            <Container>
                <Row>
                    <Col lg={12} md={12}>
                        <div className={styles.Sec}>
                            <div className={styles.Content}>
                                <h4>{data?.subTitle} <span>{data?.title}</span></h4>
                                <p>{data?.text}</p>
                                <ButtonCommon txt="Free Consultation" color={true} />
                            </div>
                            <div className={styles.imgBox}>
                                <Image src={ctaImg} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Cta