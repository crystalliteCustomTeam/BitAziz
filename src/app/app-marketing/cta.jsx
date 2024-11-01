import ButtonCommon from "@/src/components/common/button"
import styles from "@/styles/app-marketing/cta.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import ctaImg from 'media/app-marketing/cta/cta-img.webp'
import Image from "next/image"

export const data = {
    subTitle: "From Zero To Millions & Beyond",
    title: "With Experts!",
    text: "Our customized app marketing strategies ensure steady growth and help you lead and succeed in the market.",
}

const Cta = () => {
    return (
        <section className={`${styles.Cta} p-100`} >
            <Container>
                <Row>
                    <Col lg={12} md={12}>
                        <div className={styles.Sec}>
                            <div className={styles.Content}>
                                <h4>{data?.subTitle}</h4>
                                <h2>{data?.title}</h2>
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