import React, {useState} from 'react';
import axios from 'axios';

export default function ContactForm() {

    const [status, setStatus] = useState("Send");
    const [sent, setSent] = useState(" ");

    async function handleSubmit(e){
      setStatus("Sending...");
      e.preventDefault();

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
          setSent("Your message was successfully sent.");
          document.querySelector(".contactForm").reset();
          setStatus("Send");
      }).catch(function (error) {
          setSent("Oops. there's been a problem while sending, please try again.");
          //console.log(error);
      });

      setTimeout(()=> setSent(" "), 4000);
    }
    
    return (
      <div>
        <div>{sent}</div>
        <form className="contactForm" onSubmit={handleSubmit}>
          <input id="name" placeholder="first name" type="text" required></input>
          <input id="email" placeholder="e-mail address" type="email" required></input>
          <textarea id="message" placeholder="your message" type="text" required></textarea>
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