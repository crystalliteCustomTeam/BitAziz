import ButtonCommon from "@/src/components/common/button";
import styles from "@/styles/ai-agent-development-company/whychoose.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import ProjectCounter from "@/src/app/ai-agent-development-company/components/projectcounter";
const data = [
    {
        tit: "Expert Development Team",
        txt: "Our team has years of hands-on experience in AI agent development across multiple industries. We combine technical expertise with practical knowledge to deliver automation solutions that solve real challenges. Each project is approached strategically to maximize impact and efficiency."
    },
    {
        tit: "Smart Automation",
        txt: "We design AI agents that smartly automate repetitive and time-consuming tasks. By streamlining operations, your teams can focus on higher-value work, improving productivity across the organization. Our solutions ensure accuracy while reducing human error."
    },
    {
        tit: "Scalable Architecture",
        txt: "Our AI agents are built to grow with your business, handling increased workloads and complexity seamlessly. The architecture is designed for flexibility, so new features or integrations can be added without disruption. Scalability ensures long-term value from your AI investment."
    },
    {
        tit: "Reliable Performance",
        txt: "We prioritize robust, secure, and optimized AI agent performance for real-case use. Our AI agents are tested extensively to handle high-demand scenarios while maintaining speed and accuracy. This reliability ensures consistent results and trust in your AI systems."
    }
]

const WhyChoose = () => {
    return (
        <section className={`${styles.whyChooseSection} p-100`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={5} lg={5} className="my-auto">
                        <div className="subTitle txtColor">Why Choose Us</div>
                        <h2>Trusted Experts in AI Agent Development</h2>
                        <p>We develop intelligent agents that redefine how businesses operate. Our custom-built agents streamline workflows, enhance decision-making, and set the standard for efficiency and innovation in your industry. </p>
                        <ButtonCommon txt="Free Consultation" />
                    </Col>
                    <Col md={7} lg={6} className="offset-lg-1">
                        {data.map((item, index) => (
                            <div className={styles.whyWapper} key={index}>
                                <h5>{item.tit}</h5>
                                <p>{item.txt}</p>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
            <ProjectCounter />
        </section>

    )
}

export default WhyChoose