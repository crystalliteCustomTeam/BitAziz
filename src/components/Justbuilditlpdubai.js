import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Container, Row, Col, Modal } from "react-bootstrap";
import Bitswitspopup from "../components/Bitswitspopup";
import { RxCross2 } from "react-icons/rx";
import styles from "@/styles/Justbuilditlpdubai.module.css";
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//images
import banImg1 from "@/public/images/banner/bannerImg1.png";
import banImg2 from "@/public/images/banner/bannerImg2.png";
import banImg3 from "@/public/images/banner/bannerImg1.png";
import banImg4 from "@/public/images/banner/bannerImg2.png";
import banImg5 from "@/public/images/banner/bannerImg1.png";
import Link from "next/link";

const Justbuilditlpdubai = (props) => {
  var bannerslider = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 20000,
    pauseOnHover: false,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  // Modal
  const [show, setShow] = useState(false);
  function modal(e) {
    e.preventDefault();
    setShow(true);
  }

  function closemodal() {
    setShow(false);
  }
  useEffect(() => {
    window.replaceChat = function () {
      if (window.LiveChatWidget?.call) {
        window.LiveChatWidget.call("maximize");
      } else {
        console.warn("LiveChat is not loaded yet.");
      }
    };
  }, []);
  return (
    <>
      <section className={`${styles[props.slide]} ${props.css}`}>
        <Container>
          <Row>
            <Col xl={12}>
              <h2 className={styles.title}>
                <span>{props.title1}</span> {props.title}
              </h2>
              <p className={styles.para}>{props.para}</p>
              <div className={styles.pont}>
                <Link
                  rel="preload"
                  href="tel:8335006007"
                  className={`blueShade ${styles.about1}`}
                >
                  Call Now
                </Link>
                <Link
                  rel="preload"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.replaceChat();
                  }}
                  className={`pink ${styles.about}`}
                >
                  Live Chat
                </Link>
              </div>
            </Col>
          </Row>
        </Container>

        <Slider {...bannerslider} className="mt-5 d-sm-block d-none">
          <div className={styles.strpImg}>
            <Image
              alt="This image showcases the different arrays of Apps we have created"
              sizes="100vw"
              loading="lazy"
              src={banImg1}
              className="img-fluid"
            />
          </div>
          <div className={styles.strpImg}>
            <Image
              alt="This image showcases the different arrays of Apps we have created"
              sizes="100vw"
              loading="lazy"
              src={banImg2}
              className="img-fluid"
            />
          </div>
          <div className={styles.strpImg}>
            <Image
              alt="This image showcases the different arrays of Apps we have created"
              sizes="100vw"
              loading="lazy"
              src={banImg3}
              className="img-fluid"
            />
          </div>
          <div className={styles.strpImg}>
            <Image
              alt="This image showcases the different arrays of Apps we have created"
              sizes="100vw"
              loading="lazy"
              src={banImg4}
              className="img-fluid"
            />
          </div>
          <div className={styles.strpImg}>
            <Image
              alt="This image showcases the different arrays of Apps we have created"
              sizes="100vw"
              loading="lazy"
              src={banImg5}
              className="img-fluid"
            />
          </div>
        </Slider>
      </section>
      {/* Modal Start*/}
      <Modal show={show} onHide={closemodal} className={styles.modalnew}>
        <Modal.Body>
          <Bitswitspopup formsaspire="popquote" />
          <span onClick={closemodal} className={styles.cross}>
            <RxCross2 />
          </span>
        </Modal.Body>
      </Modal>
      {/* Modal Start*/}
    </>
  );
};

export default Justbuilditlpdubai;
