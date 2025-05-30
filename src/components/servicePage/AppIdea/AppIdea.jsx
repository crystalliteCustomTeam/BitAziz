"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/servicepage/AppIdea.module.css"
import Axios from "axios";
// Images
import AppIdeaMobile from "media/services/app-idea.svg"
import { usePathname } from 'next/navigation'

const AppIdea = () => {
    const [ip, setIP] = useState('');
    const [pagenewurl, setPagenewurl] = useState('');
    const [score, setScore] = useState('Get Free Consultation');
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
        <section className={styles.appIdeaSec}>
            <Container>
                <div className={styles.gredientBg}>
                    <Row className='align-items-center'>
                        <Col lg={5}>
                            <div className={styles.image}>
                                <Image src={AppIdeaMobile} alt='Bitswits' className='img-fluid d-lg-block d-none' />
                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className={styles.secform}>
                                <h2 className='font-bold text-white manrope mb-3'>Quit Procrastinating and Build Your Dream Game Now!</h2>
                                <p className='font16 text-white font-medium manrope mb-md-4 pb-3'>Book your free consultation to learn how we create stunning games that enhance engagement and increase your revenue!</p>
                                <form onSubmit={handleSubmit}>
                                    <Row className=''>
                                        <Col lg={6}>
                                            <div className="name">
                                                <input type="text" placeholder='Name*' name='name' required className='manrope' />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="name">
                                                <input type="email" placeholder='Email*' name='email' required className='manrope' />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="phone">
                                                <input type="number" name='phone' required placeholder='Phone*' className='manrope' />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="requirement">
                                                <input type="text" name='comment' placeholder='App Requirements' className='manrope' />
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <button type='submit' className='manrope bitsForm' disabled={isDisabled}>
                                                {score}
                                            </button>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default AppIdea
