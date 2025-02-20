import React from "react"
import contact from "../../assets/images/contact.png"

const ContactSection = () => {
  return (
    <section id="contact" className="content-section">
      <div className="content-left">
        <h2>Contact me</h2>
        <img src={contact} alt="Contact" />
      </div>
      <div className="content-right">
        <form id="contact-form">
          <div>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label for="phone">Phone (optional):</label>
            <input type="text" id="phone" name="phone" required />
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
      </div>
    </section>
  )
}

export default ContactSection
