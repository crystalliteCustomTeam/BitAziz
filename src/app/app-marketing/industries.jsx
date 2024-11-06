"use client"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/app-marketing/industries.module.scss"
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll';
import Image from "next/image"

const data = {
    subTitle: "Industries",
    title: "Delivering Impact Across Key Sectors",
    text: "We work across diverse industries, building solutions that increase user engagement, improve performance, and drive growth. Our approach aligns with the specific needs and challenges unique to each sector we serve."
};

const Industries = ({ slides }) => {
    const [emblaRef] = useEmblaCarousel(
        { loop: true, draggable: true },
        [
            AutoScroll({
                delay: 0,
                speed: 2,
                playOnInit: true,
                stopOnMouseEnter: false,
                stopOnInteraction: false,
                restartDelay: 0,
            })
        ]
    );

    return (
        <section className={`${styles.industriesSection} p-100`} id="process">
            <Container>
                <Row>
                    <Col lg={8} md={12} className="text-center m-auto ">
                        <div className={`${styles.subTitle} ${styles.txtColorCenter}`}>{data?.subTitle}</div>
                        <h2>{data?.title}</h2>
                        <p>{data?.text}</p>
                    </Col>
                </Row>
            </Container>
            <div className={styles.embla}>
                <div className={styles.embla__viewport} ref={emblaRef}>
                    <div className={styles.embla__container}>
                        {slides.map((item, index) => (
                            <div className={`${styles.embla__slide}`} key={index}>
                                <div className={styles.industriesBox}>
                                    <h3>
                                        {item.title}
                                    </h3>
                                    <Image src={item.Img} alt={item.title} fill />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Industries
