import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/about/abtawards.module.scss";
import Award1 from "@/public/ai-agent/logo/Logo01.webp"
import Award2 from "@/public/ai-agent/logo/Logo02.webp"
import Award3 from "@/public/ai-agent/logo/Logo03.webp"
import Award4 from "@/public/ai-agent/logo/Logo04.webp"
import Award5 from "@/public/ai-agent/logo/Logo05.webp"
import Award6 from "@/public/ai-agent/logo/Logo06.webp"
import Award7 from "@/public/ai-agent/logo/Logo07.webp"

import Image from "next/image";

export const data = [
    {
        AwardsIMG: Award1.src
    },
    {
        AwardsIMG: Award2.src
    },
    {
        AwardsIMG: Award3.src
    },
    {
        AwardsIMG: Award4.src
    },
    {
        AwardsIMG: Award5.src
    },
    {
        AwardsIMG: Award6.src
    },
    {
        AwardsIMG: Award7.src
    },

]


const Awards = ({ aiPage }) => {
    return (
        <section
            className={`${styles.abtAwardSection} ${aiPage ? `${styles.aiPage} p-100` : ""} pb-100`}
        >
            <Container>
                <Row>
                    <Col lg={12} md={12} className="m-auto text-center">
                        <div className={styles.aboutContainer}>
                            <div className={styles.aboutTxt}>
                                <div className="subTitle txtColorCenter">Tools & Technologies</div>
                                <h2>AI Agent Development</h2>
                                <p>Our awards and recognition from industry leaders stand as a testament to our dedication to innovation and excellence in AI agent development.</p>
                            </div>
                            <div className={styles.aboutAwards}>
                                {data.map((item, index) => (
                                    <div className={styles.AwardsItem} key={index}>
                                        <Image src={item.AwardsIMG} alt="Bitswits Awards" fill />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Awards