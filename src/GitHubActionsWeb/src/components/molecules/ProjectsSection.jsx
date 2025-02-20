import React from "react"
import projects from "../../assets/images/projects.png"

const ProjectsSection = () => {
  return (
    <section id="projects" className="content-section">
      <div className="content-left">
        <h2>Projects</h2>
        <img src={projects} alt="Projects" />
      </div>
      <div className="content-right">
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
          <li>Project 4</li>
        </ul>
      </div>
    </section>
  )
}

export default ProjectsSection
