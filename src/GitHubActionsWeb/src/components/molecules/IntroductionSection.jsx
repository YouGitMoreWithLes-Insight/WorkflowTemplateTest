import React from "react"
import ProfilePic from "../../assets/images/ProfilePic.jpg";

const IntroductionSection = () => {
  return (
    <section id="introduction">
      <h2>Who am I?</h2>
      <img src={ProfilePic} alt="introduction" className="profile" />
      <p>"I was born a poor black child...", Steve Martin, The Jerk
      </p>
    </section>
  )
}

export default IntroductionSection
