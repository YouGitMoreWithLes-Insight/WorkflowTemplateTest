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
        <p>Send me an email And I'll get back to you as quickly as possible!<div><a href="mailto:contact@lesm.me">contact@lesm.me</a></div></p>
        <p>Feel free to call me directly if it's really urgent and you can't wait.<h2 style={{display: "inline-block"}}>&#128512;</h2>
        <div><a href="tel:1-602-402-8369">1-602-402-8369</a></div></p>
        {/* <form id="contact-form">
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
        </form> */}
      </div>
    </section>
  )
}

export default ContactSection
