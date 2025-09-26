"use client"
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/about/keypoints.module.scss";
import BgImg from "@/public/about/abtBG.webp"

const keyPointsData = [
    {
        title: "Services", content: (<>
            <p>We offer a comprehensive range of services focused on software and app development. Our primary focus in mobile app development for iOS and Android, covering both native and cross-platform solutions. In addition, we provide custom software development, web development, and game development. We also specialize in leveraging emerging technologies such as AI/ML, blockchain, and AR/VR to create innovative digital solutions that drive business growth.</p>
        </>)
    },
    {
        title: "Technologies", content: (<>
            <p>We primarily use Swift, Objective-C, Kotlin, and Java for native mobile app development on iOS and Android. We also specialize in cross-platform development using Flutter and React Native. For web applications, our team leverages HTML5, .Net, Node.Js, PHP, Python, CSS3, and JavaScript, along with popular frameworks such as Angular, React, and Vue.js. Our expertise extends to game development using Unity and Unreal Engine, as well as emerging technologies including Artificial Intelligence/Machine Learning, blockchain, and AR/VR.</p>
        </>)
    },
    {
        title: "Industries", content: (<>
            <p>We serve a diverse range of industries, with particular expertise in healthcare, e-commerce, education, real estate, and fintech. While operating on a global scale, we maintain a strong presence in the United States, including Houston, Chicago, Dallas, Austin, Florida, Washington DC, and New York, as well as in the Middle East notably Dubai and Saudi Arabia and in Canada, particularly Toronto.</p>
        </>)
    }
];

const KeyPoints = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className={`${styles.aboutSection}   pb-100`} style={{ backgroundImage: `url(${BgImg.src})` }}>
            <Container>
                <Row>
                    <Col lg={12} md={12}>
                        <div className={styles.keypointsContainer}>
                            <div className={styles.keypointsTitle}>
                                <ul className={styles.keypointsListing}>
                                    {keyPointsData.map((item, index) => (
                                        <li
                                            key={index}
                                            className={`${styles.listingItem} ${styles.whysection} ${activeIndex === index ? styles.active : ""}`}
                                            onClick={() => setActiveIndex(index)}
                                        >
                                            {item.title}
                                        </li>
                                    ))}
                                    {keyPointsData.map((item, index) => (
                                        <div className={`${styles.bgTxt} ${activeIndex === index ? styles.active : ""}`} key={index}>
                                            {item.title}
                                        </div>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.keypointsContent}>
                                {keyPointsData[activeIndex].content}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    );
};

export default KeyPoints;
