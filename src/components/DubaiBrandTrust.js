import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import styles from "@/styles/DubaiBrandTrust.module.css";
// Swiper
import "swiper/css";
// Images
import BrandOne from "media/newdubai/single-brands.png";
import BrandTwo from "media/newdubai/single-brands1.png";

const DubaiBrandTrust = ({ padding, rtl }) => {
  return (
    <>
      <section
        className={`${styles.brandTrustSec} ${
          padding ? styles.paddingTop : ""
        }`}
      >
        <div className={`${styles.overFlow} container`}>
          <Row>
            <Col lg={12}>
              <div className={styles.txt}>
                <p>{rtl ? "مشهور عالميًا" : "World-Renowned"}</p>
                <h2>
                  {rtl
                    ? "تثق بنا العلامات التجارية العالمية"
                    : "Brands Trust Us"}
                </h2>
              </div>
              <div className={styles.brands}>
                <div>
                  <Image
                    src={BrandOne}
                    alt='This image shows about the companies that are our partners'
                    loading='lazy'
                    sizes='100vw'
                    className='w-100 h-auto'
                  />
                  <Image
                    src={BrandTwo}
                    alt='This image shows about the companies that are our partners'
                    loading='lazy'
                    sizes='100vw'
                    className='w-100 h-auto'
                  />
                  <Image
                    src={BrandOne}
                    alt='This image shows about the companies that are our partners'
                    loading='lazy'
                    sizes='100vw'
                    className='w-100 h-auto'
                  />
                  <Image
                    src={BrandTwo}
                    alt='This image shows about the companies that are our partners'
                    loading='lazy'
                    sizes='100vw'
                    className='w-100 h-auto'
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default DubaiBrandTrust;
