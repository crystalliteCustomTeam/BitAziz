import styles from "@/styles/ai-agent-development-company/banner.module.scss"
import { Col, Container, Row } from "react-bootstrap";
import { StarIcon } from "@/src/app/app-constants";
import ButtonCommon from "@/src/components/common/button";
import BannerPoster from "media/videos/AiServices/AiServicesImg.webp";
import ContactFrom from "@/src/components/common/contactfrom";
import Link from "next/link";
const Banner = () => {
    return (
        <section className={styles.bannerSection}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={6} lg={7} xl={6} className="my-auto">
                        <div className={styles.bannerTxt}>
                            <div className={styles.rating}>
                                {[...Array(5)].map((_, i) => (
                                    <StarIcon key={i} />
                                ))}
                                4.9/5 Rating
                            </div>
                            <h1>AI Agent Development Company</h1>
                            <p>We specialize in developing custom AI agents that streamline operations and personalize customer journeys. At BitsWits, our advanced <Link href="/ai-development-company">AI development solutions</Link> help organizations of all sizes enhance engagement, reduce manual effort, and boost productivity.</p>
                            <div className={styles.btnFlex}>
                                <ButtonCommon txt="Let’s connect " />
                            </div>
                            <div className={styles.bannerCounter}>
                                <div className={styles.counterItem}>
                                    10+ <div className={styles.value}>Years of Experience</div>
                                </div>
                                <div className={styles.counterItem}>
                                    1,200+ <div className={styles.value}>Successful Projects</div>
                                </div>
                                <div className={styles.counterItem}>
                                    100+<div className={styles.value}>Global Clients</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={5} xl={5} className="offset-xl-1 my-auto">
                        <div className={styles.bannerForm}>
                            <h5>Free Consultation </h5>
                            <ContactFrom aiPage={true} />
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
                poster={BannerPoster.src}
            >
                <source src="/ai-agent/bannerVideo.mp4" type="video/mp4" />
            </video>

        </section>
    )
}

export default Banner