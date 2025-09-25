
import styles from "@/styles/components/bookingform.module.scss"



const BookingFrom = () => {

    return (
        <>
            <form autoComplete="off">
                <div className={styles.bookFrom}>
                    <div className={styles.fieldBox}>
                        <input type="text" name="name" placeholder="Your Name" required />
                    </div>
                    <div className={styles.fieldBox}>
                        <input type="email" name="email" placeholder="Your Email" required />
                    </div>
                    <div className={styles.fieldBox}>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Your Phone Number"
                            required
                        />
                    </div>
                    <div className={styles.fieldBox}>
                        <textarea
                            name="comment"
                            placeholder="Tell us about your Project"
                        ></textarea>
                    </div>
                    <div className={styles.buttonBox}>
                        <button type="submit" >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default BookingFrom