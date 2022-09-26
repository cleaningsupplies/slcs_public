import React, {useRef} from 'react';
import axios from 'axios';



export default function ContactForm() {




    //https://ciunkos.com/creating-contact-forms-with-nodemailer-and-react
    //https://github.com/Ciunkos/creating-contact-forms-with-nodemailer-and-react/tree/master/src
    //https://w3collective.com/react-contact-form/

    const inputRef = useRef(null);

    async function handleSubmit(e){
      e.preventDefault();
      //setStatus("Sending...");
      const { name } = e.target.elements;
      let details = {
        name: name.value,
      };
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

      axios({
        method: 'POST',
        url: "http://localhost:3000/contact/hi",
        headers: {}, 
        data: {
          details: details
        }
      }) .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
      });
      
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
   }
    

    return (
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} id="name" placeholder="First Name" type="text"></input>
     
        <button type="Submit">Start</button>
      </form>
    )
}
