import React from 'react';
import styles from "../css/contact.module.css";
import ContactForm from './ContactForm';

export default function Contact() {

  document.body.style.backgroundColor = "#DEC4C0";

  //https://w3collective.com/react-contact-form/s
  
  return (
    <div className={styles["contact"]}>
      <ContactForm />
    </div>
  )
}
