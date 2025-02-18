import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/styles.css';

const projects = [
  { name: 'Project One', description: 'Description of project one.' },
  { name: 'Project Two', description: 'Description of project two.' },
  // Add more projects here
];

function Projects() {
  return (
    <div>
      <header>
        <h1>My Projects</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="projects">
          <h2>Projects</h2>
          <img src="/src/assets/images/engineering-projects.jpg" alt="Engineering Projects" />
          <div id="project-list">
            {projects.map((project, index) => (
              <div key={index} className="project">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 My Engineering Portfolio</p>
      </footer>
    </div>
  );
}

ReactDOM.render(<Projects />, document.getElementById('root'));
