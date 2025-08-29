"use client"
import { Col, Container, Row } from 'react-bootstrap'
import useEmblaCarousel from 'embla-carousel-react'
import styles from "@/styles/services/location.module.scss"
import Link from 'next/link'
import { ArrowIcon, EmailIcon, PhoneIcon } from '@/src/app/app-constants'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

// Location Images
import Dubai from "media/locations/Dubai.webp"
import Chicago from "media/locations/Chicago.webp"
import Houston from "media/locations/Houston.webp"
import LosAngeles from "media/locations/LosAngeles.webp"
import Miami from "media/locations/Miami.webp"
import NewYork from "media/locations/NewYork.webp"
import SanFrancisco from "media/locations/SanFrancisco.webp"
import Toronto from "media/locations/Toronto.webp"
import Dallas from "media/locations/Dallas.webp"
import Qatar from "media/locations/Qatar.webp"
import Bahrain from "media/locations/Bahrain.webp"
import Pierre from "media/locations/Pierre.webp"
import Sharjah from "media/locations/Sharjah.webp"
import Karachi from "media/locations/karachi.webp"
import Denver from "media/locations/Denver.webp"
import Austin from "media/locations/Austin.webp"
import Washington from "media/locations/WashingtonDC.webp"


const OPTIONS = { align: 'start', loop: "true" }

const LocationList = [
    {
        state: "Houston",
        add: "2800 Post Oak Blvd STE 4100, Houston, TX 77056, United States",
        phone: "+1 833 500 6007",
        email: "info@bitswits.co",
        img: Houston.src,
        pin: "https://maps.app.goo.gl/onTtH6csSWJu2gAb7",
        alt: "BitsWits mobile app development company Houston"
    },
    {
        state: "Chicago",
        add: "141 W Jackson Blvd STE 300 A, Chicago, IL 60604, United States",
        phone: "+1 833 500 6007",
        email: "info@bitswits.co",
        img: Chicago.src,
        pin: "https://maps.app.goo.gl/VH6Dkp1J2wtNvLBC6",
        alt: "BitsWits mobile app development company Chicago"
    },
    {
        state: "Dubai",
        add: "Office 1402, JBC 3 Cluster Y, Jumeirah Lake Towers Dubai UAE",
        phone: "+1 833 500 6007",
        email: "info@bitswits.co",
        img: Dubai.src,
        pin: "https://maps.app.goo.gl/NzJaVuqgdpLYyaT28",
        alt: "BitsWits mobile app development company Dubai"
    },
    // {
    //     state: "Karachi",
    //     add: "12 Floor، Caeser's tower, Shahrah-e-Faisal Rd, Karachi , Pakistan",
    //     phone: "+1 833 500 6007",
    //     email: "info@bitswits.co",
    //     img: Karachi.src,
    //     pin: "https://maps.app.goo.gl/NzJaVuqgdpLYyaT28",
    //     alt: "BitsWits mobile app development company Karachi"
    // },
    {
        state: "Los Angeles",
        add: "1425 Flower St, Los Angeles, CA 90015, United States",
        phone: "+1 833 500 6007",
        email: "info@bitswits.co",
        img: LosAngeles.src,
        pin: "https://maps.app.goo.gl/ot7knKM1rXFFjpKMA",
        alt: "BitsWits mobile app development company Los Angeles"
    },
    {
        state: "Miami",
        add: "601 Brickell Key Dr #700, Miami, FL 33131, United States",
        phone: "+1 833 500 6007",
        email: "info@bitswits.co",
        img: Miami.src,
        pin: "https://maps.app.goo.gl/sZDSxoSewEBHY1z27",
        alt: "BitsWits mobile app development company Miami"
    },
    {
        state: "New York",
        add: "26 Broadway Suite 934, New York, NY 10004, United States",
        phone: "+1 833 500 6007",
        email: "info@bitswits.co",
        img: NewYork.src,
        pin: "https://maps.app.goo.gl/CPdXRcRzGxGRAuNU8",
        alt: "BitsWits mobile app development company New York"
    },
    {
        state: "San Francisco",
        add: "488 Folsom St, San Francisco, CA 94105, United States",
        phone: "+1 833 500 6007",
        email: "info@bitswits.co",
        img: SanFrancisco.src,
        pin: "https://maps.app.goo.gl/SzwvHzAKoLgiwWPm7",
        alt: "BitsWits mobile app development company San Francisco"
    },
    {
        state: "Toronto",
        add: "512 Wellington St W, Toronto, ON M5V 1E3, Canada",
        phone: "+1 833 500 6007",
        email: "info@bitswits.co",
        img: Toronto.src,
        pin: "https://maps.app.goo.gl/dhULjcCFCiZ9fNyQ7",
        alt: "BitsWits mobile app development company Toronto"
    },
    {
        state: "Dallas",
        add: "1341 W Mockingbird Ln, Dallas, TX 75247, United States",
        phone: "+1 833 500 6007",
        email: "info@bitswits.co",
        img: Dallas.src,
        pin: "https://maps.app.goo.gl/i76RsaokYHwn47vU9",
        alt: "BitsWits mobile app development company Dallas"
    },
    {
        state: "Washington",
        add: "1826 Park Rd NW, Washington, DC 20010, United States",
        phone: "+1 833 500 6007",
        email: "info@bitswits.co",
        img: Washington.src,
        pin: "https://g.page/r/CYImmDo1OETvEBM",
        alt: "BitsWits mobile app development company Washington DC"
    },
    {
        state: "Qatar",
        add: "51 Al Miqdad St, Doha, Qatar",
        phone: "+1 833 500 6007",
        email: "info@bitswits.co",
        img: Qatar.src,
        pin: "https://maps.app.goo.gl/qimC1ofuhhu3z512A",
        alt: "BitsWits mobile app development company Qatar"
    },
    {
        state: "Bahrain",
        add: "2139 Hoora Ave, Manama 973, Bahrain",
        phone: "+1 833 500 6007",
        email: "info@bitswits.co",
        img: Bahrain.src,
        pin: "https://maps.app.goo.gl/N52TCmfz7GQbH35m8",
        alt: "BitsWits mobile app development company Bahrain"
    },
    {
        state: "Pierre",
        add: "124 W Dakota Ave, Pierre, SD 57501, United States",
        phone: "+1 833 500 6007",
        email: "info@bitswits.co",
        img: Pierre.src,
        pin: "https://maps.app.goo.gl/YEEuBJKd9GvXuMk18",
        alt: "BitsWits mobile app development company Pierre"
    },
    {
        state: "Sharjah",
        add: "office #101 32 St Al Majarra Mughaidir Suburb Sharjah UAE",
        phone: "+1 833 500 6007",
        email: "info@bitswits.co",
        img: Sharjah.src,
        pin: "https://maps.app.goo.gl/nbce4oEJoivkzVnt5",
        alt: "BitsWits mobile app development company Sharjah"
    },
    {
        state: "Denver",
        add: "1035 Cherokee St, Denver, CO 80204, United States",
        phone: "+1 833 500 6007",
        email: "info@bitswits.co",
        img: Denver.src,
        pin: "https://maps.app.goo.gl/sYmX44iWw2fmkVD1A",
        alt: "BitsWits mobile app development company Denver GMB"
    },
    {
        state: "Austin",
        add: "500 W 2nd St Suite 133, Austin, TX 78701, United States",
        phone: "+1 833 500 6007",
        email: "info@bitswits.co",
        img: Austin.src,
        pin: "https://maps.app.goo.gl/WPQzX6HGBgE6h4mZA",
        alt: "BitsWits mobile app development company Denver GMB"
    },
]

const Location = () => {
    const [emblaRef, embla] = useEmblaCarousel(OPTIONS, [Autoplay()]);
    const prevButtonHandler = () => {
        if (embla) embla.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (embla) embla.scrollNext();
    };
    return (
        <section className={`${styles.locationSection} bgBlack pt-100`}>
            <Container>
                <Row>
                    <Col lg={12} md={12}>
                        <h2>Our Global Presence</h2>
                        <section className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {LocationList.map((item, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={styles.locationBox}>
                                                <div className={styles.imgBox}>
                                                    <Image src={item.img} alt={item.alt} fill />
                                                    <div className={styles.locationTitle}>
                                                        {item.state}
                                                    </div>
                                                </div>

                                                <div className={styles.locationContent}>
                                                    <div className={styles.locState}>{item.state}</div>
                                                    <div className={styles.locAdd}>
                                                        <a href={item.pin} target='_blank'>{item.add}</a>
                                                    </div>
                                                    <ul>
                                                        <li>
                                                            <Link href={`tel:${item.phone}`}>
                                                                <PhoneIcon />
                                                                {item.phone}
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href={`mailto:${item.email}`}>
                                                                <EmailIcon />
                                                                {item.email}
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.embla_container}>
                                <div className={styles.embla_prev} onClick={prevButtonHandler}>
                                    <ArrowIcon direction="prev" />
                                </div>
                                <div className={styles.embla_next} onClick={nextButtonHandler}>
                                    <ArrowIcon direction="next" />
                                </div>
                            </div>
                        </section>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Location