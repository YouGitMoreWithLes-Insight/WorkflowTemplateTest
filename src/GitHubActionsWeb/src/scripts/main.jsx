import '../styles/styles.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';
import IntroductionSection from '../components/molecules/IntroductionSection';
import SkillsSection from '../components/molecules/SkillsSection';
import ProjectsSection from '../components/molecules/ProjectsSection';
import ContactSection from '../components/molecules/ContactSection';

function App() {
  const [currentSection, setCurrentSection] = useState('introduction');

  const renderSection = () => {
    switch (currentSection) {
      case 'projects':
        return <ProjectsSection />;
      case 'contact':
        return <ContactSection />;
      case 'skills':
        return <SkillsSection />;
      case 'introduction':
      default:
        return <IntroductionSection />;
    }
  };

  return (
    <div>
      <Header setCurrentSection={setCurrentSection} />
      <div id="main-div" className='main-div'>
        <main style={{ width: '70%', margin: '0 auto' }}>
          {renderSection()}
        </main>
      </div>
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));