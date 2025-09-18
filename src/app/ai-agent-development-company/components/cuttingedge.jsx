import styles from "@/styles/ai-agent-development-company/cuttingedge.module.scss";
import { Col, Container, Row } from "react-bootstrap";

const data = [
    {
        title: (<>Automation & Workflow Optimization</>),
        txt: "Our AI agents reduce manual workload by automating repetitive tasks with high accuracy. They streamline operations across departments, freeing your teams to focus on strategy, innovation, and growth."
    },
    {
        title: (<>Natural Language Understanding </>),
        txt: "We build intelligent conversational agents capable of understanding intent, context, and natural human language. These AI agents enhance customer support, simplify internal knowledge access, and enable human-like engagement."
    },
    {
        title: (<>Predictive & Prescriptive Analytics</>),
        txt: "Our AI agents go beyond reporting by delivering forward-looking insights and actionable recommendations. They help businesses anticipate trends, optimize decisions, and respond proactively to changing market conditions."
    },
    {
        title: (<>Integration & Deployment</>),
        txt: "We ensure seamless integration of AI agents into your existing systems, CRMs, and data platforms. Our solutions are built for scalability and security, enabling businesses to maximize efficiency without disruption."
    },

]
const CuttingEdge = () => {
    return (
        <section className={`${styles.cuttingEdgeSection} pb-100`}>
            <Container>
                <Row>
                    <Col md={7} className="offset-lg-1">
                        <div className="subTitle txtColor">Integrate AI into Workflows with</div>
                        <h2>BitsWits AI Agent Development Services</h2>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} xl={10} className="m-auto">
                        {data.map((item, index) => (
                            <div className={styles.cuttingEdgeWapper} key={index}>
                                <div className={styles.title}><h3><span>0{index + 1}</span>{item.title}</h3></div>
                                <div className={styles.txt}>{item.txt}</div>
                            </div>

                        ))}
                    </Col>
                </Row>

            </Container>
        </section>
    )
}

export default CuttingEdge