import styles from "@/styles/components/ai/casestudies.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import Case01 from "media/videos/AiServices/case/img01.webp"
import Case02 from "media/videos/AiServices/case/img02.webp"
import Case03 from "media/videos/AiServices/case/img03.webp"
import Case04 from "media/videos/AiServices/case/img04.webp"
import Image from "next/image"
import { ServiceArrow } from "@/src/app/app-constants"

const CaseStudies = () => {
    return (
        <section className={`${styles.caseStudies} p-100`}  >
            <Container>
                <Row>
                    <Col lg={6} md={7}>
                        <div className="subTitle txtColor">Case Studies</div>
                        <h2>Some work we are proud of</h2>
                    </Col>
                </Row>
            </Container>
            <Container fluid className={styles.caseStudiesFullContainer}>
                <Container className={styles.caseStudiesContainer}>
                    <Row>
                        <Col lg={4} md={6}>
                            <div className={styles.caseStudiesContent}>
                                <div className={styles.subtitle}>Service</div>
                                <h3>Healthcare</h3>
                                <div className={styles.txt}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className={styles.btnContainer}>
                                    <a href="#">Chat Now</a>
                                    <a href="#">+1 833 500 6007</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={8} md={6}>
                            <div className={styles.caseStudiesImage}>
                                <Image src={Case01.src} alt="Healthcare Case Study" fill />
                            </div>
                            <div className={styles.viewServices}>
                                <div className={styles.arrowIcon}><ServiceArrow /></div>
                                View Service
                            </div>
                        </Col>

                    </Row>
                </Container>
            </Container>
            <Container fluid className={styles.caseStudiesFullContainer}>
                <Container className={styles.caseStudiesContainer}>
                    <Row>
                        <Col lg={4} md={6}>
                            <div className={styles.caseStudiesContent}>
                                <div className={styles.subtitle}>Service</div>
                                <h3>Healthcare</h3>
                                <div className={styles.txt}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className={styles.btnContainer}>
                                    <a href="#">Chat Now</a>
                                    <a href="#">+1 833 500 6007</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={8} md={6}>
                            <div className={styles.caseStudiesImage}>
                                <Image src={Case02.src} alt="Healthcare Case Study" fill />
                            </div>
                            <div className={styles.viewServices}>
                                <div className={styles.arrowIcon}><ServiceArrow /></div>
                                View Service
                            </div>
                        </Col>

                    </Row>
                </Container>
            </Container>
            <Container fluid className={styles.caseStudiesFullContainer}>
                <Container className={styles.caseStudiesContainer}>
                    <Row>
                        <Col lg={4} md={6}>
                            <div className={styles.caseStudiesContent}>
                                <div className={styles.subtitle}>Service</div>
                                <h3>Healthcare</h3>
                                <div className={styles.txt}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className={styles.btnContainer}>
                                    <a href="#">Chat Now</a>
                                    <a href="#">+1 833 500 6007</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={8} md={6}>
                            <div className={styles.caseStudiesImage}>
                                <Image src={Case03.src} alt="Healthcare Case Study" fill />
                            </div>
                            <div className={styles.viewServices}>
                                <div className={styles.arrowIcon}><ServiceArrow /></div>
                                View Service
                            </div>
                        </Col>

                    </Row>
                </Container>
            </Container>
            <Container fluid className={styles.caseStudiesFullContainer}>
                <Container className={styles.caseStudiesContainer}>
                    <Row>
                        <Col lg={4} md={6}>
                            <div className={styles.caseStudiesContent}>
                                <div className={styles.subtitle}>Service</div>
                                <h3>Healthcare</h3>
                                <div className={styles.txt}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className={styles.btnContainer}>
                                    <a href="#">Chat Now</a>
                                    <a href="#">+1 833 500 6007</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={8} md={6}>
                            <div className={styles.caseStudiesImage}>
                                <Image src={Case04.src} alt="Healthcare Case Study" fill />
                            </div>
                            <div className={styles.viewServices}>
                                <div className={styles.arrowIcon}><ServiceArrow /></div>
                                View Service
                            </div>
                        </Col>

                    </Row>
                </Container>
            </Container>
        </section>
    )
}

export default CaseStudies