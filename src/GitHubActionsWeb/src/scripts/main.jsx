import '../styles/styles.css';
// import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';
import SkillsSection from '../components/molecules/SkillsSection';
import ProjectSection from '../components/molecules/ProjectsSection';
import ContactSection from '../components/molecules/ContactSection';

function App() {
  return (
    <div>
      <Header />
      <div>
        <main style={{ width: '66.67%', margin: '0 auto' }}>
          <SkillsSection />
          <ProjectSection />
          <ContactSection />
        </main>
      </div>
      <Footer /> 
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
