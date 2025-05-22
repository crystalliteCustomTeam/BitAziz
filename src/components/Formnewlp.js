import React, { useState, useEffect } from "react";
import Axios from "axios";
import { usePathname } from "next/navigation";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/Formnewlp.module.css";
const Formnewlp = () => {
  const [checkboxes, setCheckboxes] = useState([]);
  const [ip, setIP] = useState("");
  const [pagenewurl, setPagenewurl] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [formStatus, setFormStatus] = useState("Submit");
  const [error, setError] = useState("");

  // Load IP address from the API
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
    setCheckboxes(
      checked
        ? [...checkboxes, value]
        : checkboxes.filter((checkbox) => checkbox !== value)
    );
  };

  const router = usePathname();
  const currentRoute = router;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setFormStatus("Processing...");
    setIsDisabled(true);
    if (!ip || !ip.ip) {
      setError("IP data is not available. Please try again later.");
      setFormStatus("Submit");
      setIsDisabled(false);
      return;
    }
    // Validate fields
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const phone = e.target.phone.value.trim();
    const message = e.target.comment.value.trim();
    const price = e.target.price.value.trim();

    if (!name || !email || !phone) {
      setError("Please fill in all required fields.");
      setFormStatus("Submit");
      setIsDisabled(false);
      return;
    }

    const currentdate = new Date().toLocaleString();
    const data = {
      page_url: pagenewurl,
      user_ip: `${ip.ip}`,
      lead_data: {
        name,
        email,
        phone,
        message,
        price,
        checkboxesdata: checkboxes.join(),
      },
    };

    const JSONdata = JSON.stringify(data);

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
      );

      if (res.status !== 200) {
        throw new Error(`Failed to submit lead: ${res.status}`);
      }

      // Second API call to SheetDB
      let headersList = {
        Accept: "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        Authorization: "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
        "Content-Type": "application/json",
      };
      let bodyContent = JSON.stringify({
        IP: `${ip.ip} - ${ip.city} - ${ip.country}`,
        Brand: "BitsWits",
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
      );
      window.location.href = "/thank-you";
    } catch (error) {
      console.error("Error during form submission:", error);
      setFormStatus("Failed...");
      setIsDisabled(false);
    }
  };

  return (
    <>
      <section className={styles.team}>
        <Container>
          <Row className="align-items-center gy-4 gy-md-5">
            <Col lg={12}>
              <h2 className="newchoose fontf fw700 white mb-3 text-center">
                Start Your Mobile App Development <br /> Journey with Us?
              </h2>
              <p className="font16 font-normal white text-center mb-0">
                Excited to turn your app concept into reality? Get in touch for
                a detailed consultation. We're keen to explore your project{" "}
                <br /> and demonstrate how our assistance can make a difference.
                Choosing Bitswits means partnering with a team <br /> dedicated
                to your app's success
              </p>
            </Col>

            <Col xl={6} className="mt-3 mt-md-4 mt-lg-0">
              <div className={styles.star}>
                <h3 className="font20 white fw800">
                  30 Minutes Strategy Session
                </h3>
                <h2 className="font40 white fw600">
                  {" "}
                  Get Your<span className="fw800 f45">
                    {" "}
                    Free 30 Minute{" "}
                  </span>{" "}
                  <br></br>{" "}
                  <span className="fw600">
                    Strategy Session With An <br></br>
                    Experienced{" "}
                  </span>{" "}
                  <span className="fw800 f45">
                    {" "}
                    App Experts{" "}
                  </span> <br></br> <span className="fw600">Valued</span> At{" "}
                  <span className="fw800 f45"> $300 </span>
                </h2>
              </div>
            </Col>
            <Col xl={6}>
              <form className={styles.your} onSubmit={handleSubmit}>
                <h3 className="font25 white fw700">
                  Have a Project To Discuss?
                </h3>
                <h2 className="f-60 mb-4 grdiant fw700">We're Ready!</h2>
                <input
                  type="text"
                  minLength="4"
                  name="name"
                  required
                  className="form-control"
                  placeholder="Enter Your Name"
                ></input>
                <input
                  type="tel"
                  minLength="10"
                  maxLength="13"
                  pattern="[0-9]*"
                  name="phone"
                  required
                  className="form-control mt-3"
                  placeholder="Enter Your Phone No"
                ></input>
                <input
                  type="email"
                  name="email"
                  required
                  className="form-control mt-3"
                  placeholder="Enter Your Email"
                ></input>
                <input
                  type="number"
                  name="price"
                  required
                  className="form-control  mt-3"
                  placeholder="Your Budget"
                ></input>
                <textarea
                  placeholder="Comment"
                  name="comment"
                  className="form-control mt-3"
                ></textarea>
                <input
                  type="submit"
                  value={formStatus}
                  name="submit"
                  className={`pink bitsForm ${styles.value}`}
                  placeholder="Submit"
                  disabled={isDisabled}
                ></input>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Formnewlp;
