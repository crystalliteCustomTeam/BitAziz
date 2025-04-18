import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Axios from "axios";
import { Col, Row } from 'react-bootstrap'
import styles from "@/styles/video-explainer/Banner.module.css"
import { FaCheckCircle } from 'react-icons/fa'
// Images
import BannerLogos from "media/videoexplainer/bnr-logo.png"
import chatIcon from "media/videoexplainer/chat-icon.png"

const Banner = () => {
    const [ip, setIP] = useState('');
    const [pagenewurl, setPagenewurl] = useState('');
    const [score, setScore] = useState('Get a free quote');
    const [isDisabled, setIsDisabled] = useState(false);

    // Creating function to load IP address from the API

    const getIPData = async () => {
        try {
            const response = await fetch('https://ipinfo.io/?token=229b1c3fa2e54c');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setIP(data);
        } catch (error) {
            console.error('Error fetching IP data:', error);
        }
    };

    useEffect(() => {
        getIPData();
        setPagenewurl(window.location.href);
    }, []);

    const router = usePathname();
    const currentRoute = router;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsDisabled(true);

        const currentdate = new Date().toLocaleString();
        const data = {
            page_url: pagenewurl,
            user_ip: `${ip.ip}`,
            lead_data: {
                name: e.target.name.value,
                email: e.target.email.value,
                phone: e.target.phone.value,
                message: e.target.comment.value
            }
        }
        const JSONdata = JSON.stringify(data);
        setScore('Sending Data');

        // First API call to your server
        await fetch('https://brandsapi.pulse-force.com/api/v1/leads', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSONdata
        }).then((res) => {
            console.log(`Response received ${res}`);
            if (res.status === 200) {
                console.log(`Response Successed ${res}`);
            }
        });

        // Second API call to SheetDB
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Authorization": "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
            "Content-Type": "application/json"
        };
        let bodyContent = JSON.stringify({
            "IP": `${ip.ip} - ${ip.city} - ${ip.country}`,
            "Brand": "Bitswits",
            "Page": `${currentRoute}`,
            "Date": currentdate,
            "Time": currentdate,
            "JSON": JSONdata,
        });
        await fetch("https://sheetdb.io/api/v1/71sd48ae8vab6", {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });

        // Third API call to another endpoint
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify({
            "fields": [
                {
                    "objectTypeId": "0-1",
                    "name": "email",
                    "value": e.target.email.value
                },
                {
                    "objectTypeId": "0-1",
                    "name": "name",
                    "value": e.target.name.value
                },
                {
                    "objectTypeId": "0-1",
                    "name": "phone",
                    "value": e.target.phone.value
                },
                {
                    "objectTypeId": "0-1",
                    "name": "message",
                    "value": e.target.comment.value
                }
            ],
            "context": {
                "ipAddress": ip.IPv4,
                "pageUri": pagenewurl,
                "pageName": pagenewurl
            },
            "legalConsentOptions": {
                "consent": {
                    "consentToProcess": true,
                    "text": "I agree to allow Example Company to store and process my personal data.",
                    "communications": [
                        {
                            "value": true,
                            "subscriptionTypeId": 999,
                            "text": "I agree to receive marketing communications from Example Company."
                        }
                    ]
                }
            }
        });
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };
        await fetch("https://api.hsforms.com/submissions/v3/integration/submit/46084502/ea92327e-cdf7-4b04-9538-8d0c0e92cd9e", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));

        const { pathname } = router;
        if (pathname == pathname) {
            window.location.href = '/thank-you';
        }
    }

    return (
        <>
            <section className={`${styles.bannerSec} pt-250`}>
                <div className='container'>
                    <Row>
                        <Col lg={7}>
                            <h1>EXPAND YOUR BRAND’S REACH WITH AN ENGAGING CUSTOM EXPLAINER VIDEO</h1>
                            <p>
                                We are a leading video animation company in the USA that has helped <br className='d-xl-block d-none' />thousands of brands to broaden their product reach via fascinating<br className='d-xl-block d-none' /> explainer videos.
                            </p>
                            <ul>
                                <li className='d-flex align-items-center gap-x-2'>
                                    <FaCheckCircle className='text-white me-2' />
                                    <span> Full HD Animations</span>
                                </li>
                                <li className='d-flex align-items-center gap-x-2'>
                                    <FaCheckCircle className='text-white me-2' />
                                    <span>Appealing Designs</span>
                                </li>
                                <li className='d-flex align-items-center gap-x-2'>
                                    <FaCheckCircle className='text-white me-2' />
                                    <span>Latest Technology</span>
                                </li>
                                <li className='d-flex align-items-center gap-x-2'>
                                    <FaCheckCircle className='text-white me-2' />
                                    <span>Award-Winning Agency</span>
                                </li>
                            </ul>
                            <Image src={BannerLogos} alt='banner-logos' className='' />
                            <div className='d-flex align-items-center gap-4 pt-4'>
                                <Link href="tel:8335006007" className={styles.btn}>
                                    Get Started
                                </Link>
                                <Link href='javascript:window.replaceChat();' className='d-flex align align-items-center'>
                                    <Image src={chatIcon} alt='chat-icon' className='me-2' />
                                    <div>
                                        <span className={styles.spanOne}>Talk to our Expert</span>
                                        <span className={styles.spanTwo}>Live Chat</span>
                                    </div>
                                </Link>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <div className={styles.txt}>
                                    <h3>
                                        Share Your <br className='block' />
                                        <strong>
                                            Animation Idea
                                        </strong>
                                    </h3>
                                </div>
                                <div className={styles.formFeilds}>
                                    <div className="relative">
                                        <input type="text" name="name" placeholder='Enter your name' required />
                                    </div>
                                    <div className="relative">
                                        <input type="text" name="email" placeholder='Enter Email' required />
                                    </div>
                                    <div className="relative">
                                        <input type="text" name="phone" placeholder='Enter Phone Number' required />
                                    </div>
                                    <div className="relative">
                                        <textarea name='comment' type="text" placeholder='Message' required ></textarea>
                                    </div>
                                    <button className='bitsForm' disabled={isDisabled}>{score}</button>
                                </div>
                                <div className={`form_partical ${styles.discountbg}`}>
                                    <h6 className={`${styles.headingParticle}`}>Special Offer</h6>
                                    <h4 className={`text-black`}>50%</h4>
                                    <h5 className=''>Discount</h5>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Banner
