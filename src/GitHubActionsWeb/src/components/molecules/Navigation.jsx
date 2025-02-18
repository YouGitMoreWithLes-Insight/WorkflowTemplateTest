import React from 'react';
import NavigationLink from '../atoms/NavigationLink';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <NavigationLink href="/">Home</NavigationLink>
        <NavigationLink href="/pages/projects.html">Projects</NavigationLink>
        <NavigationLink href="/pages/contact.html">Contact</NavigationLink>
      </ul>
    </nav>
  );
};

export default Navigation;
