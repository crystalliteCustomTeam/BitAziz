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
                        <div className="subTitle txtColorCenter">Custom AI Agent Automation</div>
                        <h2>What Can AI Agents Automate for You?</h2>
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
                            <h4>Natural<br />Language Understanding</h4>
                            <p>The AI agent understands everyday language, so you can give it tasks just by typing or speaking. No technical commands needed, it gets what you mean.</p>
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
                            <h4>Context<br /> Retention & Memory</h4>
                            <p>The agent remembers past conversations, tasks, and preferences. That way, it gets smarter and more helpful over time.</p>
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
                            <h4>Real-Time<br /> Data Processing</h4>
                            <p>The agent can read and react to, and analyze live data instantly. It keeps things moving without waiting on manual updates.</p>
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
                            <h4>Multimodal <br />Input/Output</h4>
                            <p>It works with text, voice, images, and documents. You can talk to it, upload a file, or even send a screenshot.</p>
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
                            <h4>Task Scheduling<br /> & Auto-Execution</h4>
                            <p>Set it once, and the agent takes care of the task on schedule. No reminders or follow-ups, it just gets done.</p>
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
                            <h4>Role-Based<br /> Automation</h4>
                            <p>Each agent is trained for a specific role, like customer support or data analysis. It knows its job and handles those tasks without needing you to guide it every time.</p>
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