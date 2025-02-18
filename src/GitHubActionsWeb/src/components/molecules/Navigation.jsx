import React from 'react';
import NavigationLink from '../atoms/NavigationLink';

const Navigation = ({ setCurrentSection }) => {
  return (
    <nav>
      <ul>
        <NavigationLink onClick={() => setCurrentSection('introduction')}>Home</NavigationLink>
        <NavigationLink onClick={() => setCurrentSection('skills')}>Skills</NavigationLink>
        <NavigationLink onClick={() => setCurrentSection('projects')}>Projects</NavigationLink>
        <NavigationLink onClick={() => setCurrentSection('contact')}>Contact</NavigationLink>
      </ul>
    </nav>
  );
};

export default Navigation;
