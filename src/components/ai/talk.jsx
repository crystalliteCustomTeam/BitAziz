"use client";
import { useState } from "react";
import styles from "@/styles/components/ai/talk.module.scss";
import { Container, Row, Col } from 'react-bootstrap';
import VideoPoster from "media/videos/AiServices/AiServicesImg.webp";

const Talk = () => {
    const [selected, setSelected] = useState("");
    const [customInput, setCustomInput] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        if (value === "Other") {
            setSelected("Other");
        } else {
            setSelected(value);
            setCustomInput(""); // Clear input if user re-selects
        }
    };

    return (
        <section className={`${styles.talkSection} p-100`}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.talkContent}>
                            <h2>Let’s Talk</h2>
                        </div>
                        <div className={styles.talkDescription}>
                            <h6>Automate Smarter with Custom AI Agents</h6>
                            <p>Streamline complex tasks, boost efficiency, and scale faster with intelligent automation built just for you.</p>
                            <form action="">
                                <div className={styles.formGroup}>
                                    <input type="text" placeholder="Name" required />
                                    <input type="email" placeholder="Email" required />
                                    <input type="tel" placeholder="Phone" required />

                                    {selected === "Other" ? (
                                        <input
                                            type="text"
                                            placeholder="Please specify"
                                            value={customInput}
                                            onChange={(e) => setCustomInput(e.target.value)}
                                            required
                                        />
                                    ) : (
                                        <select value={selected} onChange={handleChange} required>
                                            <option value="">What Do You Want to Automate?</option>
                                            <option value="Customer Support">Customer Support</option>
                                            <option value="Sales Prospecting">Sales Prospecting</option>
                                            <option value="Marketing Tasks">Marketing Tasks</option>
                                            <option value="Data Processing">Data Processing</option>
                                            <option value="Operations / Scheduling">Operations / Scheduling</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    )}

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
    );
};

export default Talk;
