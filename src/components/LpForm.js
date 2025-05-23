import React, { useState, useEffect } from "react";
import Axios from "axios";
import { usePathname } from "next/navigation";
import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/LpForm.module.css";

const LpForm = (props) => {
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
    const message = "No Comments";
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
      <section className={`${styles.newAddress} ${styles[props.addresClass]}`}>
        <Container className={styles.appios}>
          <Row className="align-items-start">
            <Col lg={12}>
              <div className={styles.make}>
                <form className={styles.formsbanner} onSubmit={handleSubmit}>
                  <div className={`mb-lg-4 pb-1 text-center`}>
                    <h4 className="newchoose text-white font-bold mb-3">
                      Let's Talk Apps. Reserve A Spot!{" "}
                    </h4>
                    <p className="font18 font-medium text-white mb-3">
                      Schedule A Complimentary Strategy Session Now With Our
                      Experienced Product Strategists.
                    </p>
                  </div>
                  <Row>
                    <Col lg={3}>
                      <div>
                        <input
                          type="text"
                          minLength="4"
                          name="name"
                          className={styles.forminput}
                          placeholder="Your Name"
                          required
                        />
                      </div>
                    </Col>
                    <Col lg={3}>
                      <div>
                        <input
                          type="email"
                          name="email"
                          className={styles.forminput}
                          placeholder="Email Address"
                          required
                        />
                      </div>
                    </Col>
                    <Col lg={3}>
                      <div>
                        <input
                          type="tel"
                          name="phone"
                          minLength="10"
                          maxLength="13"
                          pattern="[0-9]*"
                          className={styles.forminput}
                          required
                          placeholder="Phone Number"
                        />
                      </div>
                    </Col>
                    <Col lg={3}>
                      <div>
                        <input
                          type="number"
                          name="price"
                          className={styles.forminput}
                          required
                          placeholder="Project Budget"
                        />
                      </div>
                    </Col>
                    <Col lg={3} className="mt-lg-3 mx-auto">
                      <div>
                        <button
                          type="submit"
                          disabled={isDisabled}
                          className={`bitsForm ${styles.book}`}
                        >
                          {formStatus}
                        </button>
                      </div>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={styles.keyFrame}>
        <Container>
          <div className={styles.cirMain}>
            <div className={styles.cir1}></div>
            <div className={styles.cir2}></div>
          </div>

          <div className={styles.para}>
            <p className="mb-0">
              Welcome to our world of innovative app creation. At BitsWits, we
              don't just create a mobile app, we transform your vision into a
              digital masterpiece. With a blend of creativity and technical
              skill, we're recognized as the best app making company dedicated
              to elevating your business.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default LpForm;
