import React from 'react';
import Navigation from '../molecules/Navigation';
import NavigationLink from '../atoms/NavigationLink';

const Header = () => {
  return (
    <header style={{ backgroundColor: 'transparent' }}>
      <h1>You Get More With Les!</h1>
      <Navigation />
    </header>
  );
};

export default Header;
