import styles from "@/styles/ai-agent-development-company/counter.module.scss";
import { Col, Container, Row } from "react-bootstrap";

const ProjectCounter = () => {
    return (
        <section className={styles.counterSection}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.counterWapper}>
                            <div className={styles.counterItem}>
                                100+ <span>Projects Delivered</span>
                            </div>
                            <div className={styles.counterItem}>
                                4.9 <span>Rating out of 5</span>
                            </div>
                            <div className={styles.counterItem}>
                                98% <span>Client Satisfaction</span>
                            </div>
                            <div className={styles.counterItem}>
                                50+ <span>AI engineers</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default ProjectCounter