import React from "react"

const ContactSection = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <img src="/src/assets/images/contact.jpg" alt="Contact" />
      <form id="contact-form">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label for="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <div>
          <button type="submit">Send</button>
        </div>
      </form>
    </section>
  )
}

export default ContactSection
