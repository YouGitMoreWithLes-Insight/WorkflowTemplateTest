import React from 'react';

const NavigationLink = ({ onClick, children }) => {
  return (
    <li>
      <a href="#" onClick={(e) => { e.preventDefault(); onClick(); }}>
        {children}
      </a>
    </li>
  );
};

export default NavigationLink;
