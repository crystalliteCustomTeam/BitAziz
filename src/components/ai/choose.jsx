import styles from "@/styles/components/ai/choose.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import BGIMG from "media/videos/AiServices/whyChooseBg.webp";
const Choose = () => {
    return (
        <section className={`pt-100 ${styles.whyChooseSection}`}>
            <Container className={styles.whyChooseContainer} style={{ backgroundImage: `url(${BGIMG.src})` }}>
                <Row>
                    <Col md={6} className="m-auto text-center">
                        <div className="subTitle txtColorCenter">Why Choose Us</div>
                        <h2>Recent Works, Notable Impact</h2>
                    </Col>
                    <Col md={12} className="my-auto">
                        <div className={styles.whyChooseWraper}>
                            <div className={styles.whyChooseItem}>
                                <div className={styles.number}>01</div>
                                <h5>Lorem ipsum dolor sit amet</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className={styles.whyChooseItem}>
                                <div className={styles.number}>02</div>
                                <h5>Lorem ipsum dolor sit amet</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div className={styles.whyChooseItem}>
                                <div className={styles.number}>03</div>
                                <h5>Lorem ipsum dolor sit amet</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Choose