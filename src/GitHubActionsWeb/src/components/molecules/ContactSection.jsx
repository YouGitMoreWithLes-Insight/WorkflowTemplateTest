import React from "react"

const ContactSection = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <img src="/src/assets/images/contact.jpg" alt="Contact" />
      <form id="contact-form">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  )
}

export default ContactSection
