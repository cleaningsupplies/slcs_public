import React, {useState} from 'react';
import axios from 'axios';
import styles from "../css/contactForm.module.css";

export default function ContactForm() {

    const [status, setStatus] = useState("Send");
    const [sent, setSent] = useState("Your message was successfully sent.");
    const [prevInput, setPrevInput] = useState("name");

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
          
          //reset form and its labels
          form.reset();
          let labels = document.querySelectorAll("label");
          for(let i = 0; i < labels.length; i++){
            labels[i].style.visibility = "hidden";
          }
          setStatus("Send");
      }).catch(function (error) {
          setSent("Oops. there's been a problem while sending, please try again.");
          //console.log(error);
      });

      setTimeout(()=> userFeedback.style.visibility = "hidden", 4000);
    }

    document.addEventListener("click", (e) => {
      switchBetweenInput(e.target.id);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === "Tab") {
        e.preventDefault();
      //   let id = e.target.id;
      //   if(id ==="name"){
      //     id = "email";
      //   }else if (id === "email"){
      //     id = "message";
      //   }else if(id === "message"){
      //     id = "email";
      //   }
      //   switchBetweenInput(id);
      }
      
    });

    function switchBetweenInput(id){
      switch(id){
        case "name": hidePrevLabel(); setLabelVisible(id); break;
        case "email": hidePrevLabel(); setLabelVisible(id); break;
        case "message": hidePrevLabel(); setLabelVisible(id); break;
        default: hidePrevLabel(); break;
      };
    }

    function hidePrevLabel(){
      //console.log(prevInput, document.getElementById(prevInput).value, e.target.id, e.target.value)
      //TODO add classes to fade
        if(document.getElementById(prevInput).value === ""){
          document.getElementById(prevInput.substring(0,1)).style.visibility = "hidden";
        }
    }

    function setLabelVisible(id){
      setPrevInput(id);
      document.getElementById(id.substring(0,1)).style.visibility = "visible"; 
    }


   
    return (
      <div className={styles["formContainer"]}>
        <div id="sent" className={styles["sent"]}>{sent}</div>
        <form id="form" className={styles["form"]} onSubmit={handleSubmit}>
          <label id="n" htmlFor='name'>Name</label>
          <input id="name" className={styles["name"]} placeholder="Name" type="text" tabIndex="12" required></input>
          <label id="e" htmlFor='email'>E-Mail address</label>
          <input id="email" className={styles["email"]} placeholder="E-Mail address" type="email" tabIndex="13" required></input>
          <label id="m" htmlFor='message'>Message</label>
          <textarea id="message" className={styles["message"]} placeholder="Message" type="text" tabIndex="14" required></textarea>
          <button className={styles["submit"]} type="Submit">{status}</button>
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