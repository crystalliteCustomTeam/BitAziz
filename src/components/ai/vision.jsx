import styles from "@/styles/components/ai/vision.module.scss";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import BannerPoster from "media/videos/AiServices/VisionVideo.webp";
import Visionbg from "media/videos/AiServices/Visionbg.webp";

const Vision = () => {
    return (
        <section className={`${styles.visionSection} `}>
            <Container className={`h-100 ${styles.VisionContainer}`} style={{ backgroundImage: `url(${Visionbg.src})` }}>
                <Row className="h-100">
                    <Col md={5} className="my-auto">
                        <div className={styles.Visionwrap}>
                            <video
                                autoPlay
                                muted
                                loop
                                preload="none"
                                aria-label="Background video"
                                className={styles.VisionVideo}
                                playsInline
                                poster={BannerPoster.src}
                            >
                                <source src="/videos/AiServices/VisionVideo.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </Col>
                    <Col md={5} className="my-auto offset-md-1">
                        <h2>Let’s Help You Turn Your<br />
                            Vision into Reality.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button className={styles.bannerBtn}>
                            <Link href="#">Book a Free Consultation</Link>
                        </button>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.visionCounter}>
                            <div className={styles.visionCounterItem}>
                                <h4>150K+</h4>
                                <p>Active Users</p>
                            </div>
                            <div className={styles.visionCounterItem}>
                                <h4>4.9</h4>
                                <p>Rating out of 5</p>
                            </div>
                            <div className={styles.visionCounterItem}>
                                <h4>99K+</h4>
                                <p>Positive Reviews</p>
                            </div>
                            <div className={styles.visionCounterItem}>
                                <h4>85+</h4>
                                <p>Users Satisfied</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Vision