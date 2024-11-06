"use client"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/app-marketing/companyinfo.module.scss"
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll';
import embla1IMG01 from "media/app-marketing/logos/1.webp"
import embla1IMG02 from "media/app-marketing/logos/2.webp"
import embla1IMG03 from "media/app-marketing/logos/3.webp"
import embla1IMG04 from "media/app-marketing/logos/4.webp"
import embla1IMG05 from "media/app-marketing/logos/5.webp"
import Image from "next/image"
import { AppMarktingIcon04, AppMarktingIcon03, AppMarktingIcon02, AppMarktingIcon01 } from "@/src/app/app-constants";


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
    }, {
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
    }
]


const Awards2 = [
    {
        logo: <AppMarktingIcon01 />,
        count: '15+',
        para: 'Markets Reached with Our Campaigns'
    },
    {
        logo: <AppMarktingIcon02 />,
        count: '$50M',
        para: 'Client Ad Spend Managed'
    },
    {
        logo: <AppMarktingIcon03 />,
        count: '35%',
        para: 'Increase in App Installs Through Our Strategies'
    },
    {
        logo: <AppMarktingIcon04 />,
        count: '40%',
        para: 'Boost in User Engagement Across Platforms'
    },
    {
        logo: <AppMarktingIcon01 />,
        count: '15+',
        para: 'Markets Reached with Our Campaigns'
    },
    {
        logo: <AppMarktingIcon02 />,
        count: '$50M',
        para: 'Client Ad Spend Managed'
    },
    {
        logo: <AppMarktingIcon03 />,
        count: '35%',
        para: 'Increase in App Installs Through Our Strategies'
    },
    {
        logo: <AppMarktingIcon04 />,
        count: '40%',
        para: 'Boost in User Engagement Across Platforms'
    },
]

const CompanyInfo = ({ data }) => {
    const [emblaRefFramework] = useEmblaCarousel(
        { loop: true, direction: 'rtl' },
        [AutoScroll({
            delay: 0,
            speed: 2,
            playOnInit: true,
            stopOnMouseEnter: false,
            stopOnInteraction: false,
            restartDelay: 0,
        })
        ]
    );

    const [emblaRefClients] = useEmblaCarousel(
        { loop: true },
        [AutoScroll({
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
        <section className={`${styles.companyInfoSection} p-100`}>
            <Container className="h-100">
                <Row>
                    <Col lg={10} md={12} className="text-center m-auto ">
                        <h2>{data?.title}</h2>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <div className={styles.embla} dir="rtl">
                            <div className={styles.embla__viewport} ref={emblaRefFramework}>
                                <div className={styles.embla__container}>
                                    {Awards.map((item, index) => (
                                        <div className={styles.embla__slide} key={`framework-${index}`}>
                                            <div className={styles.imgBox}>
                                                <Image src={item.AwardsIMG} alt="Achieved Logo" width={945} height={495} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
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
                                                <div className={styles.imgBG}>
                                                    {item.logo}
                                                </div>
                                                <div className={styles.count}>{item.count}</div>
                                                <div className={styles.para}>{item.para}</div>
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