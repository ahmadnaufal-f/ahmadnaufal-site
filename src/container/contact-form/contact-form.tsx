"use client"

import React, { useState } from "react"

const ContactForm: React.FC = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [services, setServices] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const whatsappMessage = `Name: ${name}\nServices: ${services}\nMessage: ${message}`
        const whatsappLink = `https://wa.me/+6281952803348?text=${encodeURIComponent(whatsappMessage)}`
        window.location.href = whatsappLink
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br />
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <label>
                Phone Number:
                <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
            </label>
            <br />
            <label>
                Services:
                <textarea value={services} onChange={(e) => setServices(e.target.value)} />
            </label>
            <br />
            <label>
                Message:
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}

export default ContactForm
