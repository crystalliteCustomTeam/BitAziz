"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';
import styles from "@/styles/services/casestudy.module.scss";
//========= Images
import store from "media/newmobileapp/store.png";
import arrow from "media/newmobileapp/arrow.png";
import PopUp from "@/src/app/services/popup";

//========= CaseStudy Images
import slider1 from "media/ai-agent/case/HealthCare.webp";
import slider2 from "media/ai-agent/case/Finance.webp";
import slider3 from "media/ai-agent/case/Ecommerce.webp";
import slider4 from "media/ai-agent/case/Logistic.webp";
import slider5 from "media/ai-agent/case/Enterprise.webp";

const data = {
    title: "Engineering Intelligent AI Solutions Across Industries",
    text: "We develop AI agents that solve real problems in your industry. Whether it’s automating customer interactions in e-commerce, streamlining patient workflows in healthcare, or optimizing logistics operations, our solutions are built to make work easier and results measurable. ",
}

const caseStudiesList = [
    {
        title: "Healthcare",
        description: "AI agents monitor patient vitals, provide virtual assistance, and automate administrative workflows. This approach reduced manual workload by 35% and improved patient response times by 40%, enhancing both care quality and operational efficiency.",
        sliderImages: [slider1],
    },
    {
        title: "Finance",
        description: "AI agents analyze real-time financial data to deliver personalized portfolio recommendations and assess risk. Faster investment decision-making and more accurate risk predictions improve client satisfaction and operational precision.",
        sliderImages: [slider2],
    },
    {
        title: "Retail & E-Commerce",
        description: "AI agents manage customer inquiries, optimize inventory, and generate actionable sales insights. Implementation resulted in a 25% increase in customer satisfaction and a 20% improvement in sales efficiency.",
        sliderImages: [slider3],
    },
    {
        title: "Logistics & Supply Chain",
        description: "AI agents optimize delivery routes, forecast demand, and provide real-time shipment tracking. This led to a 30% reduction in delivery delays and greater visibility across the supply chain.",
        sliderImages: [slider4],
    },
    {
        title: "Enterprise Operations",
        description: "AI agents automate repetitive tasks, streamline workflows, and provide decision-support insights. The result is increased productivity across departments and faster, more informed business decisions.",
        sliderImages: [slider5],
    }
];



const CaseStudySection = () => {

    const [activeTab, setActiveTab] = useState(0);
    // Chat Code
    const [modalShow, setModalShow] = useState(false);

    const handleTabChange = (index) => {
        setActiveTab(index);
    };
    const handleBtnLeftClick = () => {
        setActiveTab((prevTab) => (prevTab > 0 ? prevTab - 1 : caseStudiesList.length - 1));
    };
    const handleBtnRightClick = () => {
        setActiveTab((prevTab) => (prevTab < caseStudiesList.length - 1 ? prevTab + 1 : 0));
    };
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTab((prevTab) => (prevTab < caseStudiesList.length - 1 ? prevTab + 1 : 0));
        }, 5000);
        return () => clearInterval(interval);
    }, [caseStudiesList.length]);
    // Chat Code
    const handleChatOpen = () => {
        setModalShow(true);
    };
    return (
        <>
            <section className={styles.appStyles} id="Casestudies">
                <div className="container">
                    <Row>
                        <Col lg={8} md={12} className='text-center m-auto'>
                            <h2>{data?.title}</h2>
                            <p>{data?.text}</p>
                        </Col>
                    </Row>
                    <div className="tabs">
                        <Row className={styles.tabList}>
                            {caseStudiesList.map((study, index) => (
                                <Col
                                    key={index}
                                    sm={4}
                                    lg={2}
                                    className={`${styles.lists} ${activeTab === index ? styles.active : ''}`}
                                    onClick={() => handleTabChange(index)}
                                >
                                    {study.title}
                                </Col>
                            ))}
                        </Row>
                    </div>
                    <div className="tabsContent">
                        {caseStudiesList[activeTab] && (
                            <Row className={styles.caseRow}>
                                <Col md={6} className='p-0'>
                                    <div className={styles.featured}>
                                        <div className={styles.contentBox}>
                                            <div className={styles.arrows}>
                                                <button className={styles.btnLeft} onClick={handleBtnLeftClick}>
                                                    <Image src={arrow} alt='Arrow Left' className='img-fluid' />
                                                </button>
                                                <button className={styles.btnRight} onClick={handleBtnRightClick}>
                                                    <Image src={arrow} alt='Arrow Right' className='img-fluid' />
                                                </button>
                                            </div>
                                            <h3>{caseStudiesList[activeTab].title}</h3>
                                            <p>{caseStudiesList[activeTab].description}</p>
                                            <div className={styles.blackBtn}>
                                                <Image src={store} alt='Store' className='img-fluid' />
                                                <div className={styles.linksBtn} onClick={() => handleChatOpen()}>
                                                    Let’s Talk
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.bottomBox}>
                                            <div className={styles.tabsNumber}>
                                                <span className="text-white">{String(activeTab + 1).padStart(2, '0')}</span>
                                                <span className='text-white'>/</span>
                                                <span>{String(caseStudiesList.length).padStart(2, '0')}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6} className='p-0'>
                                    <div className={styles.caseImg}>
                                        <div className={styles.arrows}>
                                            <button className={styles.btnLeft} onClick={handleBtnLeftClick}>
                                                <Image src={arrow} alt='Arrow Left' className='img-fluid' />
                                            </button>
                                            <button className={styles.btnRight} onClick={handleBtnRightClick}>
                                                <Image src={arrow} alt='Arrow Right' className='img-fluid' />
                                            </button>
                                        </div>
                                        {caseStudiesList[activeTab].sliderImages.map((img, idx) => (
                                            <Image
                                                key={idx}
                                                src={img}
                                                alt={`Slider Image ${idx + 1}`}
                                                fill={true}
                                                className='img-fluid'
                                            />
                                        ))}
                                    </div>
                                </Col>
                            </Row>
                        )}
                    </div>
                </div>
            </section>
            <PopUp show={modalShow} onHide={() => setModalShow(false)} />
        </>
    );
};
export default CaseStudySection;