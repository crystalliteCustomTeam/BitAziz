"use client";
import { useEffect, useState } from "react";
import ButtonCommon from "@/src/components/common/button";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/home/banner.module.scss";
import BannerPoster from "media/home/bannerPoster.webp";
import Head from "next/head";
import Image from "next/image";



const Banner = ({ data }) => {
  const [showVideo, setShowVideo] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowVideo(true);
    }, 15000000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/videos/bannerVideo.mp4"
          as="video"
          type="video/mp4"
        />
      </Head>

      <section className={styles.bannerSection}>
        <Container className="h-100">
          <Row className="h-100">
            <Col lg={8} md={9} className="my-auto">
              <div className={styles.bannerContent}>
                <h1>{data?.title}</h1>
                <p>{data?.content}</p>
                <ButtonCommon txt="Let’s Discuss!" />

              </div>
            </Col>
          </Row>
        </Container>

        {!showVideo ? (
          <Image
            src={BannerPoster.src}
            alt="Banner background"
            className={styles.bannerVideo}
            decoding="async"
            loading="lazy"
            fill
          />
        ) : (
          <video
            autoPlay
            muted
            loop
            preload="none"
            aria-label="Background video"
            className={styles.bannerVideo}
            playsInline
            poster={BannerPoster.src}
          >
            <source src="/videos/bannerVideo.mp4" type="video/mp4" />
          </video>
        )}

      </section>

    </>
  );
};

export default Banner;
