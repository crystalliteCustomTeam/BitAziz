"use client"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/app-marketing/companyinfo.module.scss"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import AutoScroll from 'embla-carousel-auto-scroll';
import embla1IMG01 from "media/app-marketing/customerInfo/embla1-icon/icon-1.webp"
import embla1IMG02 from "media/app-marketing/customerInfo/embla1-icon/icon-2.webp"
import embla1IMG03 from "media/app-marketing/customerInfo/embla1-icon/icon-3.webp"
import embla1IMG04 from "media/app-marketing/customerInfo/embla1-icon/icon-4.webp"
import embla1IMG05 from "media/app-marketing/customerInfo/embla1-icon/icon-5.webp"
import embla2IMG01 from "media/app-marketing/customerInfo/embla2-icon/icon-1.webp"
import Image from "next/image"
import { title } from "process"

const options = { align: 'start', loop: "true" }

export const Awards = [
    {
        AwardsIMG: embla1IMG01.src
    },
    {
        AwardsIMG: embla1IMG02.src
    },
    {
        AwardsIMG: embla1IMG03.src
    },
    {
        AwardsIMG: embla1IMG04.src
    },
    {
        AwardsIMG: embla1IMG05.src
    },
]


const Awards2 = [
    {
        logo: embla2IMG01.src,
        count: '12+',
        para: 'languages in house'
    },
    {
        logo: embla2IMG01.src,
        count: '12+',
        para: 'languages in house'
    },
    {
        logo: embla2IMG01.src,
        count: '12+',
        para: 'languages in house'
    },
    {
        logo: embla2IMG01.src,
        count: '12+',
        para: 'languages in house'
    },
    {
        logo: embla2IMG01.src,
        count: '12+',
        para: 'languages in house'
    },
]

const CompanyInfo = ({ data }) => {
    const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);
    const [emblaRefClients] = useEmblaCarousel(
        { loop: true },
        [
            AutoScroll({
                delay: 3000,
                speed: 2,
                playOnInit: true,
            })
        ]
    );
    return (
        <section className={`${styles.companyInfoSection} p-100`}>
            <Container className="h-100">
                <Row>
                    <Col lg={10} md={12} className="text-center m-auto ">
                        <h2>{data?.title}</h2>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <section className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {Awards.map((item, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={styles.awardsImg}>
                                                <Image src={item.AwardsIMG} alt="Achieved Logo" width={250} height={250} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className={styles.embla2}>
                            <div className={styles.embla2__viewport} ref={emblaRefClients}>
                                <div className={styles.embla2__container}>
                                    {Awards2.map((item, index) => (
                                        <div className={styles.embla2__slide} key={`client-${index}`}>
                                            <div className={styles.imgBox}>
                                                <Image src={item.logo} alt={`Client Logo ${index + 1}`} width={316} height={165} />
                                                <span className={styles.count}>{item.count}</span>
                                                <p>{item.para}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CompanyInfo