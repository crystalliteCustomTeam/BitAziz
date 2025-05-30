import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/Brand.module.css";
//images
import free from "@/public/newdubai/free.png";

const Brand = (props) => {
  const [ip, setIP] = useState("");
  const [pagenewurl, setPagenewurl] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [score, setScore] = useState("Submit");

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

  const router = usePathname();
  const currentRoute = router;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsDisabled(true);
    const currentdate = new Date().toLocaleString();
    const firstNameValue = e.target.first.value;
    const lastNameValue = e.target.last.value;
    const fullName = firstNameValue + " " + lastNameValue;
    const data = {
      page_url: pagenewurl,
      user_ip: `${ip.ip}`,
      lead_data: {
        name: fullName,
        email: e.target.email.value,
        phone: e.target.phone.value,
        message: e.target.comment.value,
        price: e.target.price.value,
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
          value: fullName,
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

  return (
    <>
      <section className={styles.trandubai}>
        <Container>
          <Row className={`${styles.newtsl} gy-3 gx-0`}>
            <Col lg={4}>
              <div className={styles.imgtoken}>
                <Image
                  src={free}
                  width={436}
                  height={618}
                  alt="Bitswits"
                  loading="lazy"
                  sizes="100vw"
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col lg={8}>
              <div className={styles.level}>
                <h2>
                  {" "}
                  <span>Let’s Level Up</span> Your <br></br>
                  Brand, Together
                </h2>
                <form className={styles.your} onSubmit={handleSubmit}>
                  <div>
                    <div className={styles.chill}>
                      <input
                        type="text"
                        placeholder="First Name"
                        name="first"
                        required
                      />

                      <input
                        type="tel"
                        placeholder="Phone"
                        minLength="10"
                        maxLength="13"
                        pattern="[0-9]*"
                        name="phone"
                        required
                      />
                    </div>

                    <div className={styles.chill}>
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        required
                      />
                      <input
                        type="number"
                        placeholder="Project Budget"
                        name="price"
                        required
                      />
                    </div>
                    <div className={styles.chill}></div>
                    <div className={styles.chill}>
                      <textarea
                        placeholder="Write message here..."
                        className={styles.message}
                        name="comment"
                        rows="4"
                        cols="50"
                      />
                    </div>
                    <div className={styles.chill}>
                      <button
                        type="submit"
                        className="pink bitsForm"
                        disabled={isDisabled}
                      >
                        {score}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Brand;
