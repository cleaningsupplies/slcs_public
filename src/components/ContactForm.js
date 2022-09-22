import React, { useState } from 'react'
import axios from "axios";

export default function ContactForm() {

    const [status, setStatus] = useState("Submit")

    //https://ciunkos.com/creating-contact-forms-with-nodemailer-and-react

    function handleSubmit(e){
        e.preventDefault();
    }

    

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name:</label>
                <input type="text" id="name"></input>
            </div>
            <div>
                <label htmlFor='email'>E-Mail:</label>
                <input type="email" id="email"></input>
            </div>
            <div>
                <label htmlFor='message'>Message:</label>
                <textarea type="text" id="message" required></textarea>
            </div>
            <button type='submit'>{status}</button>
        </form>
    )
}
