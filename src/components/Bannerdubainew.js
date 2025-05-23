import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Container, Row, Col, Modal } from "react-bootstrap";
import styles from "@/styles/bannerdubainew.module.css";
import Bitswitspopup from "../components/Bitswitspopup";
import { RxCross2 } from "react-icons/rx";
// images
import badgeClient from "media/newdubai/badgesClient.webp";
import Star from "media/newDubaiPagev1/star.webp";
import Clutch from "media/newDubaiPagev1/clutch.webp";
import Popup from "@/src/app/home/components/popup";
const Bannerdubai = ({ content }) => {
  const [showBg, setShowBg] = useState(false);

  const { title, desc, alt, bg = " " } = content;
  const [ip, setIP] = useState("");
  const [pagenewurl, setPagenewurl] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [score, setScore] = useState("Submit");
  const [checkboxes, setCheckboxes] = useState([]);

  // Creating function to load IP address from the API

  const getIPData = async () => {
    try {
      const response = await fetch("https://ipinfo.io/?token=229b1c3fa2e54c");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setIP(data);
    } catch (error) {
      console.error("Error fetching IP data:", error);
    }
  };

  useEffect(() => {
    getIPData();
    setPagenewurl(window.location.href);
  }, []);

  const handleOptionChange3 = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCheckboxes([...checkboxes, value]);
    } else {
      setCheckboxes(checkboxes.filter((checkbox) => checkbox !== value));
    }
  };

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
        message: e.target.comment.value,
        price: e.target.price.value,
        checkboxesdata: checkboxes.join(),
      },
    };
    const JSONdata = JSON.stringify(data);
    setScore("Sending Data");

    // First API call to your server
    await fetch("https://brandsapi.pulse-force.com/api/v1/leads", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSONdata,
    }).then((res) => {
      console.log(`Response received ${res}`);
      if (res.status === 200) {
        console.log(`Response Successed ${res}`);
      }
    });

    // Second API call to SheetDB
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      Authorization: "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
      "Content-Type": "application/json",
    };
    let bodyContent = JSON.stringify({
      IP: `${ip.ip} - ${ip.city} - ${ip.country}`,
      Brand: "Bitswits",
      Page: `${currentRoute}`,
      Date: currentdate,
      Time: currentdate,
      JSON: JSONdata,
    });
    await fetch("https://sheetdb.io/api/v1/71sd48ae8vab6", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    // Third API call to another endpoint
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
      fields: [
        {
          objectTypeId: "0-1",
          name: "email",
          value: e.target.email.value,
        },
        {
          objectTypeId: "0-1",
          name: "name",
          value: e.target.name.value,
        },
        {
          objectTypeId: "0-1",
          name: "phone",
          value: e.target.phone.value,
        },
        {
          objectTypeId: "0-1",
          name: "message",
          value: e.target.comment.value,
        },
        {
          objectTypeId: "0-1",
          name: "price",
          value: e.target.price.value,
        },
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
    });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    await fetch(
      "https://api.hsforms.com/submissions/v3/integration/submit/46084502/ea92327e-cdf7-4b04-9538-8d0c0e92cd9e",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));

    const { pathname } = router;
    if (pathname == pathname) {
      window.location.href = "/thank-you";
    }
  };

  // Modal
  const [show, setShow] = useState(false);
  function modal(e) {
    e.preventDefault();
    setShow(true);
  }

  function closemodal() {
    setShow(false);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBg(true);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // cleanup
  }, []);
  return (
    <>
      <Popup />
      <section className={`${styles.DubaiBanner} bg-black pt-140 pb-3`}>
        {/* <Image src={bg} fill priority={true} sizes='100vw' className='d-md-block d-none' style={{ zIndex: -1 }} alt={alt} /> */}
        {showBg && (
          <Image
            src={bg}
            fill
            priority={true}
            sizes="100vw"
            className="d-md-block d-none"
            style={{ zIndex: -1 }}
            alt={alt}
          />
        )}
        <Container className={` ${styles.conform}`}>
          <Row
            className={`g-5 ${styles.applost} align-items-center w-100 mx-auto`}
          >
            <Col xl={7} className="px-0">
              <div className={styles.oppp}>
                <h1 className="white fw500 mb-4">{title}</h1>
                <p className="font16 white fw300 mt-3 mb-lg-4 fontsfregular">
                  {desc}
                </p>
                <button onClick={modal} className={`${styles.deliver} pink`}>
                  Let’s Build Your Dream App!
                </button>
              </div>
              <div className={styles.badge}>
                <div
                  className={`d-flex align-items-center ${styles.clientRviews}`}
                >
                  <div>
                    <Image
                      priority={true}
                      sizes="100vw"
                      src={badgeClient}
                      alt="Bitswits"
                      width={183}
                      height={80}
                    />
                  </div>
                  <div>
                    <div className={styles.reviews}>
                      <Image
                        priority={true}
                        sizes="100vw"
                        src={Star}
                        alt="Bitswits"
                        width={25}
                        height={22}
                      />
                      <Image
                        priority={true}
                        sizes="100vw"
                        src={Star}
                        alt="Bitswits"
                        width={25}
                        height={22}
                      />
                      <Image
                        priority={true}
                        sizes="100vw"
                        src={Star}
                        alt="Bitswits"
                        width={25}
                        height={22}
                      />
                      <Image
                        priority={true}
                        sizes="100vw"
                        src={Star}
                        alt="Bitswits"
                        width={25}
                        height={22}
                      />
                      <Image
                        priority={true}
                        sizes="100vw"
                        src={Star}
                        alt="Bitswits"
                        width={25}
                        height={22}
                      />
                    </div>
                    <p className="mb-0">
                      <strong>4.8 out of 5</strong> (review rating) Over 1,200+
                      reviews
                    </p>
                  </div>
                </div>
                <div>
                  <Image
                    priority={true}
                    sizes="100vw"
                    src={Clutch}
                    alt="Clutch Badge"
                    width={129}
                    height={60}
                  />
                </div>
              </div>
            </Col>
            <Col xl={5} className="px-0">
              <form className={styles.your} onSubmit={handleSubmit}>
                <h3 className="mb-4 white fw500">Book a Free Consultation</h3>
                <input
                  type="text"
                  minLength="4"
                  name="name"
                  required
                  className="form-control"
                  placeholder="Full Name"
                ></input>
                <input
                  type="tel"
                  minLength="10"
                  maxLength="13"
                  pattern="[0-9]*"
                  name="phone"
                  required
                  className="form-control mt-3"
                  placeholder="Phone Number"
                ></input>
                <input
                  type="email"
                  name="email"
                  required
                  className="form-control mt-3"
                  placeholder="Email Address"
                ></input>
                <input
                  type="number"
                  name="price"
                  required
                  className="form-control mt-3"
                  placeholder="Project Budget"
                ></input>
                <textarea
                  placeholder="Description"
                  name="comment"
                  className="form-control mt-3"
                ></textarea>
                <input
                  className={styles.vehicle1}
                  type="checkbox"
                  name="vehicle1"
                  checked={checkboxes.includes(
                    "Share Non Disclosure Agreement"
                  )}
                  onChange={handleOptionChange3}
                  value="Share Non Disclosure Agreement"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  {" "}
                  Share Non Disclosure Agreement
                </label>
                <button
                  className={`pink ${styles.value} bitsForm`}
                  type="submit"
                  disabled={isDisabled}
                >
                  {score}
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Modal Start*/}
      <Modal show={show} onHide={closemodal} className={styles.modalnew}>
        <Modal.Body>
          <Bitswitspopup formsaspire="popquote" />
          <span onClick={closemodal} className={styles.cross}>
            <RxCross2 />
          </span>
        </Modal.Body>
      </Modal>
      {/* Modal Start*/}
    </>
  );
};

export default Bannerdubai;
