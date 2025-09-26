import styles from "@/styles/home/calender.module.scss"
import { Modal } from 'react-bootstrap'
import Calendar from 'react-calendar'
import { CalenderIcon } from '@/src/app/app-constants'
import useEmblaCarousel from 'embla-carousel-react'
import BookingFrom from "@/src/components/common/bookingfrom"
import { ClosedBtn, PoweredByIcon } from "@/src/app/app-constants"

const data = [
    {
        time: "11:00 - 12:00"
    },
    {
        time: "11:00 - 12:00"
    },
    {
        time: "11:00 - 12:00"
    },
    {
        time: "11:00 - 12:00"
    },
    {
        time: "11:00 - 12:00"
    },
    {
        time: "11:00 - 12:00"
    }
]

const BookingPopUp = ({ onHide, show }) => {
    const [emblaRef, embla] = useEmblaCarousel({ dragFree: true })
    const prevButtonHandler = () => {
        if (embla) embla.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (embla) embla.scrollNext();
    };
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <div className={styles.calendarWapper}>
                <div className={styles.closedBtn} onClick={onHide}>
                    <ClosedBtn />
                </div>

                <div className={styles.calendarbox}>
                    <h3>Mark Your Availability</h3>
                    <Calendar
                        minDate={new Date()}
                        minDetail="month"
                        maxDetail="month"
                        navigationLabel={({ date }) =>
                            date.toLocaleDateString("en-US", { month: "long" })
                        }
                        prevLabel={<CalenderIcon />}
                        nextLabel={<CalenderIcon />}
                        prev2Label={null}
                        next2Label={null}
                    />
                    <div className={styles.timeSlots}>
                        <div className={styles.timing}>
                            Select Time
                        </div>
                        <div className={styles.slots}>
                            <div className={styles.active}>Morning</div>
                            <div>Afternoon</div>
                            <div>Evening</div>
                        </div>
                    </div>
                    <div className={styles.timeSlider}>
                        <section className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {data.map((item, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={styles.sliderTime}>{item.time}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.embla_container}>
                                <div className={styles.embla_prev} onClick={prevButtonHandler}>
                                    <CalenderIcon direction="prev" />
                                </div>
                                <div className={styles.embla_next} onClick={nextButtonHandler}>
                                    <CalenderIcon direction="next" />
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className={styles.poweredBy}>
                        <PoweredByIcon />
                    </div>
                </div>
                <div className={styles.formBox}>
                    <h4>Let's start a project together</h4>
                    <p>We'll contact you within a couple of hours to schedule a meeting to discuss your goals.</p>
                    <BookingFrom />

                </div>

            </div>
        </Modal>
    )
}

export default BookingPopUp