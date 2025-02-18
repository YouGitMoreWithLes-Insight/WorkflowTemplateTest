import React from 'react';
import Navigation from '../molecules/Navigation';
import NavigationLink from '../atoms/NavigationLink';

const Header = ({ setCurrentSection }) => {
  return (
    <header style={{ backgroundColor: 'transparent' }}>
      <h1>You Get More With Les!</h1>
      <Navigation setCurrentSection={setCurrentSection} />
    </header>
  );
};

export default Header;
