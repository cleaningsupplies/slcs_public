import React, {useState} from 'react';
import axios from 'axios';
import styles from "../css/contactForm.module.css";

export default function ContactForm() {

    const [status, setStatus] = useState("Send");
    const [sent, setSent] = useState("Your message was successfully sent.");

    async function handleSubmit(e){
      setStatus("Sending...");
      e.preventDefault();

      const form = document.querySelector("#form");
      const userFeedback = document.querySelector("#sent");

      const { name, email, message } = e.target.elements;
      let details = {
        name: name.value,
        email: email.value,
        message: message.value,
      };
     
      axios({
        method: 'POST',
        url: "http://localhost:3000/contact/sendForm",
        headers: {}, 
        data: {
          details: details,
        }
      }).then(function (response) {
          //console.log(response);
          userFeedback.style.visibility = "visible";
          //setSent("Your message was successfully sent.");
          form.reset();
          setStatus("Send");
      }).catch(function (error) {
          setSent("Oops. there's been a problem while sending, please try again.");
          //console.log(error);
      });

      setTimeout(()=> userFeedback.style.visibility = "hidden", 4000);
    }
    
    return (
      <div className={styles["formContainer"]}>
        <div id="sent" className={styles["sent"]}>{sent}</div>
        <form id="form" className={styles["form"]} onSubmit={handleSubmit}>
          <input id="name" className={styles["name"]} placeholder="first name" type="text" required></input>
          <input id="email" className={styles["email"]} placeholder="e-mail address" type="email" required></input>
          <textarea id="message" className={styles["message"]} placeholder="your message" type="text" required></textarea>
          <button type="Submit">{status}</button>
        </form>
      </div>
    )
}


    //https://ciunkos.com/creating-contact-forms-with-nodemailer-and-react
    //https://github.com/Ciunkos/creating-contact-forms-with-nodemailer-and-react/tree/master/src
    //https://w3collective.com/react-contact-form/

      /*
      let response = await fetch("http://localhost:3000/contact/hi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });
      //setStatus("Submit");
      let result = await response.json();
      console.log(result);
      */


          //   const inputVal = inputRef.current.value;
    //   console.log(inputVal)
    //   e.preventDefault();
    //   axios.post('http://localhost:3000/contact/hi', JSON.stringify(details))
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });