import styles from "@/styles/components/ai/ctasection.module.scss";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

const CtaSection = () => {
    return (
        <section className={`p-100 ${styles.ctaSection}`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={5} className="my-auto">
                        <div className="subTitle txtColor">Let’s Build Your Custom AI Agent</div>
                        <h2>Send Us Your Requirements, We’ll Reach Out to Discuss</h2>
                        <ul>
                            <li>Scalable and Secure Apps</li>
                            <li>User-Centric Design</li>
                            <li>Customized Development</li>
                            <li>Error-Free Delivery</li>
                            <li>Transparent Communication</li>
                            <li>Support and Maintenance</li>
                        </ul>
                    </Col>
                    <Col md={7} className="my-auto">
                        <div className={styles.fromCotnact}>
                            <form>
                                <div className={styles.formGroup}>
                                    <div className={styles.inputGroup}>
                                        <input type="text" name="name" placeholder="Full Name" required />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <input type="email" name="email" placeholder="Your Email" required />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <input type="tel" name="phone" placeholder="Your Phone Number" required />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <input type="number" name="price" placeholder="Project Budget" required />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <textarea name="comment" placeholder="Tell us about your Project"></textarea>
                                    </div>
                                    <p>We take your privacy seriously. Read our <Link href="/privacy-policy">Privacy Policy</Link></p>
                                    <button>Submit</button>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CtaSection