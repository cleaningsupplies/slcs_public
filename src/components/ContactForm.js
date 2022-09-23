import React, { useState } from 'react';



export default function ContactForm() {




    //https://ciunkos.com/creating-contact-forms-with-nodemailer-and-react


    
    

    return (
        <form method='POST'>
            <div>
                <label htmlFor='name'>Name:</label>
                <input type="text" id="name"></input>
            </div>
            <div>
                <label htmlFor='email'>E-Mail:</label>
                <input type="text" id="email"></input>
            </div>
            <div>
                <label htmlFor='message'>Message:</label>
                <textarea type="text" id="message" required></textarea>
            </div>
            <button type='submit'>Snedin</button>
        </form>
    )
}
