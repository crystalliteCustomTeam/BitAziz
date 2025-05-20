import styles from "@/styles/industry/banner.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import ButtonCommon from "@/src/components/common/button"
import Popup from "@/src/app/home/components/popup";

const Banner = ({ data }) => {
    return (
        <>
            <Popup />
            <section className={styles.industryBanner}
                style={{ backgroundImage: `url(${data?.BannerBg})` }}
            >
                <Container className="h-100">
                    <Row className="h-100">
                        <Col lg={10} md={10} className="m-auto text-center">
                            <h1>{data?.title}</h1>
                            <p>{data?.content}</p>
                            <div className={styles.btnFlex}>
                                <ButtonCommon txt="Free Consultation" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Banner