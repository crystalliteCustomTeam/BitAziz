"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"
import { Modal, Form } from "react-bootstrap";
import BGIMG from "media/home/popupImg.webp";
import styles from "@/styles/home/popup.module.scss";
import { ArrowIcon, CheckListIcon, ClosedBtn, WhiteLogo } from "@/src/app/app-constants";

const Popup = ({ txt }) => {
    const [modalShow, setModalShow] = useState(false);
    const handleHide = () => setModalShow(false);
    const [currentValue, setCurrentValue] = useState(10000);

    const min = 2000;
    const max = 150000;

    const percentage = ((currentValue - min) / (max - min)) * 100;
    const filled = `linear-gradient(
  to right, 
  #f32f56 0%, 
  #f32faf ${percentage / 2}%, 
  #4a78ef ${percentage}%,
  #fff ${percentage}%, 
  #fff 100%
)`;

    useEffect(() => {
        const timer = setTimeout(() => setModalShow(true), 15000); // 20s
        return () => clearTimeout(timer);
    }, []);

    // From


    const [ip, setIP] = useState("")
    const [pagenewurl, setPagenewurl] = useState("")
    const [isDisabled, setIsDisabled] = useState(false)
    const [formStatus, setFormStatus] = useState("Submit")
    const [error, setError] = useState("")

    // Load IP address from the API
    const getIPData = async () => {
        try {
            const response = await fetch("https://ipinfo.io/?token=229b1c3fa2e54c")
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
            const data = await response.json()
            setIP(data)
        } catch (error) {
            console.error("Error fetching IP data:", error)
        }
    }

    useEffect(() => {
        getIPData()
        setPagenewurl(window.location.href)
    }, [])


    const router = usePathname()
    const currentRoute = router

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        setFormStatus("Processing...")
        setIsDisabled(true)
        if (!ip || !ip.ip) {
            setError("IP data is not available. Please try again later.")
            setFormStatus("Submit")
            setIsDisabled(false)
            return
        }
        // Validate fields
        const name = e.target.name.value.trim()
        const email = e.target.email.value.trim()
        const phone = e.target.phone.value.trim()
        const message = e.target.comment.value.trim()
        const price = e.target.price.value.trim()

        if (!name || !email || !phone) {
            setError("Please fill in all required fields.")
            setFormStatus("Submit")
            setIsDisabled(false)
            return
        }

        const currentdate = new Date().toLocaleString()
        const data = {
            page_url: pagenewurl,
            user_ip: `${ip.ip}`,
            lead_data: {
                name,
                email,
                phone,
                message,
                price,
            },
        }

        const JSONdata = JSON.stringify(data)

        try {
            // First API call to your server
            const res = await fetch(
                "https://brandsapi.pulse-force.com/api/v1/leads",
                {
                    method: "POST",
                    headers: {
                        Accept: "application/json, text/plain, */*",
                        "Content-Type": "application/json",
                    },
                    body: JSONdata,
                }
            )

            if (res.status !== 200) {
                throw new Error(`Failed to submit lead: ${res.status}`)
            }

            // Second API call to SheetDB
            let headersList = {
                Accept: "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                Authorization: "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
                "Content-Type": "application/json",
            }
            let bodyContent = JSON.stringify({
                IP: `${ip.ip} - ${ip.city} - ${ip.country}`,
                Brand: "BitsWits",
                Page: `${currentRoute}`,
                Date: currentdate,
                Time: currentdate,
                JSON: JSONdata,
            })

            await fetch("https://sheetdb.io/api/v1/71sd48ae8vab6", {
                method: "POST",
                body: bodyContent,
                headers: headersList,
            })

            // Third API call to another endpoint
            const myHeaders = new Headers()
            myHeaders.append("Content-Type", "application/json")
            const raw = JSON.stringify({
                fields: [
                    { objectTypeId: "0-1", name: "email", value: email },
                    { objectTypeId: "0-1", name: "name", value: name },
                    { objectTypeId: "0-1", name: "phone", value: phone },
                    { objectTypeId: "0-1", name: "message", value: message },
                    { objectTypeId: "0-1", name: "price", value: price },
                ],
                context: {
                    ipAddress: ip.IPv4,
                    pageUri: pagenewurl,
                    pageName: pagenewurl,
                },
                legalConsentOptions: {
                    consent: {
                        consentToProcess: true,
                        text: "I agree to allow Example Company to store and process my personal data.",
                        communications: [
                            {
                                value: true,
                                subscriptionTypeId: 999,
                                text: "I agree to receive marketing communications from Example Company.",
                            },
                        ],
                    },
                },
            })

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow",
            }

            await fetch(
                "https://api.hsforms.com/submissions/v3/integration/submit/46084502/ea92327e-cdf7-4b04-9538-8d0c0e92cd9e",
                requestOptions
            )
            window.location.href = "/thank-you"
        } catch (error) {
            console.error("Error during form submission:", error)
            setFormStatus("Failed...")
            setIsDisabled(false)
        }
    }


    return (
        <>

            <Modal
                show={modalShow}
                onHide={handleHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="rangeSlider"
            >
                <section className={styles.popupSection}>
                    <div className={styles.closedBtn} onClick={handleHide}>
                        <ClosedBtn />
                    </div>
                    <div className={styles.bgIMG} style={{ backgroundImage: `url(${BGIMG.src})` }}>
                        <div className={styles.fromTxt}>
                            <div className={styles.logoSec}>
                                <WhiteLogo />
                                <h3>Hold on a moment!</h3>
                                <p>Book Your Free strategy session to find out
                                    why 500+ successful brands trust us for.</p>
                            </div>
                            <div className={styles.contentSec}>
                                <ul>
                                    <li><CheckListIcon />End-to-End Development</li>
                                    <li><CheckListIcon />Budget Estimation & Cost Breakdown</li>
                                    <li><CheckListIcon />Faster Go-To-Market Strategies</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.fromPopup}>
                        <Form className={styles.MainFrom} onSubmit={handleSubmit}>
                            <div className={styles.inputBox}>
                                <input type="text" placeholder="Full Name" name="name" required />
                            </div>
                            <div className={styles.inputBox}>
                                <input type="email" placeholder="Email Address" name="email" required />
                            </div>
                            <div className={styles.inputBox}>
                                <input type="tel" placeholder="Contact Number" name="phone" required />
                            </div>
                            <div className={styles.inputRange}>
                                <label>Set Budget</label>
                                <div className={styles.priceRange}>
                                    <input
                                        type="range"
                                        min={min}
                                        max={max}
                                        value={currentValue}
                                        onChange={(e) => setCurrentValue(Number(e.target.value))}
                                        style={{ background: filled }}
                                        required
                                        step="500"
                                        name="price"
                                    />
                                    <div className={styles.progressItem}>
                                        <div>$2,000</div>
                                        <div>${currentValue.toLocaleString()}</div>
                                        <div>$150,000</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.inputText}>
                                <textarea name="comment" placeholder="Description" ></textarea>
                            </div>
                            <div className={styles.inputSubmit}>
                                <button type="submit" disabled={isDisabled}>
                                    {formStatus}
                                    <ArrowIcon />
                                </button>
                            </div>
                        </Form>
                    </div>
                </section>
            </Modal>

        </>
    );
};

export default Popup;
