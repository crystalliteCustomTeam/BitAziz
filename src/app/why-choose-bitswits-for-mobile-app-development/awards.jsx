import styles from "@/styles/why-choose/awards.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import IMG01 from "media/home/awards/award01.webp"
import IMG02 from "media/home/awards/award02.webp"
import IMG03 from "media/home/awards/award03.webp"
import IMG04 from "media/home/awards/award04.webp"
import IMG05 from "media/home/awards/award05.webp"
import IMG06 from "media/home/awards/award06.webp"

import Image from "next/image"

const Awards = () => {
    return (
        <section className={styles.awardsSection}>
            <Container>
                <Row>
                    <Col className="text-center">
                        <div className="subTitle txtColor">Awards & Recognition</div>
                        <h2>Digital Marketing Awards & Recognitions</h2>
                    </Col>
                    <Col md={12}>

                        <div className={styles.awardsWapper}>
                            <div className={styles.awardsItem}>
                                <div className={styles.awardsLogo}>
                                    <Image src={IMG01.src} alt="Digital Agences" width={250} height={250} />
                                </div>
                                <div className={styles.awardsTxt}>Most Rewiewed Digital Agences in Huston for 2022 by <span>The Manifest</span></div>

                            </div>
                            <div className={styles.awardsItem}>
                                <div className={styles.awardsLogo}>
                                    <Image src={IMG02.src} alt="Digital Agences" width={250} height={250} />
                                </div>
                                <div className={styles.awardsTxt}>Most Rewiewed Digital Agences in Huston for 2022 by <span>The Manifest</span></div>

                            </div>
                            <div className={styles.awardsItem}>
                                <div className={styles.awardsLogo}>
                                    <Image src={IMG03.src} alt="Digital Agences" width={250} height={250} />
                                </div>
                                <div className={styles.awardsTxt}>Most Rewiewed Digital Agences in Huston for 2022 by <span>The Manifest</span></div>

                            </div>
                            <div className={styles.awardsItem}>
                                <div className={styles.awardsLogo}>
                                    <Image src={IMG04.src} alt="Digital Agences" width={250} height={250} />
                                </div>
                                <div className={styles.awardsTxt}>Most Rewiewed Digital Agences in Huston for 2022 by <span>The Manifest</span></div>

                            </div>
                            <div className={styles.awardsItem}>
                                <div className={styles.awardsLogo}>
                                    <Image src={IMG05.src} alt="Digital Agences" width={250} height={250} />
                                </div>
                                <div className={styles.awardsTxt}>Most Rewiewed Digital Agences in Huston for 2022 by <span>The Manifest</span></div>

                            </div>
                            <div className={styles.awardsItem}>
                                <div className={styles.awardsLogo}>
                                    <Image src={IMG06.src} alt="Digital Agences" width={250} height={250} />
                                </div>
                                <div className={styles.awardsTxt}>Most Rewiewed Digital Agences in Huston for 2022 by <span>The Manifest</span></div>

                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Awards