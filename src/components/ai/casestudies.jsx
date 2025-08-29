"use client"
import styles from "@/styles/components/ai/casestudies.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import Case01 from "media/videos/AiServices/case/img01.webp"
import Case02 from "media/videos/AiServices/case/img02.webp"
import Case03 from "media/videos/AiServices/case/img03.webp"
import Case04 from "media/videos/AiServices/case/img04.webp"
import Image from "next/image"
import { ServiceArrow } from "@/src/app/app-constants"

const CaseStudies = () => {
    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof window !== "undefined" && window.LiveChatWidget) {
            window.LiveChatWidget.call("maximize"); // opens the chat
        } else {
            console.warn("LiveChat widget not loaded yet");
        }
    };
    return (
        <section className={`${styles.caseStudies} p-100`}  >
            <Container>
                <Row>
                    <Col lg={6} md={7}>
                        <div className="subTitle txtColor">Case Studies</div>
                        <h2>AI Agent Use Cases Across Industries</h2>
                    </Col>
                </Row>
            </Container>
            <Container fluid className={styles.caseStudiesFullContainer}>
                <Container className={styles.caseStudiesContainer}>
                    <Row>
                        <Col lg={4} md={12}>
                            <div className={styles.caseStudiesContent}>
                                <div className={styles.subtitle}>Service</div>
                                <h3>Healthcare</h3>
                                <div className={styles.txt}>
                                    <p>A growing multi-location healthcare clinic partnered with us to develop a custom AI agent that could handle appointment scheduling, patient reminders, and post-visit follow-ups. By automating these administrative tasks, the clinic saved over 120 staff hours per month, allowing nurses and front-desk teams to focus more on patient care. Additionally, the no-show rate dropped by 28%, and patient response time improved by 3.5x, resulting in a more efficient and patient-friendly workflow.</p>
                                </div>
                                <div className={styles.btnContainer}>
                                    <a href="#" onClick={handleChatOpen}>Chat Now</a>
                                    <a href="#">+1 833 500 6007</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={8} md={12}>
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
                        <Col lg={4} md={12}>
                            <div className={styles.caseStudiesContent}>
                                <div className={styles.subtitle}>Service</div>
                                <h3>Finance</h3>
                                <div className={styles.txt}>
                                    <p>A leading fintech company needed to reduce manual work around compliance and transaction monitoring. We built a specialized AI agent to automate KYC checks, real-time transaction flagging, and the generation of daily compliance reports. The result? Manual review time was cut by 60%, suspicious activity was identified with 95% accuracy, and regulatory reports that once took hours were now completed in under 2 minutes, enhancing both compliance and operational speed.</p>
                                </div>
                                <div className={styles.btnContainer}>
                                    <a href="#" onClick={handleChatOpen}>Chat Now</a>
                                    <a href="tel:+18335006007">+1 833 500 6007</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={8} md={12}>
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
                        <Col lg={4} md={12}>
                            <div className={styles.caseStudiesContent}>
                                <div className={styles.subtitle}>Service</div>
                                <h3>Retail & E-commerce</h3>
                                <div className={styles.txt}>
                                    <p>An online fashion retailer approached us to improve customer experience and reduce support overhead. We deployed an AI agent that managed order tracking, product recommendations, and size-related queries in real time. Within weeks, the agent was handling 80% of customer inquiries without human input. Personalized recommendations powered by the agent increased the store’s conversion rate by 21%, while cart abandonment decreased by 15%, leading to significant gains in revenue and retention.</p>
                                </div>
                                <div className={styles.btnContainer}>
                                    <a href="#" onClick={handleChatOpen}>Chat Now</a>
                                    <a href="tel:+18335006007">+1 833 500 6007</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={8} md={12}>
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
                        <Col lg={4} md={12}>
                            <div className={styles.caseStudiesContent}>
                                <div className={styles.subtitle}>Service</div>
                                <h3>Customer Service</h3>
                                <div className={styles.txt}>
                                    <p>A SaaS company struggling with slow support response times turned to us to build an AI-powered support agent. Once integrated, the agent was able to autonomously resolve 74% of incoming tickets, drastically reducing the need for manual intervention. Average response time dropped from 8 hours to just 2 minutes, and the company saved over $6,500 per month in support team costs. With 24/7 availability, customer satisfaction scores also improved significantly.</p>
                                </div>
                                <div className={styles.btnContainer}>
                                    <a href="#" onClick={handleChatOpen}>Chat Now</a>
                                    <a href="tel:+18335006007">+1 833 500 6007</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={8} md={12}>
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