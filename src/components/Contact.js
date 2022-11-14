import React from 'react';
import styles from "../css/contact.module.css";
import ContactForm from './ContactForm';

export default function Contact() {

  return (
    <>
      <div className={styles["contact"]}>
        <div className={styles["intro"]}>
          <div className={styles["text"]}>
            You have a question or just want to chat?
            <br></br>
            <br></br>
            I'd be happy to hear from you!
          </div>
        </div>
        <div className={styles["contact_container"]}>
          <ContactForm />
        </div>
      </div>
    </>
  )
}
