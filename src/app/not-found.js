"use client"
import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Error.module.css'
import PopUp from "@/src/app/services/popup"
const NotFound = () => {
    const [modalShow, setModalShow] = useState(false);
    const handlePopUp = () => {
        setModalShow(true);
    };
    return (
        <>
            <div className={styles.error}>
                <Container>
                    <Row>
                        <Col>
                            <h2 className='fw600 font60 color-blue t-center font-f mb-4'>404 NOT FOUND</h2>
                            <h4 className="fw500 font40 color-white t-center font-f mb-2">THIS IS SOMEWHAT EMBARRASSING, ISN’T IT?</h4>
                            <p className="font18 fw400 color-white t-center font-f mb-4">It looks like nothing was found at this location. Maybe try a search?</p>
                            <div className='mt-4 t-center'>
                                <a href='javascript:;' onClick={() => handlePopUp()} className={styles.btn404}>LET'S DISCUSS</a>
                                <a href="tel:8335006007" className={styles.btn404}>+1 833 500 6007</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <PopUp show={modalShow} onHide={() => setModalShow(false)} />
            </div>
        </>
    );
}

export default NotFound;