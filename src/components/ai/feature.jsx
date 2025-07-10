import styles from "@/styles/components/ai/feature.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import BGIMG from "media/videos/BgImage.webp";
import BGFeature from "media/videos/bgFeature.webp";
import { Feature01 } from "@/src/app/app-constants";

const Feature = () => {
    return (
        <section className={`${styles.featureSection} p-100`} style={{ backgroundImage: `url(${BGFeature.src})` }}>
            <Container>
                <Row>
                    <Col lg={6} md={7} className="m-auto text-center">
                        <div className="subTitle txtColorCenter">Features</div>
                        <h2>top features of the AI agent</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <div className={styles.featureItem}>
                            <div
                                className={styles.featureIcon}
                                style={{ backgroundImage: `url(${BGIMG.src})` }}
                            >
                                <div className={styles.featureBox}><Feature01 /></div>
                            </div>
                            <h4>Natural<br />Language Processing</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={styles.featureItem}>
                            <div
                                className={styles.featureIcon}
                                style={{ backgroundImage: `url(${BGIMG.src})` }}
                            >
                                <div className={styles.featureBox}><Feature01 /></div>
                            </div>
                            <h4>Natural<br />Language Processing</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={styles.featureItem}>
                            <div
                                className={styles.featureIcon}
                                style={{ backgroundImage: `url(${BGIMG.src})` }}
                            >
                                <div className={styles.featureBox}><Feature01 /></div>
                            </div>
                            <h4>Natural<br />Language Processing</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={styles.featureItem}>
                            <div
                                className={styles.featureIcon}
                                style={{ backgroundImage: `url(${BGIMG.src})` }}
                            >
                                <div className={styles.featureBox}><Feature01 /></div>
                            </div>
                            <h4>Natural<br />Language Processing</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div className={styles.featureItem}>
                            <div
                                className={styles.featureIcon}
                                style={{ backgroundImage: `url(${BGIMG.src})` }}
                            >
                                <div className={styles.featureBox}><Feature01 /></div>
                            </div>
                            <h4>Natural<br />Language Processing</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={styles.featureItem}>
                            <div
                                className={styles.featureIcon}
                                style={{ backgroundImage: `url(${BGIMG.src})` }}
                            >
                                <div className={styles.featureBox}><Feature01 /></div>
                            </div>
                            <h4>Natural<br />Language Processing</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <div className={styles.flexBtn}>
                            <a href="#" >Chat Now</a>
                            <a href="#" className={styles.btnColor}>Call Us+1447-4621- 3698</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >

    )
}

export default Feature