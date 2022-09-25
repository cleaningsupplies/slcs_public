import React from 'react';
import axios from 'axios';



export default function ContactForm() {




    //https://ciunkos.com/creating-contact-forms-with-nodemailer-and-react
    //https://github.com/Ciunkos/creating-contact-forms-with-nodemailer-and-react/tree/master/src

    const test = "HI"

    function handleSubmit(e){
      e.preventDefault();
      axios.post('http://localhost:3000/contact/hi', test)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    

    return (
      <form onSubmit={handleSubmit}>
      <input  placeholder="First Name" type="text" /><br />
     <button type="Submit">Start</button>
     </form>
    )
}
