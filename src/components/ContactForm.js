import React, { useState } from 'react'

export default function ContactForm() {

    const [status, setStatus] = useState("YOYO")

    async function handleSubmit(e){
        e.preventDefault();
        setStatus("Sending...");

        const {name, email, message} = e.target.elements;

        let details = {
            name: name.value,
            email: email.value,
            message: message.value
        }
        
        let response = await fetch("http://localhost:3000/contact",{
            method: "POST",
            headers: {
                "Content-Type":"application/json;charset=utf-8",
            },
            body:JSON.stringify(details),
        });

        setStatus("Submit");

        let result = await response.json();
        console.log(result.status);
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
