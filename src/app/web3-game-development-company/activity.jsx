import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/game/activity.module.scss"


const Activity = () => {
    return (
        <section className={styles.activitySection}>
            <Container>
                <Row>
                    <Col lg={10} md={12} className="m-auto">
                        <div className={`${styles.activityBox} commongradientBG`}>
                            <div className={styles.activityitem}>
                                99%
                                <span>Satisfaction Rate</span>
                            </div>
                            <div className={styles.activityitem}>
                                85%
                                <span>User Retention</span>
                            </div>
                            <div className={styles.activityitem}>
                                10k+
                                <span>Game Download </span>
                            </div>
                            <div className={styles.activityitem}>
                                12+
                                <span>Years Experience</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Activity