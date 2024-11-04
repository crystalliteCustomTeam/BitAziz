"use client"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/app-marketing/industries.module.scss"
import useEmblaCarousel from 'embla-carousel-react'
import Link from "next/link"
import Image from "next/image"
// import { ArrowBtn } from "@/src/app/app-constants"

const data = {
    subTitle: "Our Portfolio",
    title: "A Showcase of Our Work and Achievements",
    text: "Lorem ipsum dolor sit amet consectetur Risus interdum sed turpis nunc nulla neque blandit Risus interdum sed turpis nuncRisus interdum sed turpis nuncsed turpis nunc nulla sed turpis nuncsed turpis nunc nulla."
};

const Industries = ({ slides, options }) => {
    const [emblaRef] = useEmblaCarousel(options);

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
                                    <p>{item.txt}</p>
                                    {/* <Link href={item.url}><ArrowBtn /></Link> */}
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
