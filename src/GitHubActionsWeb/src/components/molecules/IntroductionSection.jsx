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
      <div className="content-right"><p>I did grow up poor, misguided, and aimless. Growing up without clear direction, 
        I didn’t know what I wanted to do with my life—until one day, everything changed. While watching TV, I saw a 
        commercial for a computer programming school, and it hit me: Computers are going to rule the world, and I want 
        to rule the computers! That realization set me on a path that would define my career and passion.</p>
        <p>I pursued my education in software development, immersing myself in programming and technology. What started 
          as curiosity quickly became a lifelong journey of learning, problem-solving, and innovation. Over the past 27 
          years, I have built a career as a Software Architect and Engineer, working across numerous technologies,
           programming languages, and industries. From designing complex systems to optimizing performance and scalability,
            I have been involved in every stage of the software development lifecycle.</p>
        <p>Throughout my career, I’ve tackled diverse challenges, embraced new technologies, and stayed ahead of the 
          ever-evolving digital landscape. My passion for software development isn’t just about writing code—it’s about 
          building solutions, improving efficiency, and creating technology that makes a difference. Whether leading 
          development teams or architecting scalable systems, I thrive on the challenge of turning ideas into reality</p>
      </div>
    </section>
  )
}

export default IntroductionSection






