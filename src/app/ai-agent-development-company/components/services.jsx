"use client"
import styles from "@/styles/ai-agent-development-company/services.module.scss";
import { Col, Container, Row } from "react-bootstrap";

const Services = () => {
    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof window !== "undefined" && window.LiveChatWidget) {
            window.LiveChatWidget.call("maximize"); // opens the chat
        } else {
            console.warn("LiveChat widget not loaded yet");
        }
    };
    return (
        <section className={`${styles.servicesSection} pb-100`}>
            <Container>
                <Row>
                    <Col md={12} className="text-center">
                        <div className="subTitle txtColorCenter">Custom AI Agent Development</div>
                        <h2>Smart, Voice-Activated Conversational AI Features</h2>
                    </Col>
                    <Col lg={12} xl={10} className="m-auto">
                        <div className={styles.servicesWapper}>
                            <div className={styles.servicesItem}>
                                <div className={styles.num}>
                                    01
                                </div>
                                <div className={styles.Title}>Natural<br /> Language Understanding</div>
                                <div className={styles.txt}>Accurately interprets spoken input across accents and languages. Extracts intents and entities to understand user queries effectively.</div>
                            </div>
                            <div className={styles.servicesItem}>
                                <div className={styles.num}>
                                    02
                                </div>
                                <div className={styles.Title}>Generative <br /> Response Capability</div>
                                <div className={styles.txt}>Creates context-aware, human-like responses in real time. Supports multi-turn conversations while maintaining continuity.</div>
                            </div>
                            <div className={styles.servicesItem}>
                                <div className={styles.num}>
                                    03
                                </div>
                                <div className={styles.Title}>Voice <br /> Input & Output</div>
                                <div className={styles.txt}>Converts speech to text and text back to natural speech seamlessly. Offers customizable voices, accents, and languages for personalization.</div>
                            </div>
                            <div className={styles.servicesItem}>
                                <div className={styles.num}>
                                    04
                                </div>
                                <div className={styles.Title}>Context  <br />Awareness & Memory</div>
                                <div className={styles.txt}>Remembers previous interactions within sessions or across time. Adapts responses based on user history and preferences.</div>
                            </div>
                            <div className={styles.servicesItem}>
                                <div className={styles.num}>
                                    05
                                </div>
                                <div className={styles.Title}>Multi-Modal<br />  Integration</div>
                                <div className={styles.txt}>Combines voice with text, images, and other data sources. Accesses APIs or databases to provide accurate, enriched answers.</div>
                            </div>
                            <div className={styles.servicesItem}>
                                <div className={styles.num}>
                                    06
                                </div>
                                <div className={styles.Title}>Personalization</div>
                                <div className={styles.txt}>Learns user behavior to tailor tone, style, and suggestions. Customizable for industries like healthcare, finance, or customer support.</div>
                            </div>
                            <div className={styles.servicesItem}>
                                <div className={styles.num}>
                                    07
                                </div>
                                <div className={styles.Title}>Multi-Tasking<br /> & Automation</div>
                                <div className={styles.txt}>Executes tasks like bookings, reminders, or smart device control. Integrates with workflows and apps for greater efficiency.</div>
                            </div>
                            <div className={styles.servicesItem}>
                                <div className={styles.num}>
                                    08
                                </div>
                                <div className={styles.Title}>Safety<br /> & Compliance</div>
                                <div className={styles.txt}>Filters inappropriate content and safeguards user data. Ensures privacy and meets regulations like GDPR or HIPAA.</div>
                            </div>
                        </div>
                        <div className={styles.flexBtn}>
                            <a href="#" onClick={handleChatOpen}>
                                Chat Now
                            </a>
                            <a href="tel:+18335006007" className={styles.btnColor}>Call Us +1 833 500 6007</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Services