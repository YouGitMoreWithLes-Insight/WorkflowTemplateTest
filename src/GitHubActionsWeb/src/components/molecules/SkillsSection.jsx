import React from "react"

const SkillsSection = () => {
  return (
    <section id="skills" className="content-section">
      <div className="content-left">
        <h2>My Skills</h2>
        <img src="/src/assets/images/skills.png" alt="Engineering Skills" />
      </div>
      <div className="content-right">
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>CSS</li>
        </ul>
      </div>
    </section>
  )
}

export default SkillsSection
