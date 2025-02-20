import React from "react"
import ProfilePic from "../../assets/images/ProfilePic.jpg"

const IntroductionSection = () => {
  return (
    <section id="introduction" className="content-section">
      <div className="content-left">
        <h2>Les McWhirter</h2>
        <h3>Software Architect/Engineer</h3>
        <img src={ProfilePic} alt="introduction" className="profile" />
        <p>
          "My story... it was never easy for me. I was born a poor black child..." <br /> <br />- Steve Martin, The Jerk
        </p>
      </div>
      <div className="content-right"><p>I did grow up poor, misguided, and aimless. I didn't know what I was going to do with my life. 
        Then one day I was watching tv and saw a commercial for a computer programming school. 
        It was that moment that I realized "Computers are going to Rule the World!" and I want to Rule the Computers!</p>
        <p>So I went to school, learned how to program, and have been doing it ever since.
        I have worked with many different technologies and have learned many different languages.</p>
        <p>I am a Software Architect/Engineer with over 27 years of experience in the software development field.</p>
        <p>I have worked on many different projects and have been involved in all aspects of the software development lifecycle.</p>  
      </div>
    </section>
  )
}

export default IntroductionSection
