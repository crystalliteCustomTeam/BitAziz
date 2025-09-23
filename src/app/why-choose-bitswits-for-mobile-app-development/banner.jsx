import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/portfolio/projectbanenr.module.scss";
import ButtonCommon from "@/src/components/common/button";

const Banner = () => {
  return (
    <section className={`${styles.projectSection}`}>
      <Container className="h-100">
        <Row className="h-100">
          <Col lg={8} md={10} className="mx-auto mt-auto text-center">
            <h1>
              About <span className="txtColor">BitsWits!</span>
            </h1>
            <p>
              BitsWits is a leading mobile app development company established in 2012, with over a decade of experience delivering innovative digital solutions. Our team of skilled developers, designers, and strategists has created apps for startups, large enterprises, and global brands, earning awards for creativity and excellence along the way.
              We specialize in developing iOS and Android apps, designing intuitive user interfaces and experiences, creating games, building web applications, and leveraging emerging technologies such as AR/VR, blockchain, and Artificial Intelligence.</p>
            <ButtonCommon txt="Get an Idea!" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
