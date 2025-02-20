import '../styles/styles.css';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';
import IntroductionSection from '../components/molecules/IntroductionSection';
import SkillsSection from '../components/molecules/SkillsSection';
import ProjectsSection from '../components/molecules/ProjectsSection';
import ContactSection from '../components/molecules/ContactSection';

function App() {
  const [currentSection, setCurrentSection] = useState('introduction');
  const [fade, setFade] = useState('fade-in');

  useEffect(() => {
    setFade('fade-in');
  }, [currentSection]);

  const handleSectionChange = (section) => {
    setFade('fade-out');
    setTimeout(() => {
      setCurrentSection(section);
    }, 500);
  };

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
    <div className='main-div'>
      <Header setCurrentSection={handleSectionChange} />
      <div id="content-div" className={`content-div ${fade}`}>
        <main style={{ width: '60%', height: '80%', margin: '0 auto' }}>
          {renderSection()}
        </main>
      </div>
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));