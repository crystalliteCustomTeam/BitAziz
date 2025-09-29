"use client"
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/about/keypoints.module.scss";
import BgImg from "@/public/about/abtBG.webp"
import Link from "next/link";

const keyPointsData = [
    {
        title: "Services", content: (<>
            <p>We offer a comprehensive range of services focused on software and app development. Our primary focus in mobile app development for <Link href="/ios-app-development-company">iOS</Link> and Android, covering both native and <Link href="/cross-platform solutions">cross-platform solutions.</Link> In addition, we provide custom software development, web development, and <Link href="/mobile-game-development-company">game development</Link>. We also specialize in leveraging emerging technologies such as <Link href="/ai-development-company">AI/ML</Link>, <Link href="/blockchain-game-development-company">blockchain</Link>, and AR/VR to create innovative digital solutions that drive business growth.</p>
        </>)
    },
    {
        title: "Technologies", content: (<>
            <p>We primarily use Swift, Objective-C, Kotlin, and Java for native mobile app development on iOS and <Link href="/android-app-development-company">Android</Link>. We also specialize in cross-platform development using <Link href="/flutter-app-development">Flutter</Link> and <Link href="/react-native-app-development">React Native.</Link> For web applications, our team leverages HTML5, .Net, Node.Js, PHP, Python, CSS3, and JavaScript, along with popular frameworks such as Angular, React, and Vue.js. Our expertise extends to game development using Unity and Unreal Engine, as well as emerging technologies including Artificial Intelligence/Machine Learning, blockchain, and AR/VR.</p>
        </>)
    },
    {
        title: "Industries", content: (<>
            <p>We serve a diverse range of industries, with particular expertise in <Link href="/healthcare-app-development-services">healthcare</Link>, <Link href="/ecommerce-app-development">e-commerce</Link>, <Link href="/education-app-development">education</Link>, <Link href="/real-estate-app-development-company">real estate</Link>, and <Link href="/fintech-app-development">fintech</Link>. While operating on a global scale, we maintain a strong presence in the United States, including <Link href="/app-development-houston">Houston</Link>, <Link href="/app-development-chicago">Chicago</Link>, <Link href="/mobile-app-development-company-dallas">Dallas</Link>, <Link href="/app-development-austin">Austin</Link>, <Link href="/app-development-florida">Florida</Link>, <Link href="/app-development-company-washington-dc">Washington DC</Link>, and <Link href="/app-development-company-new-york">New York</Link>, as well as in the Middle East notably <Link href="/mobile-app-development-company-dubai">Dubai</Link> and <Link href="/mobile-app-development-company-saudi-arabia">Saudi Arabia</Link> and in Canada, particularly <Link href="/app-development-company-toronto">Toronto.</Link></p>
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
                                    {/* {keyPointsData.map((item, index) => (
                                        <div className={`${styles.bgTxt} ${activeIndex === index ? styles.active : ""}`} key={index}>
                                            {item.title}
                                        </div>
                                    ))} */}
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
