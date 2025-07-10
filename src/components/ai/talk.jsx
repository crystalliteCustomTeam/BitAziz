
import styles from "@/styles/components/ai/talk.module.scss";
import { Container, Row, Col } from 'react-bootstrap';
import VideoPoster from "media/videos/AiServices/AiServicesImg.webp";


const Talk = () => {
    return (
        <section className={`${styles.talkSection} p-100`}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.talkContent}>
                            <h2>Let’s Talk</h2>
                        </div>
                        <div className={styles.talkDescription}>
                            <h6>Start Your Journey</h6>
                            <p>Maximize your ROI with targeted campaigns across top platforms like Google, Facebook, Instagram, and more.</p>
                            <form action="">
                                <div className={styles.formGroup}>
                                    <input type="text" placeholder="Name" required />
                                    <input type="email" placeholder="Email" required />
                                    <input type="tel" placeholder="Phone" required />
                                    <input type="text" placeholder="Message" required />
                                    <button type="submit">Book a Consultation</button>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
            <video
                autoPlay
                muted
                loop
                preload="none"
                aria-label="Background video"
                className={styles.bannerVideo}
                playsInline
                poster={VideoPoster.src}
            >
                <source src="/videos/AiServices/letsTalk.mp4" type="video/mp4" />
            </video>
        </section>
    )
}

export default Talk
