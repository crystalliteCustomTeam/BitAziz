import styles from "@/styles/components/ai/choose.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import BGIMG from "media/videos/AiServices/whyChooseBg.webp";
const Choose = () => {
    return (
        <section className={`pt-100 ${styles.whyChooseSection}`}>
            <Container className={styles.whyChooseContainer} style={{ backgroundImage: `url(${BGIMG.src})` }}>
                <Row>
                    <Col md={6} className="m-auto text-center">
                        <div className="subTitle txtColorCenter">n8n ai agent development</div>
                        <h2>AI Agent Development Process</h2>
                    </Col>
                    <Col md={12} className="my-auto">
                        <div className={styles.whyChooseWraper}>
                            <div className={styles.whyChooseItem}>
                                <div className={styles.number}>01</div>
                                <h5>Discovery & Strategy</h5>
                                <p>We begin by understanding your business goals, workflows, and challenges. Our team identifies high-impact use cases for AI agents, then maps out the architecture, integrations, and learning models best suited to your needs.</p>
                            </div>
                            <div className={styles.whyChooseItem}>
                                <div className={styles.number}>02</div>
                                <h5>Design, Build & Train</h5>
                                <p>Our engineers and AI specialists develop your custom agent using LLMs, vector databases, APIs, and memory systems. We train it on your data and optimize it for performance, reliability, and context awareness.</p>
                            </div>
                            <div className={styles.whyChooseItem}>
                                <div className={styles.number}>03</div>
                                <h5>Deploy, Integrate & Optimize</h5>
                                <p>Once built, we deploy the agent into your ecosystem, integrating it with your tools, platforms, and workflows. Post-launch, we monitor, refine, and scale the agent to continuously improve its output and autonomy.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Choose