import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/app-marketing/digitalcta.module.scss"
import ButtonCommon from "@/src/components/common/button"

const DigitalCta = ({ data }) => {
    return (
        <section className={`${styles.digitalSection} p-100`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col lg={6} md={6} className="my-auto">
                        <div className={styles.bitsWits}>
                            <span className={`${styles.bits}`}>Bits</span>
                            <span className={`${styles.wits}`}>Wits</span>
                        </div>
                    </Col>
                    <Col lg={6} md={6} className="my-auto">
                        <div className={styles.DigitalCtaContent}>
                            <h2>
                                {data?.title}
                            </h2>
                            <p>{data?.content}</p>
                            <ButtonCommon txt="Free consultation" />
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default DigitalCta