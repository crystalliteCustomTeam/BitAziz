"use client";
import { useEffect, useState } from "react";
import { StarIcon } from "@/src/app/app-constants";
import styles from "@/styles/components/ai/banner.module.scss";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Head from "next/head";
// import Image from "next/image";
// import BannerPoster from "media/videos/AiServicesImg.webp";

import { ClientImages } from '@/src/app/ai-agent-development-company/data/data';
import Clients from '@/src/components/ai/clients'

const Banner = () => {
    const [showVideo, setShowVideo] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowVideo(true); // load video after 1.5s
        }, 1500);
        return () => clearTimeout(timeout);
    }, []);
    return (
        <>
            <Head>
                <link
                    rel="preload"
                    href="/videos/AiServicesVideo.mp4"
                    as="video"
                    type="video/mp4"
                />
            </Head>

            <section className={styles.bannerSection}>
                <Container className="h-100">
                    <Row className="h-100">
                        <Col md={9} lg={7} xl={6} className="my-auto">
                            <div className={styles.bannerTxt}>
                                <div className={styles.rating}>
                                    {[...Array(5)].map((_, i) => (
                                        <StarIcon key={i} />
                                    ))}
                                    4.9/5 Rating
                                </div>
                                <h1>AI Agent Development Company</h1>
                                <p>We design and deploy next-gen AI agents that automate complex tasks, custom-built to fit your business goals. From autonomous workflows to smart integrations, our AI agent development services help you increase productivity at scale.</p>
                                <ul>
                                    <li>Custom AI Solutions</li>
                                    <li>Multi-Agent Architectures</li>
                                    <li>LLM-Powered Task Automation</li>
                                </ul>
                                <p>Let’s build your first AI agent today.</p>
                                <button className={styles.bannerBtn}>
                                    <Link href="#">Book a Free Consultation</Link>
                                </button>
                                <div className={styles.bannerCounter}>
                                    <div className={styles.counterItem}>
                                        10+ <div className={styles.value}>Years of Experience</div>
                                    </div>
                                    <div className={styles.counterItem}>
                                        1,200+ <div className={styles.value}>Successful Projects</div>
                                    </div>
                                    <div className={styles.counterItem}>
                                        100+<div className={styles.value}>Global Clients</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} className="my-auto">
                            {/* {!showVideo ? (
                                <Image
                                    src={BannerPoster.src}
                                    alt="Banner background"
                                    className={styles.bannerImg}
                                    decoding="async"
                                    loading="lazy"
                                    width={900}
                                    height={620}
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
                                    <source src="/videos/AiServicesVideo.mp4" type="video/mp4" />
                                </video>
                            )} */}
                        </Col>
                    </Row>
                </Container>
            </section>
            <Clients data={ClientImages} ai={true} />
        </>
    )
}

export default Banner