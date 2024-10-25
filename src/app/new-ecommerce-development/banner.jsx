import ButtonCommon from "@/src/components/common/button"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/new-ecommerce-development/banner.module.scss"
import Head from "next/head"
import ContactFrom from "@/src/app/new-ecommerce-development/contactfrom"

const Banner = ({ data }) => {
    return (
        <>
            <Head>
                <link rel="preload" href="/videos/bannerVideo.mp4" as="video" type="video/mp4" />
            </Head>
            <section className={styles.bannerSection}>
                <Container className="h-100">
                    <Row className="h-100">
                        <Col lg={7} md={9} className="my-auto">
                            <div className={styles.bannerContent}>
                                <h1>{data?.title}</h1>
                                <p>{data?.content}</p>
                                <ul>
                                    <li>BitsWits, perfection is our baseline</li>
                                    <li>BitsWits, perfection is our baseline</li>
                                    <li>BitsWits, perfection is our baseline</li>
                                    <li>BitsWits, perfection is our baseline</li>
                                </ul>
                                <ButtonCommon txt="Let’s Discuss!" />
                            </div>
                        </Col>
                        <Col lg={4} md={3} className="my-auto offset-lg-1 ">
                            <div className={styles.appIdeaFrom}>
                                <h5>Make A Obligation<br /> <span className="subTitle txtColor">
                                    Free Enquiry </span></h5>
                                <ContactFrom lpweb={true} />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <video
                    autoPlay
                    muted
                    loop
                    preload="auto"
                    aria-label="Background video"
                    className={styles.bannerVideo}
                    loading="eager"
                >
                    <source src="/videos/bannerVideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </section>
        </>
    )
}

export default Banner